import Base from "./Base";
import style from "./Category.module.scss";
import Color from "./Color";
import Difficulty from "./Difficulty";
import Ingredient from "./Ingredient";

//재료들 타입 지정.
export type searchIngredient = {
  ingredient_id: number;
  ingredient_name: string;
  ingredient_add: boolean; //현재 검색 추가된 재료인지 확인하게 해주는 props.
};

export type searchedIngredient = {
  ingredient: searchIngredient[];
};

const Category = () => {
  const props: searchedIngredient = {
    ingredient: [
      {
        ingredient_id: 1,
        ingredient_name: "바나나",
        ingredient_add: false,
      },
      {
        ingredient_id: 2,
        ingredient_name: "바지락",
        ingredient_add: false,
      },
      {
        ingredient_id: 3,
        ingredient_name: "콜라",
        ingredient_add: true,
      },
      {
        ingredient_id: 4,
        ingredient_name: "피냐콜라닥!",
        ingredient_add: true,
      },
    ],
  };
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
