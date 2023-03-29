import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import style from "./index.module.scss";

import Header from "../../components/Header/Header";
import Cocktail_Info from "../../components/Detail/Cocktail_Info";
import Cocktail_recommend from "../../components/Detail/Cocktail_recommend";
import Modal_portal from "../../components/Modal/Modal_portal";
import CommentModal from "../../components/Modal/CommentModal";

import { cocktailType } from "../../type/cocktailTypes";
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

// 4. 2,3을 자식 컴포넌트에 전달할 type
export type recommend_props = {
  color_recommend: cocktailType[];
  ingredient_recommend: cocktailType[];
};

interface CocktailProps {
  recommend_list_color: cocktailType[];
  recommend_list_ingredient: cocktailType[];
}

const detail = ({
  recommend_list_color,
  recommend_list_ingredient,
}: CocktailProps) => {
  const router = useRouter();
  const [cocktail_id, setCocktail_id] = useState<number>(parseInt(router?.query.id as string));
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState<boolean>();
  const [cocktail_recommend_color, setCocktail_recommend_color] =
    useState<cocktailType[]>();
  const [cocktail_recommend_ingredient, setCocktail_recommend_ingredient] =
    useState<cocktailType[]>();

  useEffect(()=>{

  }, [router.query.id])
  useEffect(() => {
    setIsLoading(true);
    setCocktail_recommend_color(recommend_list_color);
    setCocktail_recommend_ingredient(recommend_list_ingredient);
  }, [detail]);

  const recommend_props: recommend_props = {
    color_recommend: cocktail_recommend_color,
    ingredient_recommend: cocktail_recommend_ingredient,
  };

  const toggleComment = () => {
    setVisible(!visible);
  };

  if (isLoading) {
    console.log("page transition", router.query.id)
    return (
      <>
        <Header />
        <div className={style.detail_layout}>
          <div className={style.detail_layout_left}>
            <Cocktail_Info cocktail_id={cocktail_id} />
          </div>
          <div className={style.detail_layout_right}>
            <Cocktail_recommend {...recommend_props} />
          </div>
          {/* 댓글 호버 펼치는 버튼 */}
          {!visible && (
            <div>
              <img
                className={style.detail_comment_btn}
                src="/assets/icons/detail_comment_btn.png"
                alt="btn"
                onClick={toggleComment}
              />
            </div>
          )}
          {visible && (
            <Modal_portal>
              <CommentModal
                setVisible={setVisible}
                visible={visible}
                cocktail_id={parseInt(router?.query.id as string)}
              />
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({}) => {
      let atk: string = store.getState().user.accessToken;
      if (!atk) {
        atk = "";
      }
      console.log("Atk : ", atk);
      try {
        const response = await axios.get(
          `https://j8b208.p.ssafy.io/api/cocktails/likes-top`,
          {
            headers: {
              Authorization: atk,
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        const response2 = await axios.get(
          `https://j8b208.p.ssafy.io/api/cocktails/likes-top`,
          {
            headers: {
              Authorization: atk,
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        const data = response.data.data;
        const data2 = response2.data.data;
        return {
          props: {
            recommend_list_color: data,
            recommend_list_ingredient: data2,
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
