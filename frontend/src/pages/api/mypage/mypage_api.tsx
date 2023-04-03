import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { likes_cocktail } from "../../../type/cocktailTypes";
import { mypageCommentType } from "../../../type/commentTypes"

axios.defaults.baseURL = "https://j8b208.p.ssafy.io/";

//북마크와 좋아요의 개수를 받아오는 axios 요청.
export const get_bookmarkandlike = async () => {
    let url = "/api/mypage";
    let value = {
        bookmark_count : 0,
        likes_count : 0,
    }
     const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: useSelector((state: RootState) => state.user.accessToken),
        }
    }
    await axios
    .get(url, config)
    .then((response) => {
        console.log("나의 북마크 좋아요개수는 이것.");
        value.bookmark_count = response.data.bookmark_count;
        value.likes_count = response.data.likes_count;
    })
    .catch((err) => {
        console.log("이건 바로 오류지" , err);
    })
    return value;
} 

//내가 좋아요 누른 칵테일들 axios요청.
export const get_likescocktail = async() => {
    let url = "/api/mypage/likes";
    let value: likes_cocktail[] = null;
     const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: useSelector((state: RootState) => state.user.accessToken),
        }
    }
    await axios
    .get(url, config)
    .then((response) => {
        console.log("내가 좋아요 누른 칵테일들 저장", response);
        value = response.data.data;
    })
    .catch((err) => {
        console.log("이건 에러야", err);
    })
}

//내가 북마크한 칵테일들 가져오는 axios
export const get_bookmarkcocktail = async() => {
    let url = "/api/mypage/bookmarks";
    let value: likes_cocktail[] = null;
    const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: useSelector((state: RootState) => state.user.accessToken),
        }
    }
    await axios
    .get(url, config)
    .then((response) => {
        console.log("내가 북마크 누른 칵테일들 저장", response);
        value = response.data.data;
    })
    .catch((err) => {
        console.log("이건 에러야", err);
    })
}

//마이페이지 칵테일 선호 분석(요약본)
export const get_cocktail_summary = async() => {
    let url = "/api/mypage/cocktail-summary";
    let value = null;
}

//마이페이지 사용자의 댓글&평가리스트 반환 axios
export const get_mypage_commnet = async() => {
    let url = "/api/mypage/comment";
    let value : mypageCommentType[] = null;
    const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: useSelector((state: RootState) => state.user.accessToken),
        }
    }
    await axios
    .get(url, config)
    .then((response) => {
        console.log("댓글 목록들을 싹 보여줘!", response);
        value = response.data.data;
    })
    .catch((err) => {
        console.log("이건 에러야", err);
    })
}
