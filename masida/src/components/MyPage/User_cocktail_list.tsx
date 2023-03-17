import { useState,useEffect } from 'react';
import style from './User_cocktail_list.module.scss';
import Link from 'next/link';
import { My_bookmark_card, My_like_card } from '../UI/Card_ui';
import { cocktailType } from '@/type/cocktailTypes';


export type bookmarkList = {
  data: cocktailType[];
}
  
export type likeList = {
  data: cocktailType[];
}
  
const User_cocktail_list = () => {

  const [bookmark, bookmarkState] = useState(false);
  const [like, likeState] = useState(false);
  const [comment, commentState] = useState(false);  

  const BookMarkHandler = () => {
    bookmarkState(!bookmark);
  };
    
  const LikeHandler = () => {
    likeState(!like);
  };
  const commentHandler = () => {
      commentState(!comment);
  };

  const bookmarkList_props: cocktailType[] = [
    {
    cocktail_id: 1,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
  },
  {
    cocktail_id: 2,
    cocktail_name_ko: "앙 기모띠",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
    },
   {
    cocktail_id: 3,
    cocktail_name_ko: "기모링링링",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
    },
    {
    cocktail_id: 4,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
    },
    {
    cocktail_id: 5,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
    },
    {
    cocktail_id: 6,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
    },
    {
    cocktail_id: 7,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
    },
    {
    cocktail_id: 8,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
    },
    {
    cocktail_id: 9,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
  },
  ]

  const likeList_props: cocktailType[] = [
    {
    cocktail_id: 1,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
  },
  {
    cocktail_id: 2,
    cocktail_name_ko: "앙 기모띠",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
    },
   {
    cocktail_id: 3,
    cocktail_name_ko: "기모링링링",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
    },
    {
    cocktail_id: 4,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
    },
    {
    cocktail_id: 5,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
    },
    {
    cocktail_id: 6,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
    },
    {
    cocktail_id: 7,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
    },
    {
    cocktail_id: 8,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
    },
    {
    cocktail_id: 9,
    cocktail_name_ko: "오렌지 블라썸",
    cocktail_name_en: "orange blossom",
    cocktail_img: "/assets/image/cocktail.png",
    cocktail_likes: 292,
    cocktail_rating: 4.6,
    cocktail_difficulty: "중",
  },
  ]

  
  return (
    <div className={ style.userCocktailList}>
      <div className={ style.userCocktailList_header}>
        <span onClick={BookMarkHandler}>BOOKMARK</span>
        <span onClick={ LikeHandler}>Like</span>
        <span onClick={commentHandler }>Comment</span>
      </div>
      <div className={style.userCocktailList_content}>
        {bookmark&&bookmarkList_props.map((key) => 
          <My_bookmark_card {...key} />
        )}
        {like && likeList_props.map((key) => 
          <My_like_card {...key}/>
        ) }
      </div>
    </div>
  )
};

export default User_cocktail_list;