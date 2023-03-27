import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchedIngredientType,
  searchIngredientType,
} from "../../type/ingredientTypes";
import { RootState } from "../../../store/store";
import { setSelectIngredient } from "../../../store/category/ingredientSlice";
import { changeSelectIngredient } from "../../../store/category/ingredientSlice";
import style from "./Ingredient.module.scss";
import { search_props } from "../../pages/search";

const Ingredient = (props: search_props) => {
  const dispatch = useDispatch();
  const selectIngredient = useSelector(
    (state: RootState) => state.ingredientSelect
  );
  let [inputvalue, setInputValue] = useState<string>("");
  let [addedIngredient, setAddedIngredient] = useState<searchIngredientType[]>(
    []
  );
  let [listIngredient, setListIngredient] = useState<searchIngredientType[]>(
    []
  );

  //페이지 처음 시작할 때 모든 재료목록을 redux에 저장해줍니다.
  useEffect(() => {
    dispatch(setSelectIngredient(props.ingredient));
  }, []);

  //재료검색
  const searchIngredient = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    setListIngredient(() => {
      return selectIngredient.ingredient?.filter((ingre) =>
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
    dispatch(changeSelectIngredient(e));

    //추가시킬 것 등록.
    const addi: searchIngredientType = {
      ingredient_id: selectIngredient.ingredient[e.ingredient_id].ingredient_id,
      ingredient_name:
        selectIngredient.ingredient[e.ingredient_id].ingredient_name,
      ingredient_add:
        !selectIngredient.ingredient[e.ingredient_id].ingredient_add,
    };

    //추가 시켰으니 리스트에서는 빼주기.
    setListIngredient(
      listIngredient.filter(
        (remove) => remove.ingredient_id !== e.ingredient_id
      )
    );

    //추가시킨 것 addList에 추가 시켜주기.
    setAddedIngredient((prevInfo) => [...prevInfo, addi]);
  };

  //재료삭제(그냥 삭제하면 e.ingredient_add를 변경하면 read_only라 변경이 불가능하다며 에러를 띄웁니다.)
  //Redux에 저장할 것이 useState의 변수라면 (dispatch에 useState변수로 선언한 변수가 들어가면) 해당 변수는 read-only입니다. 변경불가능.
  //...인 스프레드 연산자는 얕은 복사입니다.
  //깊은 복사 Object.assign 실패
  const removeIngredient = (e: searchIngredientType) => {
    //dispatch시켜주어 현재 선택한 것의 add를 반대로 저장해줍니다.
    dispatch(changeSelectIngredient(e));

    //추가재료 리스트에서 누른 재료의 id에 해당하는 것 삭제해서 안보여지게 함.
    setAddedIngredient(
      addedIngredient.filter((add) => add.ingredient_id !== e.ingredient_id)
    );

    //리스트 상시 업데이트.
    const addi: searchIngredientType = {
      ingredient_id: selectIngredient.ingredient[e.ingredient_id].ingredient_id,
      ingredient_name:
        selectIngredient.ingredient[e.ingredient_id].ingredient_name,
      ingredient_add:
        !selectIngredient.ingredient[e.ingredient_id].ingredient_add,
    };

    setListIngredient((previnfo) => [...previnfo, addi]);
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
          {listIngredient?.map((ingre) => (
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
          {addedIngredient?.map((ingre) => (
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
