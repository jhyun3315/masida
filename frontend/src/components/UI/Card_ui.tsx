import styles from "./Card_ui.module.scss";
import { cocktailType,mypageCommentType } from "@/type/cocktailTypes";
import Link from "next/link";

const Detail_recommend_card: React.FC<cocktailType> = (
  cocktail: cocktailType
) => {
  return (
    <>
      <div className={styles.detail_card}>
        <div className={styles.detail_card_top}>
          <img
            className={styles.detail_cocktailImg}
            src={cocktail.cocktail_img}
            alt=""
          />
        </div>
        <div className={styles.detail_card_bottom}>
          <div className={styles.detail_cocktailName}>
            {cocktail.cocktail_name_ko}
          </div>
          <div className={styles.detail_sub}>
            <img
              className={styles.detail_likeImg}
              src="/assets/icons/LikeCheckedICON.png"
            ></img>
            <div className={styles.detail_like}>{cocktail.cocktail_likes}</div>
            <img
              className={styles.detail_rateImg}
              src="/assets/icons/ratingICON.png"
            ></img>
            <div className={styles.detail_rate}>{cocktail.cocktail_rating}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const Search_result_card: React.FC<cocktailType> = (cocktail: cocktailType) => {
  let cocktail_difficulty_img_src = "";
  switch (cocktail.cocktail_difficulty) {
    case "상":
      cocktail_difficulty_img_src = "/assets/icons/difficulty_HIGH.png";
      break;
    case "중":
      cocktail_difficulty_img_src = "/assets/icons/difficulty_MID.png";
      break;
    case "하":
      cocktail_difficulty_img_src = "/assets/icons/difficulty_LOW.png";
      break;
    default:
      cocktail_difficulty_img_src = "/assets/icons/difficulty_LOW.png";
      break;
  }
  return (
    <>
      <Link href={`/detail/${cocktail.cocktail_id}`}>
        <div className={styles.result_card}>
          <img
            className={styles.result_card_img}
            src={cocktail.cocktail_img}
            alt=""
          />
          <div className={styles.result_card_title}>
            {cocktail.cocktail_name_ko}
          </div>
          <div className={styles.result_stat}>
            <div className={styles.result_like}>
              <img
                className={styles.result_likeImg}
                src="/assets/icons/LikeCheckedICON.png"
              ></img>
              <div className={styles.result_like_count}>
                {cocktail.cocktail_likes}
              </div>
            </div>
            <div className={styles.result_rating}>
              <img
                className={styles.result_rateImg}
                src="/assets/icons/ratingICON.png"
              ></img>
              <div className={styles.result_rating_score}>
                {cocktail.cocktail_rating}
              </div>
            </div>
          </div>
          <img
            className={styles.result_card_difficulty_div}
            src={cocktail_difficulty_img_src}
          ></img>
        </div>
      </Link>
    </>
  );
};

// 북마크 클릭 시 이벤트 만들어야함
const test = () => {
  console.log("hi");
};
const My_bookmark_card: React.FC<cocktailType> = (cocktail: cocktailType) => {
  return (
    <div>
      <div className={styles.result_card}>
        <Link href={`/detail/${cocktail.cocktail_id}`}>
          <img
            className={styles.result_card_img}
            src={cocktail.cocktail_img}
            alt=""
          />
        </Link>

        <img
          className={styles.result_card_bookmark_icon}
          src="/assets/icons/BookmarkCheckedIMG.png"
          alt=""
          onClick={test}
        />
        <div className={styles.result_card_title}>
          {cocktail.cocktail_name_ko}
        </div>
        <div className={styles.result_stat}>
          <div className={styles.result_like}>
            <img
              className={styles.result_likeImg}
              src="/assets/icons/LikeCheckedICON.png"
            ></img>
            <div className={styles.result_like_count}>
              {cocktail.cocktail_likes}
            </div>
          </div>
          <div className={styles.result_rating}>
            <img
              className={styles.result_rateImg}
              src="/assets/icons/ratingICON.png"
            ></img>
            <div className={styles.result_rating_score}>
              {cocktail.cocktail_rating}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const My_like_card: React.FC<cocktailType> = (cocktail: cocktailType) => {
  return (
    <>
      <div className={styles.result_card}>
        <Link href={`/detail/${cocktail.cocktail_id}`}>
          <img
            className={styles.result_card_img}
            src={cocktail.cocktail_img}
            alt=""
          />
        </Link>
        <div className={styles.result_card_title}>
          {cocktail.cocktail_name_ko}
        </div>
        <div className={styles.result_stat}>
          <div className={styles.result_like}>
            <img
              className={styles.result_likeImg}
              src="/assets/icons/LikeCheckedICON.png"
            ></img>
            <div className={styles.result_like_count}>
              {cocktail.cocktail_likes}
            </div>
          </div>
          <div className={styles.result_rating}>
            <img
              className={styles.result_rateImg}
              src="/assets/icons/ratingICON.png"
            ></img>
            <div className={styles.result_rating_score}>
              {cocktail.cocktail_rating}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const My_comment_card: React.FC<mypageCommentType> = (cocktail:mypageCommentType) => {
  return (
    <>
     <div>
        <div>
          <Link href={`detail/${cocktail.cocktail_id}`}>
            <img src={ cocktail.cocktail_img}></img>
          </Link>
        </div>
        <div>
          <div>{ cocktail.comment_date}</div>
          <div>{ cocktail.cocktail_name_ko}</div>
        </div>
        <div>
          <img></img>
          <span>{ cocktail.cocktail_difficulty_user}</span>
          <img></img>
        </div>
        <div>
          { cocktail.comment_content}
        </div>
     </div>
    </>
  );
};

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

export {
  Detail_recommend_card,
  Search_result_card,
  My_bookmark_card,
  My_like_card,
  My_comment_card
};
