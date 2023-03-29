import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import style from "./Cocktail_Info.module.scss";


import { difficulty_img_url_converter } from "../../pages/api/utility/difficulty_img_url_converter";
import { RootState } from "../../../store/store";

import { detail_props } from "../../type/cocktailTypes";

const Cocktail_info = (props: detail_props) => {
  console.log(props)
  const [isLiked, setIsLiked] = useState<boolean>(props.likes_checker);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(
    props.bookmark_checker
  );
  const [isLikedBtn, setIsLikedBtn] = useState<string>();
  const [isBookmarkedBtn, setIsBookmarkedBtn] = useState<string>();

  useEffect(() => {
    if (isLiked) {
      setIsLikedBtn("/assets/icons/LikeCheckedIMG.png");
    } else {
      setIsLikedBtn("/assets/icons/LikeUncheckedIMG.png");
    }
    if (isBookmarked) {
      setIsBookmarkedBtn("/assets/icons/BookmarkCheckedIMG.png");
    } else {
      setIsBookmarkedBtn("/assets/icons/BookmarkUncheckedIMG.png");
    }
  }, [isLiked, isBookmarked]);

  const getAccessToken = useSelector(
    (state: RootState) => state.user.accessToken
  );

  console.log("hi atk : ", getAccessToken);

  const likes_check_handler = () => {
    console.log("isLiked : ", isLiked);
    axios
      .post(
        `/api/cocktails/likes`,
        {
          cocktail_id: props.cocktail_id,
        },
        {
          headers: {
            Authorization: getAccessToken,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        console.log(response);
        setIsLiked(!isLiked);
      });
  };

  const bookmark_check_handler = () => {
    console.log("isBookmarked : ", isBookmarked);
    axios
      .post(
        `https://j8b208.p.ssafy.io/api/cocktails/bookmark`,
        {
          cocktail_id: props.cocktail_id,
        },
        {
          headers: {
            Authorization: getAccessToken,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        setIsBookmarked(!isBookmarked);
        console.log(response);
      });
  };

  let difficultyImg = difficulty_img_url_converter(props.cocktail_difficulty);

  return (
    // <></>
    <div className={style.detail_cocktail_info}>
      {/* 칵테일 이미지 영역 */}
      <div className={style.detail_cocktail_img_div}>
        <img
          className={style.detail_cocktail_img}
          src={props.cocktail_img}
          alt="image"
        />
      </div>
      {/* 칵테일 정보 영역 */}
      <div className={style.detail_cocktail_info_div}>
        {/* 헤더 영역*/}
        <div className={style.detail_cocktail_info_header}>
          <div className={style.detail_cocktail_info_header_top}>
            <div className={style.detail_cocktail_title}>
              {props.cocktail_name_ko}
              <br />({props.cocktail_name_en})
              <img
                onClick={likes_check_handler}
                className={style.detail_cocktail_likebtn}
                src={isLikedBtn}
                alt=""
              />
              <img
                onClick={bookmark_check_handler}
                className={style.detail_cocktail_bookmark}
                src={isBookmarkedBtn}
                alt="image"
              />
            </div>
          </div>
          <div className={style.detail_cocktail_info_header_bottom}>
            <div className={style.detail_cocktail_header_element}>
              <img src="/assets/icons/ratingICON.png" alt="rating" />
              <div className={style.detail_cocktail_header_element_count}>
                {props.cocktail_rating}
              </div>
            </div>

            <div className={style.detail_cocktail_header_element}>
              <img src="/assets/icons/LikeCheckedICON.png" alt="" />
              <div className={style.detail_cocktail_header_element_count}>
                {props.cocktail_likes}
              </div>
            </div>

            <div className={style.detail_cocktail_header_element}>
              <img src="/assets/icons/CommentICON.png" alt="" />
              <div className={style.detail_cocktail_header_element_count}>
                {props.cocktail_comments}
              </div>
            </div>

            <img
              className={style.detail_comment_difficulty}
              src={difficultyImg}
            />
          </div>
        </div>
        {/* 가니쉬랑 베이스 영역 */}
        <div className={style.detail_cocktail_garnish}>
          <div className={style.detail_cocktail_garnish_title_div}>
            <div className={style.detail_cocktail_garnish_title}>Garnish</div>
            {props.garnish?.map((v) => (
              <div className={style.detail_cocktail_garnish_element}>
                #{v.garnish_name}
              </div>
            ))}
          </div>
        </div>
        {/* 재료 리스트 영역  */}
        <div className={style.detail_cocktail_ingredient}>
          <div className={style.detail_cocktail_ingredient_title_div}>
            <img
              className={style.detail_cocktail_ingredient_title_img}
              src="/assets/icons/ingredient_legendIMG.png"
              alt=""
            />
            <div className={style.detail_cocktail_ingredient_glass}>
              &nbsp;{props.glass}&nbsp;
            </div>
            <div className={style.detail_cocktail_ingredient_base}>
              &nbsp; {props.base} &nbsp;
            </div>
          </div>
          <div className={style.detail_cocktail_ingredient_element}>
            {props.ingredient?.map((key) => (
              <div>
                - {key.ingredient_name} ({key.ingredient_amount}{" "}
                {key.ingredient_unit})
              </div>
            ))}
          </div>
        </div>
        {/* 레시피 영역  */}
        <div className={style.detail_cocktail_recipe_textarea}>
          <div className={style.detail_cocktail_recipe_title}>레시피</div>
          <div className={style.detail_cocktail_recipe_message}>
            {props.recipe?.map((key) => (
              <div>
                {key.recipe_num} : {key.recipe_content}
              </div>
            ))}
          </div>
        </div>
        {/* 소개 영역*/}
        <div className={style.detail_cocktail_recipe_content_textarea}>
          <div className={style.detail_cocktail_recipe_content_title}>소개</div>
          <div className={style.detail_cocktail_recipe_content_message}>
            &nbsp; {props.cocktail_content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cocktail_info;
