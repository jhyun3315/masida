import style from "./Result.module.scss";
import { Search_result_card, My_bookmark_card, My_like_card } from "../UI/Card_ui";
import { cocktailType } from "../../type/cocktailTypes";
import { useState, useEffect } from 'react';
import axios from "axios";

const Result = () => {
  const [cocktail, setCokctail] = useState<cocktailType[]>([]);
  const [page, setPage] = useState<number>(0);
  const [sortingNum, setSortingNum] = useState<number>(0);

  useEffect(() => {
    axios
      .get(`https://j8b208.p.ssafy.io/api/cocktails/search`, {
        params : {
          page : page,
          sort_num : sortingNum,
          cocktail_name : null,
          cocktail_base : null,
          cocktail_color : null,
          cocktail_difficulty  : null,
          cocktail_ingredient : null,
        }
      })
      .then((response) => {
        response.data.data;
        setCokctail([...cocktail, ...response.data.data]);
        setPage(page+1);
      });
  },[])
  // console.log(cocktail);

  //정렬 기준이 바뀔때마다 useEffect 새로해주어야함.(즉 axios통신 새로해주기.)
  useEffect(() => {

  },[sortingNum]);

  
  //현재 선택한 것들을 기준으로 좋아요 순으로 정렬.
  const sortLike = () => {
    setSortingNum(1);
  }


  //현재 선택한 것들을 기준으로 별점 순으로 정렬
  const sortRating = () => {
    setSortingNum(2);
  }

  //무한 스크롤 구현.
  const handelScroll = (e : React.UIEvent<HTMLDivElement>) => {
    console.log(e);
    console.log(e.target);
    
    const target = e.target as HTMLDivElement;
    const isEnd = Math.round((target.scrollTop + target.clientHeight))  === target.scrollHeight;
    console.log(target.scrollTop + target.clientHeight);
    console.log(target.scrollHeight);
    
    
    console.log(isEnd);
    
    if(isEnd) { //끝을 감지했다면?
       axios
      .get(`https://j8b208.p.ssafy.io/api/cocktails/search`, {
        params : {
          page : page,
          sort_num : 0,
          cocktail_name : null,
          cocktail_base : null,
          cocktail_color : null,
          cocktail_difficulty  : null,
          cocktail_ingredient : null,
        }
      })
      .then((response) => {
        response.data.data;
        setCokctail([...cocktail, ...response.data.data]);
        setPage(page+1);
      });
    }
    
    
    
  }
  
  return (
    <>
      <div className={style.result}>
        <div className={style.result_header}>
          <div className={style.result_count}>총 건</div>
          <div className={style.result_sort}>
            <input
              type="radio"
              id="like"
              name="sort"
              className={style.result_sort_btn}
            />
            <label htmlFor="like" className={style.result_sort_label} 
            onClick={sortLike}>
              좋아요
            </label>
            |
            <input
              type="radio"
              id="rank"
              name="sort"
              className={style.result_sort_btn}
            />
            <label htmlFor="rank" className={style.result_sort_label}
            onClick={sortRating}>
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
