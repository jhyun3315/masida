import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchedIngredientType, searchIngredientType } from "../../type/ingredientTypes";
import { RootState } from "../../../store/store";
import { setSelectIngredient } from "../../../store/category/ingredientSlice";
import style from "./Ingredient.module.scss";

const Ingredient = (props: searchedIngredientType) => {
  const dispatch = useDispatch();
  const selectIngredient = useSelector((state : RootState) => state.ingredientSelect.ingredient);
  const { ingredient } = props;
  let [inputvalue, setInputValue] = useState<string>("");
  let [addedIngredient, setAddedIngredient] = useState<searchIngredientType[]>([]);
  let [listIngredient, setListIngredient] = useState<searchIngredientType[]>([]);

  console.log(selectIngredient);
  

  useEffect(() => {
    dispatch(setSelectIngredient(listIngredient));
  },[listIngredient])

  //재료검색
  const searchIngredient = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setListIngredient(() => {
      return ingredient.filter((ingre) =>
        ingre.ingredient_name.includes(target.value)
      );
    });
    if (target.value.length === 0) {
      //아무것도 안써있으면 빈배열이여야해
      setListIngredient([]);
    }
    //ingre.ingredient_name 이 target.value를 포함하고 있다면 그 요소들만 보여주기.
    setInputValue(target.value);
  };

  //재료추가(그냥 추가하면 e.ingredient_add를 변경하면 read_only라 변경이 불가능하다며 에러를 띄웁니다.)
  const addIngredient = (e: searchIngredientType) => {
    console.log(e);
    
    console.log(e.ingredient_add);
    e.ingredient_add = true;
    setAddedIngredient((prevInfo) => [...prevInfo, e]);
  };

  const removeIngredient = (e: searchIngredientType) => {
    console.log(e.ingredient_add);
    e.ingredient_add = false;
    console.log(addedIngredient);
    //id가 같은것은 빼주자.
    setAddedIngredient(
      addedIngredient.filter((add) => add.ingredient_id !== e.ingredient_id)
    );
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
            value={inputvalue}
            onChange={searchIngredient}
          />
        </div>
        <div className={style.ingredient_search_result_list}>
          {listIngredient.map((ingre) => (
            <div
              key={ingre.ingredient_id}
              className={style.ingredient_search_result_key}
            >
              {ingre.ingredient_add ? (
                <></>
              ) : (
                <div
                  className={style.ingredient_search_result_item}
                  onClick={() => addIngredient(ingre)}
                >
                  {ingre.ingredient_name} +
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={style.ingredient_search_added_list}>
          {addedIngredient.map((ingre) => (
            <div
              key={ingre.ingredient_id}
              className={style.ingredient_search_result_key}
            >
              {ingre.ingredient_add ? (
                <div
                  className={style.ingredient_search_added_item}
                  onClick={() => removeIngredient(ingre)}
                >
                  {ingre.ingredient_name} -
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ingredient;
