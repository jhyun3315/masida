import Base from "./Base";
import style from "./Category.module.scss";
import Color from "./Color";
import Difficulty from "./Difficulty";
import Ingredient from "./Ingredient";
import { searchedIngredientType } from "../../type/ingredientTypes";
//재료들 타입 지정.
import { search_props } from "../../pages/search";

const Category = (props: search_props) => {
  // const props: searchedIngredientType = {
  //   ingredient: [
  //     {
  //       ingredient_id: 0,
  //       ingredient_name: "바나나",
  //       ingredient_add: false,
  //     },
  //     {
  //       ingredient_id: 1,
  //       ingredient_name: "바지락",
  //       ingredient_add: false,
  //     },
  //     {
  //       ingredient_id: 2,
  //       ingredient_name: "콜라",
  //       ingredient_add: false,
  //     },
  //     {
  //       ingredient_id: 3,
  //       ingredient_name: "피냐콜라닥!",
  //       ingredient_add: false,
  //     },
  //   ],
  // };
  return (
    <>
      <div className={style.category}>
        <h3 className={style.category_title}>카테고리</h3>
        <hr />
        <Base />
        <Color />
        <Difficulty />
        <Ingredient {...props} />
      </div>
    </>
  );
};

export default Category;
