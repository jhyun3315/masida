import styles from "./World_cup_league.module.scss";
import { detail_props } from "@/type/cocktailTypes";
import React, { useState, useEffect } from "react";
import { World_cup_league_card } from "../UI/card2";

// https://velog.io/@pyo-sh/React-Project-%EC%9D%B4%EC%83%81%ED%98%95-%EC%9B%94%EB%93%9C%EC%BB%B5

const World_cup_league = () => {
  const items: detail_props[] = [
    {
      cocktail_id: 1,
      cocktail_content:
        "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
      cocktail_difficulty: "상",
      cocktail_rating: 3.5,
      cocktail_likes: 3212,
      cocktail_comments: 2233,
      likes_checker: true,
      bookmark_checker: true,
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
      cocktail_name_ko: "전도사",
      cocktail_name_en: "The Missionary",
      cocktail_img:
        "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/the-missionary.jpg?itok=MT7XW_-H",
    },
    {
      cocktail_id: 2,
      cocktail_name_ko: "전도사의 몰락",
      cocktail_name_en: "Missionary's Downfall",
      cocktail_img:
        "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/_7505176-edit.jpg?itok=E-GYq9iO",
      cocktail_content:
        "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
      cocktail_difficulty: "상",
      cocktail_rating: 3.5,
      cocktail_likes: 3212,
      cocktail_comments: 2233,
      likes_checker: true,
      bookmark_checker: true,
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
    },
    {
      cocktail_id: 3,
      cocktail_name_ko: "미즈 마짜",
      cocktail_name_en: "Mizz Mazza",
      cocktail_img:
        "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/mizz-mazza.jpg?itok=gu14Gs50",
      cocktail_content:
        "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
      cocktail_difficulty: "상",
      cocktail_rating: 3.5,
      cocktail_likes: 3212,
      cocktail_comments: 2233,
      likes_checker: true,
      bookmark_checker: true,
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
    },
    {
      cocktail_id: 4,
      cocktail_name_ko: "흉내지빠귀, 나에게 운을 빌어줘",
      cocktail_name_en: "Mockingbird, Wish Me Luck",
      cocktail_img:
        "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/mockingbirdluck6487.jpg?itok=F5iUo5pJ",
      cocktail_content:
        "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
      cocktail_difficulty: "상",
      cocktail_rating: 3.5,
      cocktail_likes: 3212,
      cocktail_comments: 2233,
      likes_checker: true,
      bookmark_checker: true,
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
    },
    {
      cocktail_id: 5,
      cocktail_name_ko: "모코 줌비",
      cocktail_name_en: "Moko Jumbie",
      cocktail_img:
        "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/mokojombie6173.jpg?itok=TLuLrcw8",
      cocktail_content:
        "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
      cocktail_difficulty: "상",
      cocktail_rating: 3.5,
      cocktail_likes: 3212,
      cocktail_comments: 2233,
      likes_checker: true,
      bookmark_checker: true,
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
    },
    {
      cocktail_id: 6,
      cocktail_name_ko: "그 완벽한 시간",
      cocktail_name_en: "El Momento Perfecto",
      cocktail_img:
        "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/el-momento-perfecto.jpg?itok=99VfGOy0",
      cocktail_content:
        "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
      cocktail_difficulty: "상",
      cocktail_rating: 3.5,
      cocktail_likes: 3212,
      cocktail_comments: 2233,
      likes_checker: true,
      bookmark_checker: true,
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
    },
    {
      cocktail_id: 7,
      cocktail_name_ko: "겨울 원숭이",
      cocktail_name_en: "A Monkey In Winter",
      cocktail_img:
        "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/a-monkey-in-winter.jpg?itok=_FHsvkGa",
      cocktail_content:
        "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
      cocktail_difficulty: "상",
      cocktail_rating: 3.5,
      cocktail_likes: 3212,
      cocktail_comments: 2233,
      likes_checker: true,
      bookmark_checker: true,
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
    },
    {
      cocktail_id: 8,
      cocktail_name_ko: "몬턱",
      cocktail_name_en: "Montauk (NoMad)",
      cocktail_img:
        "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/79C354F6-A692-4DA0-A412-",
      cocktail_content:
        "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
      cocktail_difficulty: "상",
      cocktail_rating: 3.5,
      cocktail_likes: 3212,
      cocktail_comments: 2233,
      likes_checker: true,
      bookmark_checker: true,
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
    },
    {
      cocktail_id: 9,
      cocktail_name_ko: "더 몬테 프레스",
      cocktail_name_en: "The Monte Press",
      cocktail_img:
        "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/img_1896.jpg?itok=uQJPxHts",
      cocktail_content:
        "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
      cocktail_difficulty: "상",
      cocktail_rating: 3.5,
      cocktail_likes: 3212,
      cocktail_comments: 2233,
      likes_checker: true,
      bookmark_checker: true,
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
    },
    {
      cocktail_id: 10,
      cocktail_name_ko: "몬트리올 칵테일",
      cocktail_name_en: "Montreal Cocktail",
      cocktail_img:
        "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/img_3795_1.png?itok=pKGlGhTS",
      cocktail_content:
        "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
      cocktail_difficulty: "상",
      cocktail_rating: 3.5,
      cocktail_likes: 3212,
      cocktail_comments: 2233,
      likes_checker: true,
      bookmark_checker: true,
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
    },
    {
      cocktail_id: 11,
      cocktail_name_ko: "도덕적 비열",
      cocktail_name_en: "Moral Turpitude",
      cocktail_img:
        "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/moralturpitude.jpg?itok=UgYU5BoR",
      cocktail_content:
        "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
      cocktail_difficulty: "상",
      cocktail_rating: 3.5,
      cocktail_likes: 3212,
      cocktail_comments: 2233,
      likes_checker: true,
      bookmark_checker: true,
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
    },
    {
      cocktail_id: 12,
      cocktail_name_ko: "모어 아마로",
      cocktail_name_en: "More Amaro",
      cocktail_img:
        "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/More%20AmaroB.JPG?itok=68B4BiTX",
      cocktail_content:
        "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
      cocktail_difficulty: "상",
      cocktail_rating: 3.5,
      cocktail_likes: 3212,
      cocktail_comments: 2233,
      likes_checker: true,
      bookmark_checker: true,
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
    },
    {
      cocktail_id: 13,
      cocktail_name_ko: "모닝 달링",
      cocktail_name_en: "Morning Darling",
      cocktail_img:
        "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/20191211_170104.jpg?itok=QBcNlKaC",
      cocktail_content:
        "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
      cocktail_difficulty: "상",
      cocktail_rating: 3.5,
      cocktail_likes: 3212,
      cocktail_comments: 2233,
      likes_checker: true,
      bookmark_checker: true,
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
    },
    {
      cocktail_id: 14,
      cocktail_name_ko: "미스터 매니저",
      cocktail_name_en: "Mr. Manager",
      cocktail_img:
        "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/zoos2qa3v5f21.jpg?itok=Pnv3oVJu",
      cocktail_content:
        "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
      cocktail_difficulty: "상",
      cocktail_rating: 3.5,
      cocktail_likes: 3212,
      cocktail_comments: 2233,
      likes_checker: true,
      bookmark_checker: true,
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
    },
    {
      cocktail_id: 15,
      cocktail_name_ko: "미스터 스위즐",
      cocktail_name_en: "Mr. Swizzle",
      cocktail_img:
        "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/mr-swizzle-cocktail_0.jpg?itok=Li232jH1",
      cocktail_content:
        "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
      cocktail_difficulty: "상",
      cocktail_rating: 3.5,
      cocktail_likes: 3212,
      cocktail_comments: 2233,
      likes_checker: true,
      bookmark_checker: true,
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
    },
    {
      cocktail_id: 16,
      cocktail_name_ko: "더 뮤직 오렌지",
      cocktail_name_en: "The Music Orange",
      cocktail_img:
        "https://kindredcocktails.com/sites/kindredcocktails.com/files/styles/large/public/pictures/cocktail/the-music-orange.jpg?itok=pZv_lMII",
      cocktail_content:
        "Vinious pineau des charentes and apricot notes shine in this fruity sour.",
      cocktail_difficulty: "상",
      cocktail_rating: 3.5,
      cocktail_likes: 3212,
      cocktail_comments: 2233,
      likes_checker: true,
      bookmark_checker: true,
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
    },
  ];

  const [cocktails, setCocktails] = useState<detail_props[]>([]);
  const [displays, setDisplays] = useState<detail_props[]>([]);
  const [winners, setWinners] = useState<detail_props[]>([]);
  const [rounds, setRounds] = useState<number>(1);

  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setCocktails(items);
  }, []);

  useEffect(() => {
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = (cocktail: detail_props) => (e: React.MouseEvent) => {
    if (rounds < 15) setRounds(rounds + 1);

    if (cocktails.length <= 2) {
      if (winners.length === 0) {
        // 우승자가 나온 상황
        // 화면 다시 렌더링하자
        setDisplays([cocktail]);
      } else {
        let updatedCocktail: detail_props[] = [...winners, cocktail];
        setCocktails(updatedCocktail);
        setDisplays([updatedCocktail[0], updatedCocktail[1]]);
        setWinners([]);
      }
    } else if (cocktails.length > 2) {
      setWinners([...winners, cocktail]);
      setDisplays([cocktails[2], cocktails[3]]);
      setCocktails(cocktails.slice(2));
    }
  };
  return (
    <>
      {/* {displays.map((key) => (
        <div onClick={clickHandler(key)}>{key.cocktail_id}</div>
      ))} */}
      <div>
        {/* <img
          className={styles.go_back_btn}
          src="/assets/icons/go_back_btn.png"
          alt=""
        /> */}
      </div>
      <div className={styles.random_cocktail_selector}>
        {displays.map((key) => (
          <div
            onClick={clickHandler(key)}
            className={styles.random_cocktail_card}
          >
            <World_cup_league_card {...key} />
          </div>
        ))}
      </div>
    </>
  );
};

export default World_cup_league;
