import Category from "./Category";
import style from "./Sidebar.module.scss";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { searchIngredientType } from "@/type/ingredientTypes";

const Sidebar = () => {

  const [addIngredient, setAddIngredient] = useState<searchIngredientType[]>([]);
  const selectIngredient = useSelector(
    (state: RootState) => state.ingredientSelect
  );
  const selectBase = useSelector((state : RootState) => state.baseSelect);
  const selectColor = useSelector((state : RootState) => state.colorSelect);
  const selectDifficulty = useSelector((state : RootState) => state.difficultySelect);
  
  //내가 추가한 재료들만 뽑아내기위해 useEffect를 사용해 주었습니다.
  //내가 데이터를 보냈을 때 백에서 true인것만 빼서 해도 됍니다.(데이터가 많은 경우에는 이게 더 처리가 빠르고 좋겠다.)
  useEffect(() => {
    setAddIngredient(() => {
      return selectIngredient.ingredient.filter((ingre) =>
        ingre.ingredient_add === true,
      )}
    );
  },[selectIngredient]);

  //여기에서 axios 요청을 할거야!
  const searchCocktail = (e : React.MouseEvent<HTMLElement>) => {
    console.log(addIngredient);
    console.log(selectBase.base);
    console.log(selectColor.color);
    console.log(selectDifficulty.difficulty);
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
          ></input>
          <button className={style.search_btn} onClick={searchCocktail}>검색</button>
        </form>
        <Category />
      </div>
    </>
  );
};

export default Sidebar;
