import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchedIngredientType,
  searchIngredientType,
} from "../../type/ingredientTypes";
import { RootState } from "../../../store/store";
import { setSelectIngredient } from "../../../store/category/ingredientSlice";
import style from "./Ingredient.module.scss";

const Ingredient = (props: searchedIngredientType) => {
  const dispatch = useDispatch();
  const selectIngredient = useSelector(
    (state: RootState) => state.ingredientSelect.ingredient
  );
  const { ingredient } = props;
  let [inputvalue, setInputValue] = useState<string>("");
  let [addedIngredient, setAddedIngredient] = useState<searchIngredientType[]>(
    []
  );
  let [listIngredient, setListIngredient] = useState<searchIngredientType[]>(
    []
  );

  console.log(selectIngredient);
  let copy: searchIngredientType[] = Object.assign([], addedIngredient);
  console.log(copy);

  useEffect(() => {
    copy = Object.assign([], addedIngredient);
    console.log(copy);
  }, [addedIngredient]);

  // 재료 추가, 삭제될때마다 redux에 재료 저장.(동작함)
  useEffect(() => {
    dispatch(setSelectIngredient(copy));
  }, [addedIngredient]);

  //재료검색
  const searchIngredient = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    setListIngredient(() => {
      console.log(target.value);
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

  //재료추가
  const addIngredient = (e: searchIngredientType) => {
    console.log(e.ingredient_add);
    e.ingredient_add = true;
    setAddedIngredient((prevInfo) => [...prevInfo, e]);
  };

  //재료삭제(그냥 삭제하면 e.ingredient_add를 변경하면 read_only라 변경이 불가능하다며 에러를 띄웁니다.)
  //Redux에 저장할 것이 useState의 변수라면 (dispatch에 useState변수로 선언한 변수가 들어가면) 해당 변수는 read-only입니다. 변경불가능.
  //...인 스프레드 연산자는 얕은 복사입니다.
  //깊은 복사 Object.assign 실패
  const removeIngredient = (e: searchIngredientType) => {
    // console.log(e.ingredient_add);
    let findIndex = addedIngredient.findIndex(
      (ingre) => ingre.ingredient_id === e.ingredient_id
    );
    let copyAddedIngredient: searchIngredientType[] = Object.assign(
      [],
      addedIngredient
    );
    //애초에 리덕스에 저장된것을 복사해와서 안되는 건가?..
    copyAddedIngredient[findIndex].ingredient_add = false;
    // e.ingredient_add = false;
    setAddedIngredient(
      copyAddedIngredient.filter((add) => add.ingredient_id !== e.ingredient_id)
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
