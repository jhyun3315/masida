import { useState,useEffect } from 'react';
import style from './User_cocktail_list.module.scss';
import Link from 'next/link';
import { My_bookmark_card, My_like_card,My_comment_card } from '../UI/Card_ui';
import { cocktailType, mypageCommentType } from '@/type/cocktailTypes';

  
const User_cocktail_list = () => {

  const [bookmark, bookmarkState] = useState(false);
  const [like, likeState] = useState(false);
  const [comment, commentState] = useState(false);  

  const BookMarkHandler = () => {
    if (like) {
      likeState(!like);
    } else if (comment) {
      commentState(!comment);
    }

    bookmarkState(!bookmark);
  };
    
  const LikeHandler = () => {
    if (bookmark) {
      bookmarkState(!bookmark);
    } else if (comment) {
      commentState(!comment);
    }

    likeState(!like);
  };
  const commentHandler = () => {
     if (bookmark) {
      bookmarkState(!bookmark);
    } else if (like) {
      likeState(!like);
    }
    
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

  const commentList_props: mypageCommentType[] = [
    {
      cocktail_id: 1,
	    cocktail_name_ko: "오렌지 블라섬",
	    cocktail_img: "/assets/image/cocktail.png",
			cocktail_difficulty_user : "상",
			comment_content : "존맛탱구리",
			comment_rating : 3.9,
      comment_date: "2023-05-05"
    },
    {
      cocktail_id: 2,
	    cocktail_name_ko: "오렌지 블라섬",
	    cocktail_img: "/assets/image/cocktail.png",
			cocktail_difficulty_user : "상",
			comment_content : "존맛탱구리",
			comment_rating : 3.9,
      comment_date: "2023-05-05"
    },
    {
      cocktail_id: 3,
	    cocktail_name_ko: "오렌지 블라섬",
	    cocktail_img: "/assets/image/cocktail.png",
			cocktail_difficulty_user : "상",
			comment_content : "존맛탱구리",
			comment_rating : 3.9,
      comment_date: "2023-05-05"
    },
    {
      cocktail_id: 4,
	    cocktail_name_ko: "오렌지 블라섬",
	    cocktail_img: "/assets/image/cocktail.png",
			cocktail_difficulty_user : "상",
			comment_content : "존맛탱구리",
			comment_rating : 3.9,
      comment_date: "2023-05-05"
    },
    {
      cocktail_id: 5,
	    cocktail_name_ko: "오렌지 블라섬",
	    cocktail_img: "/assets/image/cocktail.png",
			cocktail_difficulty_user : "상",
			comment_content : "존맛탱구리",
			comment_rating : 3.9,
      comment_date: "2023-05-05"
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
        )}
        {comment && commentList_props.map((key) => 
          <My_comment_card {...key}/>
        )}
      </div>
    </div>
  )
};

export default User_cocktail_list;