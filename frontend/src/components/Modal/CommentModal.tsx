import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { imgLoader } from "../../utils/imgLoader";
import { ImageLoaderProps } from "next/image";
import style from "./CommentModal.module.scss";

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
        여기에 이미지랑 이름 쓴 날짜 내용 난이도 별점 수정 삭제까지 다
        넣어줘야해
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
