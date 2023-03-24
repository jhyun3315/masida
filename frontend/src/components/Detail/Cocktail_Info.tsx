import style from "./Cocktail_info.module.scss";
import { detail_props } from "../../type/cocktailTypes";
import { difficulty_img_url_converter } from "../../pages/api/utility/difficulty_img_url_converter";
const Cocktail_info = (props: detail_props) => {
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
    base,
    garnish,
    recipe,
    ingredient,
  } = props;

  let difficultyImg = difficulty_img_url_converter(cocktail_difficulty);

  return (
    <div className={style.detail_cocktail_info}>
      {/* 칵테일 이미지 영역 */}
      <div className={style.detail_cocktail_img_div}>
        <img
          className={style.detail_cocktail_img}
          src={cocktail_img}
          alt="image"
        />
      </div>
      {/* 칵테일 정보 영역 */}
      <div className={style.detail_cocktail_info_div}>
        {/* 헤더 영역*/}
        <div className={style.detail_cocktail_info_header}>
          <div className={style.detail_cocktail_info_header_top}>
            <div className={style.detail_cocktail_title}>
              {cocktail_name_ko}({cocktail_name_en})
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
          <div className={style.detail_cocktail_info_header_bottom}>
            <div className={style.detail_cocktail_header_element}>
              <img src="/assets/icons/ratingICON.png" alt="rating" />
              <div className={style.detail_cocktail_header_element_count}>
                {cocktail_rating}
              </div>
            </div>

            <div className={style.detail_cocktail_header_element}>
              <img src="/assets/icons/LikeCheckedICON.png" alt="" />
              <div className={style.detail_cocktail_header_element_count}>
                {cocktail_likes}
              </div>
            </div>

            <div className={style.detail_cocktail_header_element}>
              <img src="/assets/icons/CommentICON.png" alt="" />
              <div className={style.detail_cocktail_header_element_count}>
                {cocktail_comments}
              </div>
            </div>

            <img
              className={style.detail_comment_difficulty}
              src={difficultyImg}
            />
          </div>
        </div>
        {/* 가니쉬랑 베이스 영역 */}
        <div className={style.detail_cocktail_garnish}>
          <div className={style.detail_cocktail_garnish_title_div}>
            <div className={style.detail_cocktail_garnish_title}>
              Garnish
              </div>
            {garnish.map((v) => (
              <div className={style.detail_cocktail_garnish_element}>#{v.garnish_name}</div>
            ))}
          </div>
        </div>
        {/* 재료 리스트 영역  */}
        <div className={style.detail_cocktail_ingredient}>
          <div className={style.detail_cocktail_ingredient_title_div}>
            <img
              className={style.detail_cocktail_ingredient_title_img}
              src="/assets/icons/ingredient_legendIMG.png"
              alt=""
            />
            <div className={style.detail_cocktail_ingredient_glass}>
              &nbsp;{glass}&nbsp;
            </div>
            <div className={style.detail_cocktail_ingredient_base}>
              &nbsp; {base} &nbsp;
            </div>
          </div>
          <div className={style.detail_cocktail_ingredient_element}>
            {ingredient.map((key) => (
              <div>
                - {key.ingredient_name} ({key.ingredient_amount}{" "}
                {key.ingredient_unit})
              </div>
            ))}
          </div>
        </div>
        {/* 레시피 영역  */}
        <div className={style.detail_cocktail_recipe_textarea}>
          <div className={style.detail_cocktail_recipe_title}>레시피</div>
          <div className={style.detail_cocktail_recipe_message}>
            {recipe.map((key) => (
              <div>
                {key.recipe_num} : {key.recipe_content}
              </div>
            ))}
          </div>
        </div>
        {/* 소개 영역*/}
        <div className={style.detail_cocktail_recipe_content_textarea}>
          <div className={style.detail_cocktail_recipe_content_title}>소개</div>
          <div className={style.detail_cocktail_recipe_content_message}>
            &nbsp; {cocktail_content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cocktail_info;
