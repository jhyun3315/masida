import axios from "axios";
import Image from "next/image";
import { ImageLoaderProps } from "next/image";
import Swal from "sweetalert2";
import { useState, Dispatch, SetStateAction, useEffect, useRef } from "react";
import { store } from "../../../store/store";
import { difficulty_img_url_converter_mini } from "../../pages/api/utility/difficulty_img_url_converter";
import { imgLoader } from "../../utils/imgLoader";
import { commentType } from "../../type/commentTypes";

import style from "./CommentModal.module.scss";
import Star from "./Star";

interface propsType {
  setVisible: Dispatch<SetStateAction<boolean>>;
  visible: boolean;
  cocktail_id: number;
  modifyCommentCnt: boolean;
  setModifyCommentCnt: Dispatch<SetStateAction<boolean>>;
}

const CommentModal: React.FunctionComponent<propsType> = ({
  setVisible,
  visible,
  cocktail_id,
  modifyCommentCnt,
  setModifyCommentCnt,
}) => {
  let [inputValue, setInputValue] = useState<string>(""); //댓글
  let [difficulty, setDifficulty] = useState<string>(""); //난이도
  let [scope, setScope] = useState<number>(0); //별점
  const [modify, setModify] = useState<boolean>(false); //수정버튼이 클릭 되었는지 확인해주는 useState변수입니다.
  //얘도 같이 내려줘서 서로 바뀔때마다 scope를 0으로 설정해주어야 할것 같다.

  // 현재 탭의 상태를 구분하기 위함 (Comment / MyMemo)
  const [currentTab, setCurrentTab] = useState<string>("Comment");
  const [commentList, setCommentList] = useState<commentType[]>();
  const [commentAdd, setCommentAdd] = useState<boolean>();
  const [commentId, setCommentId] = useState<number>(0);
  const [isWrited, setIsWrited] = useState<boolean>(false);
  const [resetStar, setResetStar] = useState<boolean>(false);
  const getAccessToken = store.getState().user.accessToken;
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isWrited === true) {
      textareaRef.current.setAttribute("readOnly", true);
    } else {
      textareaRef.current.removeAttribute("readOnly");
    }
  }, [isWrited]);

  useEffect(() => {
    axios
      .get(`https://j8b208.p.ssafy.io/api/comments/${cocktail_id}`, {
        headers: {
          Authorization: getAccessToken,
        },
      })
      .then((response) => {
        console.log(response);
        setIsWrited(response.data.is_writed);
        setCommentList(response.data.data);
      });
    console.log(commentList);
  }, [commentAdd]);

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

  //댓글 초기화 시켜주는 함수.
  const resetComment = () => {
    setDifficulty("");
    setInputValue("");
    setScope(0);
  };

  //댓글 등록 함수
  const registComment = () => {
    console.log(getAccessToken);
    //만약 이미 댓글이 달려있다면?
    if (isWrited) {
      Swal.fire({
        title: "등록 불가",
        html: "이미 댓글이 등록 되어있습니다.",
        showCancelButton: false,
        confirmButtonText: "확인",
      });
    } else {
      Swal.fire({
        html: "댓글을 등록 하시겠습니까?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "등록",
        denyButtonText: `취소`,
      }).then((result) => {
        //등록을 눌렀다면?
        if (result.isConfirmed) {
          if (scope === 0) {
            Swal.fire("댓글별점이 등록되지 않았습니다. 별점을 등록해주세요.");
          } else if (inputValue.length === 0) {
            Swal.fire("댓글이 등록되지 않았습니다. 댓글을 등록해주세요.");
          } else if (difficulty.length === 0) {
            Swal.fire("난이도가 등록되지 않았습니다. 난이도를 등록해주세요.");
          } else {
            axios
              .post(
                `https://j8b208.p.ssafy.io/api/comments/${cocktail_id}`,
                {
                  comment_content: inputValue,
                  comment_rating: scope,
                  comment_difficulty: difficulty,
                },
                {
                  headers: {
                    Authorization: getAccessToken,
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                  },
                }
              )
              .then(() => {
                setCommentAdd(!commentAdd);
                setModifyCommentCnt(!modifyCommentCnt);
                resetComment();
              })
              .catch((error) => {
                console.error(error);
              });
            Swal.fire("Saved!", "", "success");
          }
        } else if (result.isDenied) {
        }
      });
    }
  };

  // 댓글 수정 함수
  //댓글 수정부분입니다.
  const modifyComment = (
    id: number,
    content: string,
    mydifficulty: string,
    rating: number
  ) => {
    setModify(true);
    setInputValue(content);
    setDifficulty(mydifficulty);
    setScope(rating);
    setScope(0);
    setCommentId(id);
    textareaRef.current.removeAttribute("readOnly");
    if (modify && commentId === id) {
      resetComment();
      setCommentAdd(!commentAdd);
      setModify(false);
      setScope(0);
      setResetStar(!resetStar);
      textareaRef.current.setAttribute("readOnly", true);
    }
  };

  const modifyCommentClick = () => {
    Swal.fire({
      html: "정말로 댓글을 변경하시겠습니까?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "변경",
      denyButtonText: "변경취소",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if (scope === 0) {
          Swal.fire("댓글별점이 등록되지 않았습니다. 별점을 등록해주세요.");
        } else if (inputValue.length === 0) {
          Swal.fire("댓글이 등록되지 않았습니다. 댓글을 등록해주세요.");
        } else if (difficulty.length === 0) {
          Swal.fire("난이도가 등록되지 않았습니다. 난이도를 등록해주세요.");
        } else {
          axios
            .put(
              `https://j8b208.p.ssafy.io/api/comments/${cocktail_id}/${commentId}`,
              {
                comment_content: inputValue,
                comment_rating: scope,
                comment_difficulty: difficulty,
              },
              {
                headers: {
                  Authorization: getAccessToken,
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                },
              }
            )
            .then(() => {
              setCommentAdd(!commentAdd);
              resetComment();
              setModify(false);
              setModifyCommentCnt(!modifyCommentCnt);
              console.log(scope);

              setResetStar(!resetStar);
              textareaRef.current.setAttribute("readOnly", true);
            })
            .catch((error) => {
              console.error(error);
            });
          Swal.fire("저장되었습니다!");
        }
      } else if (result.isDenied) {
      }
    });
  };

  // 댓글 삭제 함수
  const deleteComment = (id: number) => {
    Swal.fire({
      html: "정말 삭제 하시겠습니까?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "삭제",
      denyButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://j8b208.p.ssafy.io/api/comments/${cocktail_id}/${id}`,
            {
              headers: {
                Authorization: getAccessToken,
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .then(() => {
            setCommentAdd(!commentAdd);
            setModifyCommentCnt(!modifyCommentCnt);
          })
          .catch((error) => {
            console.error(error);
          });
        Swal.fire("삭제되었습니다.");
      } else if (result.isDenied) {
      }
    });
  };

  // Comment Tab을 눌렀을 때입니다.
  const commentTab = () => {
    console.log("this is comment");
    setCurrentTab("Comment");
    axios
      .get(`https://j8b208.p.ssafy.io/api/comments/${cocktail_id}`, {
        headers: {
          Authorization: getAccessToken,
        },
      })
      .then((response) => {
        console.log(response);
        setCommentList(response.data.data);
      });
    console.log(commentList);
  };

  const memoTab = () => {
    console.log("this is test");
    setCurrentTab("MyMemo");
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
        src="/assets/icons/cancel.png"
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
                      src={difficulty_img_url_converter_mini(
                        key.comment_difficulty
                      )}
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
                {key.writer_checker && (
                  <div
                    className={
                      modify && commentId === key.comment_id
                        ? style.cocktail_comment_edit_true
                        : style.cocktail_comment_edit_false
                    }
                  >
                    <div
                      className={style.comment_modify}
                      onClick={() =>
                        modifyComment(
                          key.comment_id,
                          key.comment_content,
                          key.comment_difficulty,
                          key.comment_rating
                        )
                      }
                    >
                      <img
                        className={style.comment_modify_img}
                        src="/assets/icons/detail_cocktailcomment_modify.png"
                        alt=""
                      />
                      수정
                    </div>
                    <div
                      className={style.comment_delete}
                      onClick={() => deleteComment(key.comment_id)}
                    >
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
            <Star setScope={setScope} current={scope} rated={resetStar} />
          </div>
          <div className={style.comment_write_box_right}>
            <div className={style.difficulty_selector}>
              <input
                type="radio"
                id="high"
                className={style.difficulty_selector_btn}
                name="level"
                value="상"
                checked={difficulty === "상"}
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
                checked={difficulty === "중"}
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
                checked={difficulty === "하"}
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
            ref={textareaRef}
          ></textarea>
        </div>

        <div className={style.write_btn_form}>
          {modify ? (
            <button className={style.write_btn} onClick={modifyCommentClick}>
              수정
            </button>
          ) : (
            <button
              className={isWrited ? style.nowrite_btn : style.write_btn}
              onClick={registComment}
            >
              등록
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
