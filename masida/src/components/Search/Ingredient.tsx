import { useState } from "react";
import style from "./Ingredient.module.scss";

type ingre = {
  id : number,
  name : string,
  add : boolean, //추가되었는지 안되었는지를 확인해주는 변수입니다.
}

const Ingredient = () => {
  const[ingredient, isIngredient] =  useState<string[]>([]);


  //검색에서는 filter함수를 써야할 것같음. 값만 쏙 빼내오기 위해.
  const searchIngredient = (event : React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    console.log(target.value); //값 찍힘.
  
    
  }
  return (
    <>
      <div className={style.ingredient}>
        <div className={style.ingredient_form}>
          <h3>재료</h3>
          <input
            type="search"
            placeholder="Search"
            className={style.ingredient_form_input}
            onChange={searchIngredient}
          />
        </div>
        <div className={style.ingredient_search_result_list}>
          <div className={style.ingredient_search_result_item}>
            바나나 +
          </div>
        </div>
      </div>
    </>
  );
};

export default Ingredient;
