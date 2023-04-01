import style from "./Result.module.scss";
import {
  Search_result_card,
  My_bookmark_card,
  My_like_card,
} from "../UI/Card_ui";
import { cocktailType } from "../../type/cocktailTypes";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface propsType {
  clickSearchBtn: boolean;
}

const Result: React.FunctionComponent<propsType> = ({ clickSearchBtn }) => {
  const [cocktail, setCokctail] = useState<cocktailType[]>([]);
  const [page, setPage] = useState<number>(0);
  const [sortingNum, setSortingNum] = useState<number>(0);
  const [cocktailCnt, setCocktailCnt] = useState<number>(0);
  const [pageEnd, setPageEnd] = useState<boolean>(false);
  let [sendIngredient, setSendIngredient] = useState<string[]>([]);
  const [resultLandering, setResultLandering] = useState<boolean>(false);

  let name = useSelector((state: RootState) => state.nameSelect.searchName);
  let base = useSelector((state: RootState) => state.baseSelect.base);
  let color = useSelector((state: RootState) => state.colorSelect.color);
  let difficulty = useSelector(
    (state: RootState) => state.difficultySelect.difficulty
  );
  let ingredient = useSelector(
    (state: RootState) => state.ingredientSelect.ingredient
  );
  console.log(ingredient);

  useEffect(() => {
    let tmpcolor: string = null;
    let tmpdifficulty: string = null;
    let tmpingredient: string = null;
    if (name === "") {
      name = null;
    }
    if (base === "") {
      base = null;
    }
    if (color?.length === 0) {
      tmpcolor = null;
    } else {
      tmpcolor = color.join(",");
    }
    if (difficulty?.length === 0) {
      console.log("나 동작하지?");
      tmpdifficulty = null;
    } else {
      tmpdifficulty = difficulty.join(",");
    }
    //참인 것들만 재료에 담아줘..
    ingredient.filter((ingre) =>
      ingre.ingredient_add
        ? setSendIngredient([...sendIngredient, ingre.ingredient_name])
        : ""
    );
    tmpingredient = sendIngredient.join(",");

    setPage(0);

    axios
      .get(`https://j8b208.p.ssafy.io/api/cocktails/search`, {
        params: {
          page: 0,
          sort_num: sortingNum,
          cocktail_name: name,
          cocktail_base: base,
          cocktail_color: tmpcolor,
          cocktail_difficulty: tmpdifficulty,
          cocktail_ingredient: sendIngredient,
        },
      })
      .then((response) => {
        response.data.data;
        setCokctail([, ...response.data.data]);
        setCocktailCnt(response.data.max);
        setPage(response.data.next_page);
        console.log(response);
        setPageEnd(response.data.is_end);
      });
  }, [clickSearchBtn]);
  console.log(cocktail);

  //정렬 기준이 바뀔때마다 useEffect 새로해주어야함.(즉 axios통신 새로해주기.)
  useEffect(() => {}, [sortingNum]);

  //현재 선택한 것들을 기준으로 좋아요 순으로 정렬.
  const sortLike = () => {
    setSortingNum(1);
  };

  //현재 선택한 것들을 기준으로 별점 순으로 정렬
  const sortRating = () => {
    setSortingNum(2);
  };

  //무한 스크롤 구현.
  const handelScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const isEnd =
      Math.round(target.scrollTop + target.clientHeight) ===
      target.scrollHeight - 20;

    if (isEnd && !pageEnd) {
      //끝을 감지했다면?
      axios
        .get(`https://j8b208.p.ssafy.io/api/cocktails/search`, {
          params: {
            page: page,
            sort_num: 0,
            cocktail_name: null,
            cocktail_base: null,
            cocktail_color: null,
            cocktail_difficulty: null,
            cocktail_ingredient: null,
          },
        })
        .then((response) => {
          response.data.data;
          setCokctail([...cocktail, ...response.data.data]);
          setPage(response.data.next_page);
          setPageEnd(response.data.is_end);
        });
    }
  };

  return (
    <>
      <div className={style.result}>
        <div className={style.result_header}>
          <div className={style.result_count}>총 {cocktailCnt}건</div>
          <div className={style.result_sort}>
            <input
              type="radio"
              id="like"
              name="sort"
              className={style.result_sort_btn}
            />
            <label
              htmlFor="like"
              className={style.result_sort_label}
              onClick={sortLike}
            >
              좋아요
            </label>
            |
            <input
              type="radio"
              id="rank"
              name="sort"
              className={style.result_sort_btn}
            />
            <label
              htmlFor="rank"
              className={style.result_sort_label}
              onClick={sortRating}
            >
              별점
            </label>
          </div>
        </div>
        <div className={style.result_card_list} onScroll={handelScroll}>
          {cocktail.map((key) => (
            <Search_result_card {...key} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Result;
