import style from "./Cocktail_recommend.module.scss";
import { idProps } from "../../pages/detail/[id]";

const CocktailRecommend = (props: idProps) => {
  const {
    cocktail_id,
    cocktail_name_ko,
    cocktail_name_en,
    cocktail_img,
    cocktail_content,
    cocktail_difficulty,
    cocktail_rating,
    cocktail_likes,
    cocktail_comments,
    likes_checker,
    bookmark_checker,
    glass,
    recipe,
    ingredient,
  } = props;

  let difficultyImg = "";
  if (cocktail_difficulty === "상") {
    difficultyImg = "/assets/icons/difficulty_HIGH.png";
  } else if (cocktail_difficulty === "중") {
    difficultyImg = "/assets/icons/difficulty_MID.png";
  } else {
    difficultyImg = "/assets/icons/difficulty_LOW.png";
  }

  return (
    <div className={style.hi}></div>
  );
};

export default CocktailRecommend;
