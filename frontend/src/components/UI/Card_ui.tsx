import style from "./Card_ui.module.scss";
import { cocktailType,mypageCommentType } from "@/type/cocktailTypes";
import Link from "next/link";

const Detail_recommend_card: React.FC<cocktailType> = (
  cocktail: cocktailType
) => {
  return (
    <>
      <div className={style.detail_card}>
        <div className={style.detail_card_top}>
          <img
            className={style.detail_cocktailImg}
            src={cocktail.cocktail_img}
            alt=""
          />
        </div>
        <div className={style.detail_card_bottom}>
          <div className={style.detail_cocktailName}>
            {cocktail.cocktail_name_ko}
          </div>
          <div className={style.detail_sub}>
            <img
              className={style.detail_likeImg}
              src="/assets/icons/LikeCheckedICON.png"
            ></img>
            <div className={style.detail_like}>{cocktail.cocktail_likes}</div>
            <img
              className={style.detail_rateImg}
              src="/assets/icons/ratingICON.png"
            ></img>
            <div className={style.detail_rate}>{cocktail.cocktail_rating}</div>
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
        <div className={style.result_card}>
          <img
            className={style.result_card_img}
            src={cocktail.cocktail_img}
            alt=""
          />
          <div className={style.result_card_title}>
            {cocktail.cocktail_name_ko}
          </div>
          <div className={style.result_stat}>
            <div className={style.result_like}>
              <img
                className={style.result_likeImg}
                src="/assets/icons/LikeCheckedICON.png"
              ></img>
              <div className={style.result_like_count}>
                {cocktail.cocktail_likes}
              </div>
            </div>
            <div className={style.result_rating}>
              <img
                className={style.result_rateImg}
                src="/assets/icons/ratingICON.png"
              ></img>
              <div className={style.result_rating_score}>
                {cocktail.cocktail_rating}
              </div>
            </div>
          </div>
          <img
            className={style.result_card_difficulty_div}
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
      <div className={style.result_card}>
        <Link href={`/detail/${cocktail.cocktail_id}`}>
          <img
            className={style.result_card_img}
            src={cocktail.cocktail_img}
            alt=""
          />
        </Link>

        <img
          className={style.result_card_bookmark_icon}
          src="/assets/icons/BookmarkCheckedIMG.png"
          alt=""
          onClick={test}
        />
        <div className={style.result_card_title}>
          {cocktail.cocktail_name_ko}
        </div>
        <div className={style.result_stat}>
          <div className={style.result_like}>
            <img
              className={style.result_likeImg}
              src="/assets/icons/LikeCheckedICON.png"
            ></img>
            <div className={style.result_like_count}>
              {cocktail.cocktail_likes}
            </div>
          </div>
          <div className={style.result_rating}>
            <img
              className={style.result_rateImg}
              src="/assets/icons/ratingICON.png"
            ></img>
            <div className={style.result_rating_score}>
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
      <div className={style.result_card}>
        <Link href={`/detail/${cocktail.cocktail_id}`}>
          <img
            className={style.result_card_img}
            src={cocktail.cocktail_img}
            alt=""
          />
        </Link>
        <div className={style.result_card_title}>
          {cocktail.cocktail_name_ko}
        </div>
        <div className={style.result_stat}>
          <div className={style.result_like}>
            <img
              className={style.result_likeImg}
              src="/assets/icons/LikeCheckedICON.png"
            ></img>
            <div className={style.result_like_count}>
              {cocktail.cocktail_likes}
            </div>
          </div>
          <div className={style.result_rating}>
            <img
              className={style.result_rateImg}
              src="/assets/icons/ratingICON.png"
            ></img>
            <div className={style.result_rating_score}>
              {cocktail.cocktail_rating}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const My_comment_card: React.FC<mypageCommentType> = (cocktail: mypageCommentType) => {
  let cocktail_difficulty_img_src = "";
  switch (cocktail.cocktail_difficulty_user) {
     case "상":
      cocktail_difficulty_img_src = "/assets/icons/difficulty_HIGH_MINI.png";
      break;
    case "중":
      cocktail_difficulty_img_src = "/assets/icons/difficulty_MID_MINI.png";
      break;
    default:
      cocktail_difficulty_img_src = "/assets/icons/difficulty_LOW_MINI.png";
      break;
  }
  return (
    <>
      <div className={ style.mypageComment}>
        <div className={ style.mypageComment_img}>
          <Link href={`detail/${cocktail.cocktail_id}`}>
            <img src={ cocktail.cocktail_img}></img>
          </Link>
        </div>
        <div className={ style.mypageComment_title}>
          <div className={style.mypageComment_title_date}>{ cocktail.comment_date}</div>
          <div className={ style.mypageComment_title_name}>{cocktail.cocktail_name_ko}</div>
        </div>
        <div className={ style.mypageComment_rate}>
          <img src="/assets/icons/ratingICON.png"/>
          <span>{ cocktail.comment_rating}</span>
          <img src={ cocktail_difficulty_img_src}/>
        </div>
        <div className={ style.mypageComment_content}>
          { cocktail.comment_content}
        </div>
      </div>
     <hr/>
    </>
  );
};

// const AnalysisCardComponent: React.FC<AnalysisProps> = ({
//   analysisCard,
// }: AnalysisProps) => {
//   return (
//     <>
//       <div className={style.analysisCard}>
//         <div className={style.cocktailImg}></div>
//         <div className={style.cocktailName}>{analysisCard.name}</div>
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
