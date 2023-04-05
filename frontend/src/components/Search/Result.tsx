import style from "./Result.module.scss";
import {
  Search_result_card,
} from "../UI/Card_ui";
import { cocktailType } from "../../type/cocktailTypes";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { searchIngredientType } from "../../type/ingredientTypes";

interface propsType {
  clickSearchBtn: boolean;
  addNumIngredient : number[];
}

const Result: React.FunctionComponent<propsType> = ({ clickSearchBtn, addNumIngredient }) => {
  const [cocktail, setCokctail] = useState<cocktailType[]>([]);
  const [page, setPage] = useState<number>(0);
  const [sortingNum, setSortingNum] = useState<number>(0);
  const [cocktailCnt, setCocktailCnt] = useState<number>(0);
  const [pageEnd, setPageEnd] = useState<boolean>(false);
  let [, setSendIngredient] = useState<number[]>([]);
  let [likeChecked, setLikeChecked] = useState<boolean>(false);
  let [rankChecked, setRankChecked] = useState<boolean>(false);
  let [sortCheckName, setSortCheckName] = useState<string>("");

  let name = useSelector((state: RootState) => state.nameSelect.searchName);
  let base = useSelector((state: RootState) => state.baseSelect.base);
  let color = useSelector((state: RootState) => state.colorSelect.color);
  let difficulty = useSelector(
    (state: RootState) => state.difficultySelect.difficulty
  );
  let ingredient = useSelector(
    (state: RootState) => state.ingredientSelect.ingredient
  );

  
  //처음 시작할때, 검색할때 초기화 시켜줄 배열입니다.
  const resetCocktail: cocktailType[] = [];
  
  
  const cocktailSearch = (sort: number) => {
    let tmpcolor: string = null;
    let tmpdifficulty: string = null;
    let tmpingredient: string = null;
    setCokctail(resetCocktail);
    setSortingNum(sort);
    
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
      tmpdifficulty = null;
    } else {
      tmpdifficulty = difficulty.join(",");
    }
    //참인 것들만 재료에 담아줘..
    tmpingredient = addNumIngredient.join(",");
    
    setPage(0);
    console.log(name);
    
    axios
    .get(`https://j8b208.p.ssafy.io/api/cocktails/search`, {
      params: {
        page: 0,
        sort_num: sortingNum,
        cocktail_name: name,
          cocktail_base: base,
          cocktail_color: tmpcolor,
          cocktail_difficulty: tmpdifficulty,
          cocktail_ingredient: tmpingredient,
        },
      })
      .then((response) => {
        setCokctail([...resetCocktail, ...response.data.data]);
        setCocktailCnt(response.data.max);
        setPage(response.data.next_page);
        setPageEnd(response.data.is_end);
        setSendIngredient([]);
      })
      .catch(() => {
        //해당되는 데이터가 없다는 소리이므로 데이터의 총 개수 0으로 설정
        setCocktailCnt(0);
      });
    };
    
    useEffect(() => {
      cocktailSearch(0);
      setLikeChecked(false);
      setRankChecked(false);
    }, [clickSearchBtn]);
    
    //정렬 기준이 바뀔때마다 useEffect 새로해주어야함.(즉 axios통신 새로해주기.)
    useEffect(() => {
      cocktailSearch(sortingNum);
    }, [sortingNum]);
    
    //현재 선택한 것들을 기준으로 좋아요 순으로 정렬.
    const sortLike = (e : React.MouseEvent<HTMLLabelElement>) => {
    const target = e.target as HTMLLabelElement;
    if(sortCheckName === target.htmlFor) {
      setLikeChecked(false);
      setRankChecked(false);
      setSortCheckName("");
      setSortingNum(0);   
    }else {
      setLikeChecked(true);
      setRankChecked(false);
      setSortCheckName(target.htmlFor);
      setSortingNum(1);
    }
  };
  
  //현재 선택한 것들을 기준으로 별점 순으로 정렬
  const sortRating = (e : React.MouseEvent<HTMLLabelElement>) => {
    const target = e.target as HTMLLabelElement;
    
    if(sortCheckName === target.htmlFor) {
      setLikeChecked(false);
      setRankChecked(false);
      setSortCheckName("");
      setSortingNum(0);   
    }else {
      setRankChecked(true);
      setLikeChecked(false);
      setSortCheckName(target.htmlFor);
      setSortingNum(2);
    }
  };
  
  //무한 스크롤을 위한 베이스, 색상, 난이도, 재료가 있어야 할것 같다.(useEffect로 처음 실행할때만 동작하게.)
  const [saveName, setSaveName] = useState<string>();
  const [saveBase, setSaveBase] = useState<string>();
  const [saveColor, setSaveColor] = useState<string[]>([]);
  const [saveDifficulty, setSaveDifficulty] = useState<string[]>([]);
  const [saveIngredient, setSaveIngredient] = useState<searchIngredientType[]>([]);

  useEffect(() => {
    setSaveName(name);
    setSaveBase(base);
    setSaveColor(color);
    setSaveDifficulty(difficulty);
    setSaveIngredient(ingredient);
  }, [])

  //무한 스크롤 구현.
  const handelScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const isEnd =
    Math.round(target.scrollTop + target.clientHeight) >
      target.scrollHeight - 20;
      
    if (isEnd && !pageEnd) {
      let tmpcolor: string = null;
      let tmpdifficulty: string = null;
      let tmpingredient: string = null;
      

      if (saveBase === "") {
        setSaveBase(null);
      }
      if (saveColor?.length === 0) {
        tmpcolor = null;
      } else {
        tmpcolor = saveColor.join(",");
      }
      if (saveDifficulty?.length === 0) {
        tmpdifficulty = null;
      } else {
        tmpdifficulty = saveDifficulty.join(",");
      }
      //참인 것들만 재료에 담아줘..
      tmpingredient = saveIngredient.join(",");

      //끝을 감지했다면?
      axios
        .get(`https://j8b208.p.ssafy.io/api/cocktails/search`, {
          params: {
            page: page,
            sort_num: sortingNum,
            cocktail_name: saveName,
            cocktail_base: saveBase,
            cocktail_color: tmpcolor,
            cocktail_difficulty: tmpdifficulty,
            cocktail_ingredient: tmpingredient,
          },
        })
        .then((response) => {
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
              value="좋아요"
              className={style.result_sort_btn}
              checked={likeChecked}
            />
            <label
              htmlFor="좋아요"
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
              value="별점"
              className={style.result_sort_btn}
              checked={rankChecked}
            />
            <label
              htmlFor="별점"
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
