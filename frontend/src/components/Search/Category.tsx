import Base from "./Base";
import style from "./Category.module.scss";
import Color from "./Color";
import Difficulty from "./Difficulty";
import Ingredient from "./Ingredient";
import { Dispatch, SetStateAction } from 'react';
//재료들 타입 지정.
import { search_props } from "../../pages/search";

interface propsType {
  props: search_props;
  addNumIngredient : number[];
  setAddNumIngredient : Dispatch<SetStateAction<number[]>>
}

const Category : React.FunctionComponent<propsType> = ({props,addNumIngredient,setAddNumIngredient}) => {
  return (
    <>
      <div className={style.category}>
        <h3 className={style.category_title}>카테고리</h3>
        <hr />
        <Base />
        <Color />
        <Difficulty />
        <Ingredient props={props} addNumIngredient={addNumIngredient} setAddNumIngredient={setAddNumIngredient}/>
      </div>
    </>
  );
};

export default Category;
