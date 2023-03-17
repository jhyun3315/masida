import style from "./Card1_ui.module.scss";
import { detail_props } from "@/type/cocktailTypes";
// import { detail_props } from "@/type/cocktailTypes";

const World_cup_league_card: React.FC<detail_props> = (
  cocktail: detail_props
) => {
  // console.log(cocktail);
  return (
    <div className={style.flip}>
      <div className={style.world_cup_card}>
        <div className={style.world_cup_card_front}>
          <div className={style.world_cup_top}>
            <img
              className={style.world_cup_cocktailImg}
              src={cocktail.cocktail_img}
              alt="사진이 없어요.../"
            />
          </div>
          <div className={style.world_cup_bottom}>
            <div className={style.world_cup_cocktail_name_ko}>
              {cocktail.cocktail_name_ko}
            </div>
            <div className={style.world_cup_cocktail_name_en}>
              {cocktail.cocktail_name_en}
            </div>
          </div>
        </div>

        <div className={style.world_cup_card_back}>
          <div className={style.world_cup_title}>
            <div className={style.world_cup_cocktail_name_ko}>
              {cocktail.cocktail_name_ko}
            </div>
            <div className={style.world_cup_cocktail_name_en}>
              {cocktail.cocktail_name_en}
            </div>
          </div>
          <div className={style.ingredient_list}>
            <img
              className={style.ingredient_legendIMG}
              src="/assets/icons/ingredient_legendIMG.png"
              alt=""
            />
            {cocktail.recipe.map((key) => (
              <div className={style.ingredient_list_element}>
                {key.recipe_num}. {key.recipe_content}
              </div>
            ))}
          </div>
          <div className={style.recipe_content_textarea}>
            {/* 소개 or 레시피 */}
            <div className={style.recipe_content_title}>소개</div>
            {/* {cocktail.recipe.map((key) => (
              <div>{key.recipe_content}</div>
            ))} */}
            {cocktail.cocktail_content}
          </div>
        </div>
      </div>
    </div>
  );
};

export { World_cup_league_card };
