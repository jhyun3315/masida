import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { commentType } from "../../type/commentTypes";
import { imgLoader } from "../../utils/imgLoader";
import { ImageLoaderProps } from "next/image";
import style from "./CommentModal.module.scss";


const comments: commentType[] = [
    {
      comment_id: 1,
      comment_content:
        "댓글이다 이건.",
      comment_rating: 1,
      comment_create_date: "2023-03-26",
      comment_difficulty: "/assets/icons/difficulty_HIGH_MINI.png",
      user_name: "내이름은 손종효 탐정이죠",
      user_profile: "/assets/image/user_profile_img.png",
      writer_checker: false,
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
      writer_checker: false,
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
      writer_checker: false,
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


interface propsType {
  setVisible: Dispatch<SetStateAction<boolean>>;
  visible: boolean;
}

const CommentModal: React.FunctionComponent<propsType> = ({
  setVisible,
  visible,
}) => {
  let [inputValue, setInputValue] = useState<string>("");

  const selectDifficulty = () => {};

  const writeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setInputValue(target.value);
  };

  const toggleComment = () => {
    setVisible(!visible);
  };

  return (
    <div className={style.commentModal}>
      <div className={style.comment_sort}>
        <input
          type="radio"
          id="like"
          name="sort"
          className={style.comment_sort_btn}
        />
        <label htmlFor="like" className={style.comment_sort_label}>
          Comment
        </label>
        <input
          type="radio"
          id="rank"
          name="sort"
          className={style.comment_sort_btn}
        />
        <label htmlFor="rank" className={style.comment_sort_label}>
          Like
        </label>
      </div>
      <img
        className={style.comment_btn}
        src="/assets/icons/comment_close_btn.png"
        alt="btn"
        onClick={toggleComment}
      />
      <div className={style.comment_list}>
        {comments.map((key) => (
          <div className={style.comment}>
            <div className={style.comment_layout}>
              <div className={style.comment_left}>
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
              <div className={style.comment_right}>
                <div className={style.comment_difficulty_user_rating}>
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
                      {key.comment_rating} / 5.0
                    </div>
                  </div>
                </div>
                {key.writer_checker &&
                <div className={style.cocktail_comment_edit}>
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
                }
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.comment_write}>
        <hr />
        <div className={style.comment_write_box}>
          <div className={style.comment_write_box_left}>
            <Image
              src="/assets/icons/check.png"
              loader={({ src, width, quality }: ImageLoaderProps) =>
                imgLoader({ src, width, quality })
              }
              alt="check"
              width={32}
              height={32}
            />
            댓글 쓰기
          </div>
          <div className={style.comment_write_box_right}>
            <div className={style.difficulty_selector}>
              <input
                type="radio"
                id="high"
                className={style.difficulty_selector_btn}
                name="level"
                value="상"
                onClick={selectDifficulty}
              />
              <label htmlFor="high" className={style.difficulty_selector_lev}>
                상
              </label>

              <input
                type="radio"
                id="medium"
                className={style.difficulty_selector_btn}
                name="level"
                value="중"
                onClick={selectDifficulty}
              />
              <label htmlFor="medium" className={style.difficulty_selector_lev}>
                중
              </label>

              <input
                type="radio"
                id="low"
                className={style.difficulty_selector_btn}
                name="level"
                value="하"
                onClick={selectDifficulty}
              />
              <label htmlFor="low" className={style.difficulty_selector_lev}>
                하
              </label>
            </div>
          </div>
        </div>
        <div>
          <textarea
            id="comment"
            className={style.write_commentarea}
            value={inputValue}
            onChange={writeComment}
          ></textarea>
        </div>
        <div className={style.write_btn_form}>
          <button className={style.write_btn}>등록</button>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
