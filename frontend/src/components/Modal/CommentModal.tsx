import axios from "axios";
import Image from "next/image";
import { ImageLoaderProps } from "next/image";
import { useState, Dispatch, SetStateAction, useEffect } from "react";

import { store } from "../../../store/store";
import { difficulty_img_url_converter_mini } from "../../pages/api/utility/difficulty_img_url_converter";
import { imgLoader } from "../../utils/imgLoader";
import { commentType } from "../../type/commentTypes";

import style from "./CommentModal.module.scss";
import Star from "./Star";

interface propsType {
  setVisible: Dispatch<SetStateAction<boolean>>;
  visible: boolean;
}

const CommentModal: React.FunctionComponent<propsType> = ({setVisible, visible,}) => {
  
  let [inputValue, setInputValue] = useState<string>(""); //댓글
  let [difficulty, setDifficulty] = useState<string>(""); //난이도
  let [scope, setScope] = useState<string>(""); //별점
  
  // 현재 탭의 상태를 구분하기 위함 (Comment / MyMemo)
  const [currentTab, setCurrentTab] = useState<string>("Comment");
  const [commentList, setCommentList] = useState<commentType[]>();
  const getAccessToken = store.getState().user.accessToken;
  
  useEffect(()=>{
    axios
      .get("https://j8b208.p.ssafy.io/api/comments/1", {
        headers: {
          Authorization: getAccessToken,
        },
      })
      .then((response) => {
        console.log(response)
        setCommentList(response.data.data);
      })
      console.log(commentList)
  }, [])

  //난이도 선택하는 함수입니다.
  const selectDifficulty = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;
    setDifficulty(target.value);
  };

  //모달창에서 댓글쓰는 부분.
  const writeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setInputValue(target.value);
  };

  //댓글 모달창 열고닫기 함수.
  const toggleComment = () => {
    setVisible(!visible);
  };

  //댓글 등록 함수
  const registComment = () => {
    //여기서 axios 시작.
    console.log(scope);
    console.log(inputValue);
    console.log(difficulty);
  };

  // Comment Tab을 눌렀을 때입니다.
  const commentTab = () => {
    console.log("this is comment");
    setCurrentTab("Comment");
    axios
      .get("https://j8b208.p.ssafy.io/api/comments/1", {
        headers: {
          Authorization: getAccessToken,
        },
      })
      .then((response) => {
        console.log(response)
        setCommentList(response.data.data);
      })
      console.log(commentList)
  };

  const memoTab = () => {
    console.log("this is test");
    setCurrentTab("MyMemo");
    axios
      .post(
        "https://j8b208.p.ssafy.io/api/comments/1",
        {
          comment_content: "댓글 내용 나는 김지환이다.",
          comment_rating: 3.2,
          comment_difficulty: "하",
        },
        {
          headers: {
            Authorization: getAccessToken,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log("hi");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={style.commentModal}>
      <div className={style.comment_sort}>
        <input
          type="radio"
          id="like"
          name="sort"
          defaultChecked
          className={style.comment_sort_btn}
          onClick={commentTab}
        />
        <label htmlFor="like" className={style.comment_sort_label}>
          Comment
        </label>
        <input
          type="radio"
          id="rank"
          name="sort"
          onClick={memoTab}
          className={style.comment_sort_btn}
        />
        <label htmlFor="rank" className={style.comment_sort_label}>
          My Memo
        </label>
      </div>
      <img
        className={style.comment_btn}
        src="/assets/icons/comment_close_btn.png"
        alt="btn"
        onClick={toggleComment}
      />

      {/* 댓글 리스트 */}
      <div className={style.comment_list}>
        {commentList?.map((key, v) => (
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
                      // src={key.comment_difficulty}
                      src= {difficulty_img_url_converter_mini(key.comment_difficulty)}
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
                {key.writer_checker && (
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
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={style.comment_write}>
        <hr />
        <div className={style.comment_write_box}>
          <div className={style.comment_write_box_left}>
            <div className={style.comment_check_img}>
              <Image
                src="/assets/icons/check.png"
                loader={({ src, width, quality }: ImageLoaderProps) =>
                  imgLoader({ src, width, quality })
                }
                alt="check"
                width={32}
                height={32}
              />
              <div>댓글 쓰기</div>
            </div>
            <Star setScope={setScope} />
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
          <button className={style.write_btn} onClick={registComment}>
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
