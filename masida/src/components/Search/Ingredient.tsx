import { useState } from "react";
import style from "./Ingredient.module.scss";
import { searchedIngredient } from "../Search/Category";

const Ingredient = (props: searchedIngredient) => {
  // const [ingredient, isIngredient] = useState<string[]>([]);
  const { ingredient } = props;

  //검색에서는 filter함수를 써야할 것같음. 값만 쏙 빼내오기 위해.
  const searchIngredient = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    console.log(target.value); //값 찍힘.
  };
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
          {ingredient.map((key) => (
            <>
              {key.ingredient_add ? (
                <div></div>
              ) : (
                <div className={style.ingredient_search_result_item}>
                  {key.ingredient_name} +
                </div>
              )}
            </>
          ))}
        </div>
        <div className={style.ingredient_search_added_list}>
          {ingredient.map((key) => (
            <>
              {key.ingredient_add ? (
                <div className={style.ingredient_search_added_item}>
                  {key.ingredient_name} -
                </div>
              ) : (
                <div></div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ingredient;
