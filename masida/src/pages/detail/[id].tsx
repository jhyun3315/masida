import { useRouter } from "next/router";

import Header from "../../components/Header/Header";
import CocktailInfo from "@/components/Detail/CocktailInfo";

export type recipe = {
  recipe_num: number;
  recipe_content: string;
};

export type ingredient = {
  ingredient_name: string;
  ingredient_amount: string;
  ingredient_unit: string;
};

// 화면 단에서 axios 호출을 하여 결과 값을 컴포넌트에 props로 넘겨준다.
export type IdProps = {
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
  recipe: recipe[];
  // ingredient : ingredient[],
};

const detail = () => {
  const router = useRouter();

  // router.query.id가 undefined일 수 있기 때문에 as String을 붙혀줘서 해결한다.
  const x: string = router.query.id as string;

  const props: IdProps = {
    cocktail_id: parseInt(x, 10),
    cocktail_name_ko: "피치 크러쉬",
    cocktail_name_en: "Peach Crush",
    cocktail_img: "/assets/image/mainbanner.png",
    cocktail_content:
      "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
    cocktail_difficulty: "중",
    cocktail_rating: 3.5,
    cocktail_likes: 3212,
    cocktail_comments: 23,
    likes_checker: true,
    bookmark_checker: false,
    glass: "동그리 동동",
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
        recipe_num: 3,
        recipe_content: "끝입니다~",
      },
    ],
  };

  return (
    <>
      <Header />
      <CocktailInfo {...props} />
    </>
  );
};

export default detail;
