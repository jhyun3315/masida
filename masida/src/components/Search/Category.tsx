import Base from "./Base";
import style from "./Category.module.scss";
import Color from "./Color";
import Difficulty from "./Difficulty";
import Ingredient from "./Ingredient";

type base = {
  base_name: string;
};

const Category = () => {
  return (
    <>
      <div className={style.category}>
        <h3 className={style.category_title}>카테고리</h3>
        <hr />
        <Base />
        <Color />
        <Difficulty />
        <Ingredient />
      </div>
    </>
  );
};

export default Category;
