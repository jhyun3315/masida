import { useState } from "react";
import style from "./Ingredient.module.scss";
import { searchedIngredient, searchIngredient } from "../Search/Category";

const Ingredient = (props: searchedIngredient) => {
  const { ingredient } = props;
  let [inputvalue, setInputValue] = useState<string>("")
  let [addedIngredient, setAddedIngredient] = useState<searchIngredient[]>([]);
  let [listIngredient, setListIngredient] = useState<searchIngredient[]>([]);

  //재료검색
  const searchIngredient = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setListIngredient(() => {
      return ingredient.filter((ingre) => ingre.ingredient_name.includes(target.value)
      );
    })
    //ingre.ingredient_name 이 target.value를 포함하고 있다면 그 요소들만 보여주기.
    setInputValue(target.value);
  };

  //재료추가
  const addIngredient = (e : searchIngredient) => {
    console.log(e.ingredient_add);
    e.ingredient_add = true;
    setAddedIngredient((prevInfo) => [...prevInfo, e]);
  }

  const removeIngredient = (e : searchIngredient) => {
    console.log(e.ingredient_add);
    e.ingredient_add = false;
    console.log(addedIngredient);
    
    for(let i = 0; i < addedIngredient.length; i++) {
      if(addedIngredient[i].ingredient_id === e.ingredient_id) {
        addedIngredient.splice(i,1);
        break;
      }
    }
    setAddedIngredient(addedIngredient);
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
            value={inputvalue}
            onChange={searchIngredient}
          />
        </div>
        <div className={style.ingredient_search_result_list}>
          {listIngredient.map((ingre) => (
            <>
              {ingre.ingredient_add ? (
                <div></div>
              ) : (
                <div className={style.ingredient_search_result_item} key={ingre.ingredient_id} onClick={() => addIngredient(ingre)}>
                  {ingre.ingredient_name} +
                </div>
              )}
            </>
          ))}
        </div>
        <div className={style.ingredient_search_added_list}>
          {addedIngredient.map((ingre) => (
            <>
              {ingre.ingredient_add ? (
                <div className={style.ingredient_search_added_item} key={ingre.ingredient_id} onClick={() => removeIngredient(ingre)}>
                  {ingre.ingredient_name} -
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
