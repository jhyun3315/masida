import { useRouter } from "next/router";

import Header from "../../components/Header/Header";
import Cocktail_Info from "@/components/Detail/Cocktail_Info";

// 1. 칵테일 상세 조회
export type recipeType = {
  recipe_num: number;
  recipe_content: string;
};

export type ingredientType = {
  ingredient_name: string;
  ingredient_amount: string;
  ingredient_unit: string;
};

// 화면 단에서 axios 호출을 하여 결과 값을 컴포넌트에 props로 넘겨준다.
export type idProps = {
  cocktail_id: number;
  cocktail_name_ko: string;
  cocktail_name_en: string;
  cocktail_img: string;
  cocktail_content: string;
  cocktail_difficulty: string;
  cocktail_rating: number;
  cocktail_likes: number;
  cocktail_comments: number;
  likes_checker: boolean;
  bookmark_checker: boolean;
  glass: string;
  recipe: recipeType[];
  ingredient: ingredientType[];
};

// 2. 특정 칵테일의 재료와 유사한 칵테일 상위 5개 추천 (컨텐츠 기반)
export type cocktailType = {
  cocktail_id: number,
	cocktail_name_ko: string,
	cocktail_name_en: string,
	cocktail_img: string,
	cocktail_likes: number,
	cocktail_rating: number,
	cocktail_difficulty : string
}
export type ingredientRecommend = {
  data:cocktailType[]
}

// 3. 특정 칵테일의 색상와 유사한 칵테일 상위 5개 추천 (컨텐츠 기반)
export type colorRecommend = {
  data:cocktailType[]
}

const detail = () => {
  const router = useRouter();

  // router.query.id가 undefined일 수 있기 때문에 as String을 붙혀줘서 해결한다.
  const x: string = router.query.id as string;

  const props: idProps = {
    cocktail_id: parseInt(x, 10),
    cocktail_name_ko: "피치 크러쉬",
    cocktail_name_en: "Peach Crush",
    cocktail_img: "/assets/image/cocktailSample.png",
    cocktail_content:
      "Vinious pineau des charentes and apricot notes shine in this fruity sour.Vinious pineau des charentes and apricot notes shine in this fruity sour.Vinious pineau des charentes and apricot notes shine in this fruity sour.Vinious pineau des charentes and apricot notes shine in this fruity sour.",
    cocktail_difficulty: "중",
    cocktail_rating: 3.5,
    cocktail_likes: 3212,
    cocktail_comments: 2233,
    likes_checker: false,
    bookmark_checker: false,
    glass: "동그리 동동잔",
    recipe: [
      {
        recipe_num: 1,
        recipe_content: "이거 넣고",
      },
      {
        recipe_num: 2,
        recipe_content: "저거 넣고",
      },
      {
        recipe_num: 3,
        recipe_content: "다 넣으면",
      },
      {
        recipe_num: 4,
        recipe_content: "끝입니다~",
      },
    ],
    ingredient: [
      {
        ingredient_name: "피치 리큐어",
        ingredient_amount: "1",
        ingredient_unit: "oz",
      },
      {
        ingredient_name: "스위트 & 사워 믹스",
        ingredient_amount: "20",
        ingredient_unit: "ml",
      },
      {
        ingredient_name: "크랜베리 주스",
        ingredient_amount: "25",
        ingredient_unit: "ml",
      },
      {
        ingredient_name: "잘게 갈은 얼음",
        ingredient_amount: "20",
        ingredient_unit: "ml",
      },

    ],
  };

  return (
    <>
      <Header />
      <Cocktail_Info {...props} />
    </>
  );
};

export default detail;
