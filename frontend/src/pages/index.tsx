import { Inter } from "next/font/google";

import Main_banner from "../components/Main/Main_banner";
import Main_cocktail from "../components/Main/Main_cocktail";
import Main_search from "../components/Main/Main_search";
import Main_manual from "../components/Main/Main_manual";
import Footer from "../components/Footer/Footer";

// const inter = Inter({ subsets: ["latin"] });

  
// 칵테일 랜덤 추천 1개
export type randomType = {
  cocktail_id: number;
  cocktail_name_ko: string;
  cocktail_name_en: string;
  cocktail_img: string;
  cocktail_content: string;
  // cocktail_difficulty: number;
  cocktail_rating: number;
  // cocktail_likes: number;
  cocktail_comments: number;
}
  
// 칵테일 좋아요 상위 10개
export type likeType = {
  cocktail_id: number,
  cocktail_name_ko: string,
  cocktail_name_en: string,
  cocktail_img: string,
  cocktail_rating: number,
  // cocktail_difficulty:string
  cocktail_comments: number,
}

export type likeList = {
  data: likeType[];
}

export type cocktail_props = {
  random_type: randomType;
  like_list: likeList;
}

export default function Home(): JSX.Element{

  const cocktail_props:cocktail_props = {
    random_type: {
      cocktail_id: 1,
      cocktail_name_ko: "진 토닉",
      cocktail_name_en: "Gin and Tonic",
      cocktail_img: "/assets/image/mainbanner.png",
      cocktail_content: "진과 토닉이 들어간 깔끔한 맛의 칵테일입니다.",
      // cocktail_difficulty: number;
      cocktail_rating: 3.92,
      // cocktail_likes: number;
      cocktail_comments: 180
    },

    like_list: {
      data:[
        {
          cocktail_id: 1,
          cocktail_name_ko: "오렌지 블라섬",
          cocktail_name_en: "Orange Blossom",
          cocktail_img: "/assets/image/cocktail.png",
          cocktail_rating: 3.92,
          // cocktail_difficulty:string
          cocktail_comments: 180,
        },
        {
          cocktail_id: 1,
          cocktail_name_ko: "핑크 블라섬",
          cocktail_name_en: "Pink Blossom",
          cocktail_img: "/assets/image/cocktail.png",
          cocktail_rating: 3.92,
          // cocktail_difficulty:string
          cocktail_comments: 180,
        },
        {
          cocktail_id: 1,
          cocktail_name_ko: "핑크 블라섬",
          cocktail_name_en: "Pink Blossom",
          cocktail_img: "/assets/image/cocktail.png",
          cocktail_rating: 3.92,
          // cocktail_difficulty:string
          cocktail_comments: 180,
        },
        {
          cocktail_id: 1,
          cocktail_name_ko: "핑크 블라섬",
          cocktail_name_en: "Pink Blossom",
          cocktail_img: "/assets/image/cocktail.png",
          cocktail_rating: 3.92,
          // cocktail_difficulty:string
          cocktail_comments: 180,
        },
        {
          cocktail_id: 1,
          cocktail_name_ko: "핑크 블라섬",
          cocktail_name_en: "Pink Blossom",
          cocktail_img: "/assets/image/cocktail.png",
          cocktail_rating: 3.92,
          // cocktail_difficulty:string
          cocktail_comments: 180,
        },
        {
          cocktail_id: 1,
          cocktail_name_ko: "핑크 블라섬",
          cocktail_name_en: "Pink Blossom",
          cocktail_img: "/assets/image/cocktail.png",
          cocktail_rating: 3.92,
          // cocktail_difficulty:string
          cocktail_comments: 180,
        },
        {
          cocktail_id: 1,
          cocktail_name_ko: "핑크 블라섬",
          cocktail_name_en: "Pink Blossom",
          cocktail_img: "/assets/image/cocktail.png",
          cocktail_rating: 3.92,
          // cocktail_difficulty:string
          cocktail_comments: 180,
        },
        {
          cocktail_id: 1,
          cocktail_name_ko: "핑크 블라섬",
          cocktail_name_en: "Pink Blossom",
          cocktail_img: "/assets/image/cocktail.png",
          cocktail_rating: 3.92,
          // cocktail_difficulty:string
          cocktail_comments: 180,
        },
        {
          cocktail_id: 1,
          cocktail_name_ko: "핑크 블라섬",
          cocktail_name_en: "Pink Blossom",
          cocktail_img: "/assets/image/cocktail.png",
          cocktail_rating: 3.92,
          // cocktail_difficulty:string
          cocktail_comments: 180,
        },
        {
          cocktail_id: 1,
          cocktail_name_ko: "핑크 블라섬",
          cocktail_name_en: "Pink Blossom",
          cocktail_img: "/assets/image/cocktail.png",
          cocktail_rating: 3.92,
          // cocktail_difficulty:string
          cocktail_comments: 180,
        },
      ]
    } 
  }

  return (
    <>
      <Main_banner />
      <Main_cocktail {...cocktail_props} />
      <Main_search />
      <Main_manual />
      <Footer/>
    </>
  );
}

