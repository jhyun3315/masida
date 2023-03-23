import { useRouter } from "next/router";
import Link from "next/link";
import style from "./World_cup_league_result.module.scss";

import { detail_props } from "../../type/cocktailTypes";

import { World_cup_league_card } from "../UI/Card_ui";
import World_cup_winner_comments_list from "./World_cup_winner_comment_list";
import { difficulty_img_url_converter } from "../../pages/api/utility/difficulty_img_url_converter";

const World_cup_league_result = (props: detail_props) => {
  const router = useRouter();
  let difficulty = difficulty_img_url_converter(props.cocktail_difficulty);
  const x = (
    // <div className={style.world_cup_winner_info}>
    <div className={style.info_body_layout}>
      <div className={style.info_list}>
        <img className={style.difficulty_legendIMG} src={difficulty} alt="" />
        <div className={style.info_list_element}>
          <img src="/assets/icons/ratingICON.png" alt="rating" />
          <div className={style.element_count}>{props.cocktail_rating}</div>
        </div>
        <div className={style.info_list_element}>
          <img src="/assets/icons/LikeCheckedICON.png" alt="" />
          <div className={style.element_count}>{props.cocktail_likes}</div>
        </div>
        <div className={style.info_list_element}>
          <img src="/assets/icons/CommentICON.png" alt="" />
          <div className={style.element_count}>{props.cocktail_comments}</div>
        </div>
      </div>
      <div className={style.info_btn_div}>
        {/* 다시하기 버튼 */}
        <div
          className={style.cocktail_worldcup_retry_btn}
          onClick={() => router.reload()}
        >
          <div className={style.cocktail_worldcup_retry_btn_text}>
            다시하기 &nbsp;
            <img
              src="/assets/icons/cocktail_worldcup_retry_btn_img.png"
              alt=""
            />
          </div>
        </div>
        <div>&nbsp;</div>
        {/* 자세히 보기 버튼 */}
        <Link href={`/detail/${props.cocktail_id}`}>
        <div className={style.cocktail_worldcup_detail_btn}>
          <div className={style.cocktail_worldcup_detail_btn_text}>
            자세히보기{" "}
            <img
              src="/assets/icons/cocktail_worldcup_detail_btn_img.png"
              alt=""
            />
          </div>
        </div>
        </Link>
      </div>
    </div>
    // </div>
  );

  return (
    <>
      <div className={style.world_cup_winner}>
        <div className={style.world_cup_winner_card}>
          <World_cup_league_card {...props} />
        </div>
        <div className={style.world_cup_winner_info}>
          {x}
          <World_cup_winner_comments_list {...props} />
        </div>
      </div>
    </>
  );
};

export default World_cup_league_result;
