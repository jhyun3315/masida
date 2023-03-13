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
      <div>
        <div className={style.detail_cocktail_img_div}>
          <img
            className={style.detail_cocktail_img}
            src={cocktail_img}
            alt="image"
          />
          {bookmark_checker ? (
            <img
              className={style.detail_cocktail_bookmark}
              src="/assets/icons/BookmarkCheckedIMG.png"
              alt="image"
            />
          ) : (
            <img
              className={style.detail_cocktail_bookmark}
              src="/assets/icons/BookmarkUncheckedIMG.png"
              alt="image"
            />
          )}
        </div>
      </div>
      <div>
        <div className={style.detail_cocktail_info_header}>
          <div className={style.detail_cocktail_info_header_top}>
            <div className={style.detail_cocktail_title}>
              {cocktail_name_ko} ({cocktail_name_en}) {cocktail_id}
            </div>
            <div>
              {likes_checker ? (
                <img
                  className={style.detail_cocktail_likebtn}
                  src="/assets/icons/LikeCheckedIMG.png"
                  alt=""
                />
              ) : (
                <img
                  className={style.detail_cocktail_likebtn}
                  src="/assets/icons/LikeUncheckedIMG.png"
                  alt=""
                />
              )}
            </div>
          </div>
          <div className={style.detail_cocktail_info_header_bottom}>
            <div className={style.detail_cocktail_rating_score}>
              <img src="/assets/icons/ratingICON.png" alt="rating" />
              <div className={style.detail_rating_score}>{cocktail_rating}</div>
            </div>
            <div className={style.detail_cocktail_like_count}>
              <img src="/assets/icons/LikeCheckedICON.png" alt="" />
              <div className={style.detail_like_count}>{cocktail_likes}</div>
            </div>
            <div className={style.detail_cocktail_comment_count}>
              <img src="/assets/icons/CommentICON.png" alt="" />
              <div className={style.detail_comment_count}>
                {cocktail_comments}
              </div>
            </div>
            <div className={style.detail_comment_difficulty_div}>
              <img
                className={style.detail_comment_difficulty}
                src="/assets/icons/difficulty_HIGH.png"
              />
            </div>
          </div>
        </div>

        <div className={style.detail_cocktail_ingredient}></div>

        <div className={style.detail_cocktail_recipe_textarea}></div>

        <div className={style.detail_cocktail_recipe_content_textarea}>
          <div className={style.detail_cocktail_recipe_content_title}>소개</div>
          <div className={style.detail_cocktail_recipe_content_message}>
            {/* {cocktail_content} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailInfo;
