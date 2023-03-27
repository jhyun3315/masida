import Category from "./Category";
import style from "./Sidebar.module.scss";
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import { setSelectName } from "../../../store/category/nameSlice";
import { searchIngredientType } from "../../type/ingredientTypes";

const Sidebar = () => {
  const dispatch = useDispatch;
  const [addIngredient, setAddIngredient] = useState<searchIngredientType[]>([]);
  const [searchName, setSearchName] = useState<string>("");
  
    //내가 추가한 재료들만 뽑아내기위해 useEffect를 사용해 주었습니다.
    //내가 데이터를 보냈을 때 백에서 true인것만 빼서 해도 됍니다.(데이터가 많은 경우에는 이게 더 처리가 빠르고 좋겠다.)
      
      
    //칵테일 이름 dispatch해주어서 넣어주기
  const searchCocktailName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchName(target.value);
    console.log(target.value);
    
  }
  
  // useEffect(() => {
  //   dispatch(setSelectName(searchName));
  // },[searchName]);
  
  //여기에서 axios 요청을 할거야!
  const searchCocktail = (e : React.MouseEvent<HTMLElement>) => {
    // dispatch(setSelectName(searchName));
    e.preventDefault();
  }
  
  
  return (
    <>
      <div className={style.sidebar}>
        <form className={style.search}>
          <input
            id="search"
            placeholder="Search"
            className={style.search_form}
            value={searchName}
            onChange={searchCocktailName}
          ></input>
          <button className={style.search_btn} onClick={searchCocktail}>검색</button>
        </form>
        <Category />
      </div>
    </>
  );
};

export default Sidebar;
