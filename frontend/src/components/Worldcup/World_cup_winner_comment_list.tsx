import style from "./World_cup_winner_comment_list.module.scss";
import { commentType } from "../../type/commentTypes";
import { detail_props } from "../../type/cocktailTypes";

const World_cup_winner_comments_list = (props: detail_props) => {
  // id를 기준으로 댓글을 가져온다. (props.cocktail_id)
  const comments: commentType[] = [
    {
      comment_id: 1,
      comment_content:
        "comment_content2comment_content2comment_content2comment_content2comment_content2comment_content2comment_content2comment_content2comment_content2",
      comment_rating: 1,
      comment_create_date: "comment_create_date1",
      comment_difficulty: "/assets/icons/difficulty_HIGH_MINI.png",
      user_name: "user_name1",
      user_profile: "/assets/image/user_profile_img.png",
      writer_checker: true,
    },
    {
      comment_id: 2,
      comment_content: "comment_content2",
      comment_rating: 2,
      comment_create_date: "comment_create_date2",
      comment_difficulty: "/assets/icons/difficulty_LOW_MINI.png",
      user_name: "user_name2",
      user_profile: "/assets/image/user_profile_img.png",
      writer_checker: true,
    },
    {
      comment_id: 3,
      comment_content: "comment_content3",
      comment_rating: 3,
      comment_create_date: "comment_create_date3",
      comment_difficulty: "/assets/icons/difficulty_MID_MINI.png",
      user_name: "user_name3",
      user_profile: "/assets/image/user_profile_img.png",
      writer_checker: true,
    },
    {
      comment_id: 3,
      comment_content: "comment_content3",
      comment_rating: 3,
      comment_create_date: "comment_create_date3",
      comment_difficulty: "/assets/icons/difficulty_MID_MINI.png",
      user_name: "user_name3",
      user_profile: "/assets/image/user_profile_img.png",
      writer_checker: true,
    },
    {
      comment_id: 3,
      comment_content: "comment_content3",
      comment_rating: 3,
      comment_create_date: "comment_create_date3",
      comment_difficulty: "/assets/icons/difficulty_MID_MINI.png",
      user_name: "user_name3",
      user_profile: "/assets/image/user_profile_img.png",
      writer_checker: true,
    },
    {
      comment_id: 3,
      comment_content: "comment_content3",
      comment_rating: 3,
      comment_create_date: "comment_create_date3",
      comment_difficulty: "/assets/icons/difficulty_MID_MINI.png",
      user_name: "user_name3",
      user_profile: "/assets/image/user_profile_img.png",
      writer_checker: true,
    },
  ];

  return (
    <>
      <div className={style.winner_comment_list}>
        {comments.map((key) => (
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
                      {key.comment_rating}
                    </div>
                  </div>
                </div>

                <div className={style.winner_cocktail_comment_edit}>
                  <div className={style.comment_modify}>
                    <img
                      className={style.comment_modify_img}
                      src="/assets/icons/detail_cocktailcomment_modify.png"
                      alt=""
                    />
                    수정
                  </div>
                  <div className={style.comment_modify}>
                    <img
                      className={style.comment_modify_img}
                      src="/assets/icons/detail_cocktailcomment_delete.png"
                      alt=""
                    />
                    삭제
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default World_cup_winner_comments_list;
