import Image from "next/image";
import style from "./CocktailInfo.module.scss";
import { IdProps } from "../../pages/detail/[id]";

const CocktailInfo = (props: IdProps) => {
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
  } = props;
  console.log(recipe);
  return (
    <div className={style.detail_cocktail_info}>
      <div className={style.detail_cocktail_img_div}>
        <Image
          className={style.detail_cocktail_img}
          src={cocktail_img}
          alt="image"
          width={50}
          height={50}
        />
        {bookmark_checker ? (
          <Image
            className={style.detail_cocktail_bookmark}
            src="/assets/image/mainbanner.png"
            alt="image"
            width={50}
            height={50}
          />
        ) : (
          <Image
            className={style.detail_cocktail_bookmark}
            src="/assets/image/mainbanner.png"
            alt="image"
            width={50}
            height={50}
          />
        )}
      </div>

      <div className={style.detail_cocktail_info_header}>
        <div className={style.detail_cocktail_title}>
          {cocktail_name_ko} ({cocktail_name_en}) {cocktail_id}
        </div>
        <div className={style.detail_cocktail_likebtn}>
          {likes_checker ? <Image src="" alt="" /> : <Image src="" alt="" />}
          <img src="" alt="" />
        </div>
        <div className={style.detail_cocktail_rating_score}>
          <img src="" alt="" />
          <div className={style.detail_rating_score}>{cocktail_rating}</div>
        </div>
        <div className={style.detail_cocktail_like_count}>
          <img src="" alt="" />
          <div className={style.detail_like_count}>{cocktail_likes}</div>
        </div>
        <div className={style.detail_cocktail_comment_count}>
          <img src="" alt="" />
          <div className={style.detail_comment_count}>{cocktail_comments}</div>
        </div>
        <div className={style.detail_comment_difficulty_div}>
          <div className={style.detail_comment_difficulty_title}> </div>
          <div className={style.detail_comment_difficulty}>
            난이도 : {cocktail_difficulty}
          </div>
        </div>
      </div>

      <div className={style.detail_cocktail_ingredient}></div>

      <div className={style.detail_cocktail_recipe_textarea}></div>

      <div className={style.detail_cocktail_recipe_content_textarea}>
        <div className={style.detail_cocktail_recipe_content_title}>소개</div>
        <div className={style.detail_cocktail_recipe_content_message}>
          {cocktail_content}
        </div>
      </div>
    </div>
  );
};

export default CocktailInfo;
