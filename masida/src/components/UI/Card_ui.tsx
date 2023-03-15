import styles from "./Card_ui.module.scss";
import { cocktailType } from "../../pages/detail/[id]";

const Detail_recommend: React.FC<cocktailType> = (cocktail: cocktailType) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_top}>
          <img
            className={styles.cocktailImg}
            src={cocktail.cocktail_img}
            alt=""
          />
        </div>
        <div className={styles.card_bottom}>
          <div className={styles.cocktailName}>{cocktail.cocktail_name_ko}</div>
          <div className={styles.sub}>
            <img className={styles.likeImg} src = "/assets/icons/LikeCheckedICON.png"></img>
            <div className={styles.like}>{cocktail.cocktail_likes}</div>
            <img className={styles.rateImg} src = "/assets/icons/ratingICON.png"></img>
            <div className={styles.rate}>{cocktail.cocktail_rating}</div>
          </div>
        </div>
      </div>
    </>
  );
};

// const MyCardComponent: React.FC<MyCardProps> = ({ myCard }: MyCardProps) => {
//   return (
//     <>
//       <div className={styles.myCard}>
//         <div className={styles.cocktailImg}></div>
//         <div>
//           <div className={styles.cocktailName}>{myCard.name}</div>
//           <div className={styles.sub}>
//             <div className={styles.likeImg}></div>
//             <div className={styles.like}>{myCard.like}</div>
//             <div className={styles.rateImg}></div>
//             <div className={styles.rate}>{myCard.ratio}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const AnalysisCardComponent: React.FC<AnalysisProps> = ({
//   analysisCard,
// }: AnalysisProps) => {
//   return (
//     <>
//       <div className={styles.analysisCard}>
//         <div className={styles.cocktailImg}></div>
//         <div className={styles.cocktailName}>{analysisCard.name}</div>
//       </div>
//     </>
//   );
// };

// const DetailCardComponent: React.FC<CocktailProps> = ({cocktail} : CocktailProps) => {
//   return (
//     <>
//       <div className={styles.detailCard}>
//         <div className={styles.cocktailKorName}>{cocktail.nameKor}</div>
//         <div className={styles.cocktailEngName}>{cocktail.nameEng}</div>
//         <div className={styles.cocktailImg}></div>
//         <div className={styles.detailHeader}>
//           <div className={styles.likeImg}></div>
//           <div className={styles.like}>{cocktail.like}</div>
//           <div className={styles.commentImg}></div>
//           <div className={styles.comment}>{cocktail.comment}</div>
//           <div className={styles.ratioImg}></div>
//           <div className={styles.ratio}>{cocktail.ratio} / 5.0</div>
//           <div className={styles.bookmark}></div>
//         </div>
//       </div>
//     </>
//   );
// };

export { Detail_recommend };
