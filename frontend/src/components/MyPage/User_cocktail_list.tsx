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
  const [bookmarksList, setBookmarksList] = useState<cocktailType[]>();
  const [commentsList, setCommentsList] = useState<mypageCommentType[]>();

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

  const tabHandler = (mood: string) => {
    switch (mood) {
      case "bookmark":
        setDisplay("bookmark");
        console.log("bookmark selected");
        break;
      case "like":
        setDisplay("like");
        console.log("like selected");
        break;
      case "comment":
        setDisplay("comment");
        console.log("comment selected");
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
        <span onClick={() => tabHandler("bookmark")}>BOOKMARK</span>
        <span onClick={() => tabHandler("like")}>LIKE</span>
        <span onClick={() => tabHandler("comment")}>COMMENT</span>
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
