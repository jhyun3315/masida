import style from "./Cocktail_recommend.module.scss";
import { recommend_props } from "../../pages/detail/[id]";

const Cocktail_recommend = (props: recommend_props) => {
  const colorList = props.color_recommend.data;
  // console.log(props.color_recommend.data)
  // console.log(colorList);

  return (
    <div className={style.hi11}>
      {/* {colorList.map((key) => {
        console.log(key.cocktail_difficulty);
        <div className={style.hi}>{key.cocktail_difficulty}</div>;
      })} */}
      <div className={style.hi}>123</div>
      <div className={style.hi}>123</div>
      <div className={style.hi}>123</div> 
    </div>
  );
};

export default Cocktail_recommend;
