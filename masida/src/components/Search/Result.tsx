import style from "./Result.module.scss";
import { Search_result_card } from "../UI/Card_ui";
import { cocktailType } from "@/type/cocktailTypes";

const DUMMY_COCKTAIL: cocktailType[] = [
  {
    cocktail_id: 1,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
  },
  {
    cocktail_id: 2,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
  },
  {
    cocktail_id: 3,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
  },{
    cocktail_id: 4,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
  },
  {
    cocktail_id: 5,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
  },
  {
    cocktail_id: 6,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
  },{
    cocktail_id: 7,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
  },{
    cocktail_id: 8,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
  },{
    cocktail_id: 9,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
  },{
    cocktail_id: 10,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
  },{
    cocktail_id: 11,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
  },
];

const Result = () => {
  return (
    <>
      <div className={style.result}>
        <div className={style.result_header}>
          <div className={style.result_count}>총 198건</div>
          <div className={style.result_sort}>
            <input
              type="radio"
              id="like"
              name="sort"
              className={style.result_sort_btn}
            />
            <label htmlFor="like" className={style.result_sort_label}>
              좋아요
            </label>
            |
            <input
              type="radio"
              id="rank"
              name="sort"
              className={style.result_sort_btn}
            />
            <label htmlFor="rank" className={style.result_sort_label}>
              별점
            </label>
          </div>
        </div>
        <div className={style.result_card_list}>
          {DUMMY_COCKTAIL.map((key) => (
            <Search_result_card {...key} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Result;
