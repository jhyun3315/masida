import axios from "axios";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import style from "./User_cocktail_list.module.scss";
import Link from "next/link";
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

  const [currentPage, setCurrentPage] = useState<number>(0);
  const atk = store.getState().user.accessToken;

  useEffect(() => {
    axios
      .get(
        `https://j8b208.p.ssafy.io/api/mypage/bookmarks?page=${currentPage}`,
        {
          headers: {
            Authorization: atk,
          },
        }
      )
      .then((response) => {
        console.log("bookmark");
        setBookmarksList(response.data.data);
        console.log(response.data.next_page);
        console.log(response.data.is_end);
      });
    axios
      .get(`https://j8b208.p.ssafy.io/api/mypage/likes?page=${currentPage}`, {
        headers: {
          Authorization: atk,
        },
      })
      .then((response) => {
        console.log("like");
        setLikesList(response.data.data);
        console.log(response.data.next_page);
        console.log(response.data.is_end);
      });

    axios
      .get(`https://j8b208.p.ssafy.io/api/mypage/comment?page=${currentPage}`, {
        headers: {
          Authorization: atk,
        },
      })
      .then((response) => {
        console.log("comment");
        setCommentsList(response.data.data);
        console.log(response.data.next_page);
        console.log(response.data.is_end);
      });
  }, []);

  useEffect(() => {
    // 북마크 변경하면 화면 다시 렌더링하려고 둔 부분
    console.log("triggered");
    axios
      .get(
        `https://j8b208.p.ssafy.io/api/mypage/bookmarks?page=${currentPage}`,
        {
          headers: {
            Authorization: atk,
          },
        }
      )
      .then((response) => {
        console.log("bookmark reload");
        setBookmarksList(response.data.data);
        console.log(response.data.next_page);
        console.log(response.data.is_end);
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

  const bookmarksListDiv = () => {
    return (
      <>
        {bookmarksList?.map((key) => (
          <My_bookmark_card
            key={key.cocktail_id}
            cocktail={key}
            bookmarkModify={bookmarkModify}
            setBookmarkModify={setBookmarkModify}
          />
        ))}
      </>
    );
  };

  const likesListDiv = () => {
    return (
      <>
        {likesList?.map((key) => (
          <My_like_card {...key} />
        ))}
      </>
    );
  };

  const commentsListDiv = () => {
    if (commentsList) {
      return (
        <>
          {commentsList?.map((key) => (
            <My_comment_card {...key} />
          ))}
        </>
      );
    } else {
      return <>댓글 없ㅇ름</>;
    }
  };

  return (
    <div className={style.userCocktailList}>
      <div className={style.userCocktailList_header}>
        <span
          className={bookmarkToggle ? style.bookmark : ""}
          onClick={() => tabHandler("bookmark")}
        >
          BOOKMARK
        </span>
        <span
          className={likeToggle ? style.like : ""}
          onClick={() => tabHandler("like")}
        >
          LIKE
        </span>
        <span
          className={commentToggle ? style.comment : ""}
          onClick={() => tabHandler("comment")}
        >
          COMMENT
        </span>
      </div>
      <div
        className={`${
          display == "comment" ? style.active : style.userCocktailList_content
        }`}
      >
        {display === "bookmark" ? bookmarksListDiv() : " "}
        {display === "like" ? likesListDiv() : " "}
        {display === "comment" ? commentsListDiv() : " "}
      </div>
    </div>
  );
};

export default User_cocktail_list;
