import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import style from "./index.module.scss";

import Header from "../../components/Header/Header";
import Cocktail_Info from "../../components/Detail/Cocktail_Info";
import Cocktail_recommend from "../../components/Detail/Cocktail_recommend";
import Modal_portal from "../../components/Modal/Modal_portal";
import CommentModal from "../../components/Modal/CommentModal";

import { cocktailType, detail_props } from "../../type/cocktailTypes";
import { commentType } from "../../type/commentTypes";

import { wrapper } from "../../../store";
// 1. 칵테일 상세 조회
//  화면 단에서 axios 호출을 하여 결과 값을 컴포넌트에 props로 넘겨준다.
// 2. 특정 칵테일의 재료와 유사한 칵테일 상위 5개 추천 (컨텐츠 기반)

export type ingredientRecommend = {
  data: cocktailType[];
};

// 3. 특정 칵테일의 색상와 유사한 칵테일 상위 5개 추천 (컨텐츠 기반)
export type colorRecommend = {
  data: cocktailType[];
};

export type commentList = {
  data: commentType[];
};

// 4. 2,3을 자식 컴포넌트에 전달할 type
export type recommend_props = {
  color_recommend: colorRecommend;
  ingredient_recommend: ingredientRecommend;
};

export type comment_props = {
  user_comment: commentList;
};

const recommend_props: recommend_props = {
  color_recommend: {
    data: [
      {
        cocktail_id: 1,
        cocktail_name_ko: "이지현의 땀",
        cocktail_name_en: "(orange Blossom)",
        cocktail_img: "/assets/image/cocktailSample.png",
        cocktail_likes: 292,
        cocktail_rating: 4.6,
        cocktail_difficulty: "하",
      },
      {
        cocktail_id: 2,
        cocktail_name_ko: "오렌지 블라썸c2",
        cocktail_name_en: "(orange Blossom)",
        cocktail_img: "/assets/image/cocktailSample.png",
        cocktail_likes: 292,
        cocktail_rating: 4.6,
        cocktail_difficulty: "하",
      },
      {
        cocktail_id: 3,
        cocktail_name_ko: "오렌지 블라썸c3",
        cocktail_name_en: "(orange Blossom)",
        cocktail_img: "/assets/image/cocktailSample.png",
        cocktail_likes: 292,
        cocktail_rating: 4.6,
        cocktail_difficulty: "하",
      },
      {
        cocktail_id: 4,
        cocktail_name_ko: "김영주의 눈물",
        cocktail_name_en: "(orange Blossom)",
        cocktail_img: "/assets/image/cocktailSample.png",
        cocktail_likes: 292,
        cocktail_rating: 4.6,
        cocktail_difficulty: "하",
      },
    ],
  },
  ingredient_recommend: {
    data: [
      {
        cocktail_id: 1,
        cocktail_name_ko: "오렌지 블라썸i1",
        cocktail_name_en: "(orange Blossom)",
        cocktail_img: "/assets/image/cocktailSample.png",
        cocktail_likes: 111,
        cocktail_rating: 4.6,
        cocktail_difficulty: "중",
      },
      {
        cocktail_id: 2,
        cocktail_name_ko: "오렌지 블라썸i2",
        cocktail_name_en: "(orange Blossom)",
        cocktail_img: "/assets/image/cocktailSample.png",
        cocktail_likes: 222,
        cocktail_rating: 4.6,
        cocktail_difficulty: "중",
      },
      {
        cocktail_id: 3,
        cocktail_name_ko: "오렌지 블라썸i3",
        cocktail_name_en: "(orange Blossom)",
        cocktail_img: "/assets/image/cocktailSample.png",
        cocktail_likes: 111,
        cocktail_rating: 4.6,
        cocktail_difficulty: "중",
      },
      {
        cocktail_id: 4,
        cocktail_name_ko: "오렌지 블라썸i4",
        cocktail_name_en: "(orange Blossom)",
        cocktail_img: "/assets/image/cocktailSample.png",
        cocktail_likes: 222,
        cocktail_rating: 4.6,
        cocktail_difficulty: "중",
      },
    ],
  },
};

interface CocktailProps {
  detail: detail_props;
}

const detail = ({ detail }: CocktailProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState<boolean>();
  const [cocktail_detail, setCocktail_detail] = useState<detail_props>();

  // const header: string = useSelector(
  //   (state: RootState) => state.user.accessToken
  // );
  // console.log("Atk : ", header);

  useEffect(() => {
    setIsLoading(true);
    setCocktail_detail(detail);
  }, [detail]);

  const toggleComment = () => {
    setVisible(!visible);
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <div className={style.detail_layout}>
          <div className={style.detail_layout_left}>
            <Cocktail_Info {...cocktail_detail} />
          </div>
          <div className={style.detail_layout_right}>
            <Cocktail_recommend {...recommend_props} />
          </div>
          {/* 댓글 호버 펼치는 버튼 */}
          <div>
            <img
              className={style.detail_comment_btn}
              src="/assets/icons/detail_comment_btn.png"
              alt="btn"
              onClick={toggleComment}
            />
          </div>
          {visible && (
            <Modal_portal>
              <CommentModal setVisible={setVisible} visible={visible} />
            </Modal_portal>
          )}
        </div>
      </>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default detail;

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      let header: string = store.getState().user.accessToken;
      if (!header) {
        header = "";
      }
      console.log("Atk : ", header);

      try {
        const cocktail_id: number = parseInt(params?.id as string);
        console.log("here ", cocktail_id);
        const response = await axios.get(
          `https://j8b208.p.ssafy.io/api/cocktails/${cocktail_id}`,
          {
            headers: {
              header: header,
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            params: {
              cocktail_id: cocktail_id,
            },
          }
        );
        const data = response.data.data;
        // console.log("call : ", data);
        return {
          props: {
            detail: data,
          },
        };
      } catch (err) {
        console.log(err);
        return {
          props: undefined,
        };
      }
    }
);
