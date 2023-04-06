import axios from "axios";
import style from "./Card_ui.module.scss";
import {
  cocktailType,
  cocktail_recommend,
  cocktail_worldcup_data,
} from "../../type/cocktailTypes";
import { difficulty_img_url_converter } from "../../pages/api/utility/difficulty_img_url_converter";
import { mypageCommentType } from "../../type/commentTypes";

import Link from "next/link";
import { store } from "../../../store/store";
import { SetStateAction, Dispatch } from "react";

const Detail_recommend_card: React.FC<cocktailType> = (
  cocktail: cocktailType
) => {
  return (
    <Link href={`/detail/${cocktail.cocktail_id}`}>
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
    </Link>
  );
};

const Search_result_card: React.FC<cocktailType> = (cocktail: cocktailType) => {
  let cocktail_difficulty_img_src = difficulty_img_url_converter(
    cocktail.cocktail_difficulty
  );

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

interface myBookMarkProps {
  key: number;
  cocktail: cocktailType;
  setBookmarkModify: Dispatch<SetStateAction<boolean>>;
  bookmarkModify: boolean;
}

const My_bookmark_card: React.FunctionComponent<myBookMarkProps> = ({
  key,
  cocktail,
  setBookmarkModify,
  bookmarkModify,
}) => {
  // 북마크 클릭 시 이벤트 만들어야함
  const bookmarkHandler = (cocktail_id: number) => {
    const atk = store.getState().user.accessToken;
    setBookmarkModify(!bookmarkModify);
    console.log(atk, " ", cocktail_id);

    axios.post(
      `https://j8b208.p.ssafy.io/api/cocktails/bookmarks`,
      {
        cocktail_id: cocktail_id,
      },
      {
        headers: {
          Authorization: atk,
        },
      }
    );
  };

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
          src="/assets/icons/BookmarkCheckedIMG_y.png"
          alt=""
          onClick={() => bookmarkHandler(cocktail.cocktail_id)}
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

const My_Analysis_card: React.FC<cocktail_recommend> = (
  cocktail: cocktail_recommend
) => {
  return (
    <>
      <div className={style.recommendCard}>
        <div className={style.recommendCard_content}>
          <div className={style.recommendCard_content_img}>
            <Link href={`detail/${cocktail.cocktail_id}`}>
              <img src={cocktail.cocktail_img}></img>
            </Link>
          </div>
          <div className={style.recommendCard_content_desc}>
            {cocktail.cocktail_name_ko}
          </div>
        </div>
      </div>
    </>
  );
};

const My_comment_card: React.FC<mypageCommentType> = (
  cocktail: mypageCommentType
) => {
  let difficultyImg = "";
  switch (cocktail.cocktail_difficulty_user) {
    case "상":
      difficultyImg = "/assets/icons/difficulty_HIGH_MINI.png";
      break;
    case "중":
      difficultyImg = "/assets/icons/difficulty_MID_MINI.png";
      break;
    default:
      difficultyImg = "/assets/icons/difficulty_LOW_MINI.png";
      break;
  }
  return (
    <>
      <div className={style.commentCard}>
        <div className={style.commentCard_img}>
          <Link href={`detail/${cocktail.cocktail_id}`}>
            <img src={cocktail.cocktail_img}></img>
          </Link>
        </div>

        <div className={style.commentCard_body}>
          <div className={style.commentCard_comment_date}>
            {cocktail.comment_date}
          </div>
          <div className={style.commentCard_cocktail_info}>
            <div className={style.commentCard_cocktail_title}>
              {cocktail.cocktail_name_ko}
              <div className={style.commentCard_cocktail_detail_info}>
                <img src="/assets/icons/ratingICON.png"></img>
                <div className={style.commentCard_cocktail_rating}>
                  {cocktail.comment_rating}
                </div>
                <img src={difficultyImg} alt="image"></img>
              </div>
            </div>
          </div>
        </div>
        <div className={style.commentCard_comment}>
          {cocktail.comment_content}
        </div>
      </div>
      <hr />
    </>
  );
};

const World_cup_league_card: React.FC<cocktail_worldcup_data> = (
  cocktail: cocktail_worldcup_data
) => {
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
          </div>
          <div className={style.recipe_content_textarea}>
            {/* 소개 or 레시피 */}
            <div className={style.recipe_content_title}>소개</div>
            {cocktail.cocktail_content}
          </div>
        </div>
      </div>
    </div>
  );
};

const World_cup_winner_card: React.FC<cocktail_worldcup_data> = (
  cocktail: cocktail_worldcup_data
) => {
  return (
    <div className={style.flip_winner}>
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
          </div>
          <div className={style.recipe_content_textarea}>
            {/* 소개 or 레시피 */}
            <div className={style.recipe_content_title}>소개</div>
            {cocktail.cocktail_content}
          </div>
        </div>
      </div>
    </div>
  );
};

export {
  Detail_recommend_card,
  Search_result_card,
  My_bookmark_card,
  My_like_card,
  My_comment_card,
  My_Analysis_card,
  World_cup_league_card,
  World_cup_winner_card,
};
