import { useEffect,useState } from "react";
import style from "./World_cup_winner_comment_list.module.scss";
import { get_worldcup_final_comments } from "../../pages/api/cocktail-worldcup/cocktail-worldcup_api";
import { cocktail_worldcup_data } from "../../type/cocktailTypes";
import { commentType } from "../../type/commentTypes";

const World_cup_winner_comments_list = (props: cocktail_worldcup_data) => {
  const [comments,setComments] = useState<commentType[]>([]);
  useEffect(() => {
    get_worldcup_final_comments(props.cocktail_id).then((response) => { 
      setComments(response);
    })
  },);

  return (
    <>
      <div className={style.winner_comment_list}>
        {comments?comments.map((key:any) => (
          <div className={style.winner_comment}>
            <div className={style.comment_layout}>
              <div className={style.winner_comment_left}>
                <div className={style.user_comment_profile}>
                  <img
                    className={style.user_profile_img}
                    src={key.user_profile}
                    alt=""
                  />
                </div>
                <div className={style.user_comment_textarea}>
                  <div className={style.user_comment_name_date}>
                    <div className={style.user_comment_name}>
                      {key.user_name}
                    </div>
                    <div className={style.user_comment_date}>
                      {key.comment_create_date}
                    </div>
                  </div>
                  <div className={style.user_comment_content}>
                    {key.comment_content}
                  </div>
                </div>
              </div>
              <div className={style.winner_comment_right}>
                <div className={style.winner_comment_difficulty_user_rating}>
                  <div className={style.comment_difficulty}>
                    <img
                      className={style.comment_difficulty_img}
                      src={key.comment_difficulty}
                      alt=""
                    />
                  </div>
                  <div className={style.comment_rating}>
                    <div>
                      <img
                        className={style.comment_rating_img}
                        src="/assets/icons/ratingICON.png"
                        alt=""
                      />
                    </div>
                    <div className={style.comment_rating_count}>
                      {key.comment_rating} / 5
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )):<div>해당 댓글이 존재하지 않습니다!</div>}
      </div>
    </>
  );
};

export default World_cup_winner_comments_list;
