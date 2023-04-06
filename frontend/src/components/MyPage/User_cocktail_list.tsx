import axios from "axios";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import style from "./User_cocktail_list.module.scss";
import { My_bookmark_card, My_like_card, My_comment_card } from "../UI/Card_ui";
import { cocktailType } from "../../type/cocktailTypes";
import { mypageCommentType } from "../../type/commentTypes";
import { store } from "../../../store/store";

interface MyComponentProps {
  setBookmarkModify: Dispatch<SetStateAction<boolean>>;
  bookmarkModify: boolean;
}

const User_cocktail_list: React.FC<MyComponentProps> = ({
  bookmarkModify,
  setBookmarkModify,
}) => {
  const [display, setDisplay] = useState<string>("bookmark");
  const [likesList, setLikesList] = useState<cocktailType[]>();
  const [likeToggle, setLikeToggle] = useState<boolean>(false);

  const [bookmarksList, setBookmarksList] = useState<cocktailType[]>();
  const [bookmarkToggle, setBookmark] = useState<boolean>(true);

  const [commentsList, setCommentsList] = useState<mypageCommentType[]>();
  const [commentToggle, setCommentToggle] = useState<boolean>(false);

  const [bookmarkCurrentPage, setBookmarkCurrentPage] = useState<number>(0);
  const [bookmarkIsEnd, setBookmarkIsEnd] = useState<boolean>(false);

  const [likeCurrentPage, setLikeCurrentPage] = useState<number>(0);
  const [, setLikeIsEnd] = useState<boolean>(false);

  const [commentCurrentPage, setCommentCurrentPage] = useState<number>(0);
  const [, setCommentIsEnd] = useState<boolean>(false);

  const atk = store.getState().user.accessToken;

  useEffect(() => {
    axios
      .get(
        `https://j8b208.p.ssafy.io/api/mypage/bookmarks?page=${bookmarkCurrentPage}`,
        {
          headers: {
            Authorization: atk,
          },
        }
      )
      .then((response) => {
        const result = response.data;
        setBookmarksList(result.data);
        setBookmarkCurrentPage(result.next_page);
        setBookmarkIsEnd(result.is_end);
      });
    axios
      .get(
        `https://j8b208.p.ssafy.io/api/mypage/likes?page=${likeCurrentPage}`,
        {
          headers: {
            Authorization: atk,
          },
        }
      )
      .then((response) => {
        const result = response.data;
        setLikesList(result.data);
        setLikeCurrentPage(result.next_page);
        setLikeIsEnd(result.is_end);
      });

    axios
      .get(
        `https://j8b208.p.ssafy.io/api/mypage/comment?page=${commentCurrentPage}`,
        {
          headers: {
            Authorization: atk,
          },
        }
      )
      .then((response) => {
        const result = response.data;
        setCommentsList(result.data);
        setCommentCurrentPage(result.next_page);
        setCommentIsEnd(result.is_end);
      });
  }, []);

  useEffect(() => {
    // 북마크 변경하면 화면 다시 렌더링하려고 둔 부분
    axios
      .get(`https://j8b208.p.ssafy.io/api/mypage/bookmarks?page=0`, {
        headers: {
          Authorization: atk,
        },
      })
      .then((response) => {
        setBookmarksList(response.data.data);
      });
  }, [bookmarkModify]);

  const tabHandler = (mode: string) => {
    //북마크 좋아요 댓글 스타일 먹이기 위해서 사용.
    if (mode === "bookmark") {
      if (bookmarkToggle) {
        return;
      }
    } else if (mode === "like") {
      if (likeToggle) {
        return;
      }
    } else if (mode === "comment") {
      if (commentToggle) {
        return;
      }
    }
    switch (mode) {
      case "bookmark":
        setDisplay("bookmark");
        setLikeToggle(false);
        setBookmark(true);
        setCommentToggle(false);
        break;
      case "like":
        setDisplay("like");
        setLikeToggle(true);
        setBookmark(false);
        setCommentToggle(false);
        break;
      case "comment":
        setDisplay("comment");
        setLikeToggle(false);
        setBookmark(false);
        setCommentToggle(true);
        break;
      default:
        setDisplay("bookmark");
        break;
    }
  };

  //무한 스크롤 구현. Bookmark
  const bookmarkScrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (
      200 > target.scrollHeight - (target.scrollTop + target.clientHeight) &&
      !bookmarkIsEnd
    ) {
      axios
        .get(
          `https://j8b208.p.ssafy.io/api/mypage/bookmarks?page=${bookmarkCurrentPage}`,
          {
            headers: {
              Authorization: atk,
            },
          }
        )
        .then((response) => {
          const result = response.data;
          setBookmarksList([...bookmarksList, ...response.data.data]);
          setBookmarkCurrentPage(result.next_page);
          setBookmarkIsEnd(result.is_end);
        });
    }
  };

  //무한 스크롤 구현. like
  const likeScrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (
      200 > target.scrollHeight - (target.scrollTop + target.clientHeight) &&
      !bookmarkIsEnd
    ) {
      axios
        .get(
          `https://j8b208.p.ssafy.io/api/mypage/likes?page=${likeCurrentPage}`,
          {
            headers: {
              Authorization: atk,
            },
          }
        )
        .then((response) => {
          const result = response.data;
          setLikesList([...likesList, ...response.data.data]);
          setLikeCurrentPage(result.next_page);
          setLikeIsEnd(result.is_end);
        });
    }
  };

  //무한 스크롤 구현. comment
  const commentScrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (
      200 > target.scrollHeight - (target.scrollTop + target.clientHeight) &&
      !bookmarkIsEnd
    ) {
      axios
        .get(
          `https://j8b208.p.ssafy.io/api/mypage/comment?page=${commentCurrentPage}`,
          {
            headers: {
              Authorization: atk,
            },
          }
        )
        .then((response) => {
          const result = response.data;
          setCommentsList([...commentsList, ...response.data.data]);
          setCommentCurrentPage(result.next_page);
          setCommentIsEnd(result.is_end);
        });
    }
  };

  const bookmarksListDiv = () => {
    if (bookmarksList && bookmarksList.length > 0) {
      return (
        <div
          className={style.userCocktailList_content}
          onScroll={bookmarkScrollHandler}
        >
          {bookmarksList?.map((key) => (
            <My_bookmark_card
              key={key.cocktail_id}
              cocktail={key}
              bookmarkModify={bookmarkModify}
              setBookmarkModify={setBookmarkModify}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className={style.userCocktailList_content}>
          북마크를 눌러주세요
        </div>
      );
    }
  };

  const likesListDiv = () => {
    if (likesList && likesList.length > 0) {
      return (
        <div
          className={style.userCocktailList_content}
          onScroll={likeScrollHandler}
        >
          {likesList?.map((key) => (
            <My_like_card {...key} />
          ))}
        </div>
      );
    } else {
      return (
        <div className={style.userCocktailList_content}>
          좋아요를 눌러주세요
        </div>
      );
    }
  };

  const commentsListDiv = () => {
    if (commentsList && commentsList.length > 0) {
      return (
        <div
          className={style.userCommentList_content}
          onScroll={commentScrollHandler}
        >
          {commentsList?.map((key) => (
            <My_comment_card {...key} />
          ))}
        </div>
      );
    } else {
      return (
        <div className={style.userCocktailList_content}>댓글을 달아주세요</div>
      );
    }
  };

  return (
    <div className={style.userCocktailList}>
      <div className={style.userCocktailList_header}>
        <span
          className={bookmarkToggle ? style.selectedTab : ""}
          onClick={() => tabHandler("bookmark")}
        >
          BOOKMARK
        </span>
        <span
          className={likeToggle ? style.selectedTab : ""}
          onClick={() => tabHandler("like")}
        >
          LIKE
        </span>
        <span
          className={commentToggle ? style.selectedTab : ""}
          onClick={() => tabHandler("comment")}
        >
          COMMENT
        </span>
      </div>
      {display === "bookmark" ? bookmarksListDiv() : " "}
      {display === "like" ? likesListDiv() : " "}
      {display === "comment" ? commentsListDiv() : " "}
    </div>
  );
};

export default User_cocktail_list;
