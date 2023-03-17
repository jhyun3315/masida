import styles from "./Card1_ui.module.scss";
import { cocktailType } from "@/type/cocktailTypes";

const World_cup_league_card: React.FC<cocktailType> = (
  cocktail: cocktailType
) => {
  return (
    <>
      <div className={styles.world_cup_card}>
        <div className={styles.world_cup_top}>
          <img
            className={styles.world_cup_cocktailImg}
            src={cocktail.cocktail_img}
            alt="사진이 없어요.../"
          />
        </div>
        <div className={styles.world_cup_bottom}>
          <div className={styles.world_cup_cocktail_name_ko}>
            {cocktail.cocktail_name_ko}
          </div>
          <div className={styles.world_cup_cocktail_name_en}>
            {cocktail.cocktail_name_en}
          </div>
        </div>
      </div>
    </>
  );
};

export { World_cup_league_card };
