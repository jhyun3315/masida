import style from "./Result.module.scss";

type cocktail = {
  id: string;
  name: string;
  image: string;
  like_cnt: number;
  rating_cnt: number;
  difficulty: string;
};

const DUMMY_COCKTAIL: cocktail[] = [
  {
    id: "m1",
    name: "오렌지 블라썸",
    image: "/assets/image/cocktail.png",
    like_cnt: 292,
    rating_cnt: 4.6,
    difficulty: "중",
  },
  {
    id: "m2",
    name: "오렌지 블라썸",
    image: "/assets/image/cocktail.png",
    like_cnt: 292,
    rating_cnt: 4.6,
    difficulty: "하",
  },
  {
    id: "m3",
    name: "오렌지 블라썸",
    image: "/assets/image/cocktail.png",
    like_cnt: 292,
    rating_cnt: 4.6,
    difficulty: "상",
  },
];

const Result = () => {
  return (
    <>
      <div className={style.result}>
        <div className={style.result_header}>
          <div className={style.result_count}>총 198건</div>
          <div className={style.result_sort}>
              <input type="radio" id="like" name="sort" className={style.result_sort_btn} />
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
          <ul></ul>
        </div>
      </div>
    </>
  );
};

export default Result;
