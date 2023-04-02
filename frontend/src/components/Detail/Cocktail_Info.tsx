import axios from "axios";
import { useState, useEffect } from "react";
import Loading_spinner from "../UI/Loading_spinner";
import style from "./Cocktail_Info.module.scss";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { store } from "../../../store/store";
import { difficulty_img_url_converter } from "../../pages/api/utility/difficulty_img_url_converter";

import { detail_props } from "../../type/cocktailTypes";

type CocktailInfoProps = {
  modifyCommentCnt: boolean;
};
const Cocktail_info = ({ modifyCommentCnt }: CocktailInfoProps) => {
  const router = useRouter();
  const atk = store.getState().user.accessToken;
  // console.log("info : ", atk)
  // 현재 페이지의 칵테일 정보를 저장함 (detail)
  const [detail, setDetail] = useState<detail_props>();
  const [isLiked, setIsLiked] = useState<boolean>();
  const [isBookmarked, setIsBookmarked] = useState<boolean>();
  const [isLikedBtn, setIsLikedBtn] = useState<string>();
  const [isBookmarkedBtn, setIsBookmarkedBtn] = useState<string>();
  const [difficultyImg, setDifficultyImg] = useState<string>();

  const checkLogin = () => {
    Swal.fire({
      title: "로그인이 필요한 서비스입니다.",
      html: "로그인 하시겠습니까?.",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "확인",
      denyButtonText: `취소`,
    }).then((confirm) => {
      if (confirm.isConfirmed) {
        //확인 버튼이 눌렸을때만 로그인창으로이동해
        router.push("https://j8b208.p.ssafy.io/api/oauth/kakao/login");
      }
    });
  };

  useEffect(() => {
    const cocktail_num = parseInt(router.query.id as string);

    axios
      .get(`https://j8b208.p.ssafy.io/api/cocktails/${cocktail_num}`, {
        headers: {
          Authorization: atk,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        // console.log(response.data.data)
        const result = response.data.data;
        setDetail(result);
        setIsLiked(result.likes_checker);
        setIsBookmarked(result.bookmark_checker);
        setDifficultyImg(
          difficulty_img_url_converter(result.cocktail_difficulty)
        );
      });
  }, [modifyCommentCnt, isLiked, isBookmarked]);

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

  const likes_check_handler = () => {
    if (atk.length === 0) {
      checkLogin();
    } else {
      console.log("isLiked : ", isLiked);
      axios
        .post(
          `/api/cocktails/likes`,
          {
            cocktail_id: detail.cocktail_id,
          },
          {
            headers: {
              Authorization: atk,
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          console.log(response);
          setIsLiked(!isLiked);
        });
    }
  };

  const bookmark_check_handler = () => {
    if (atk.length === 0) {
      checkLogin();
    } else {
      axios
        .post(
          `https://j8b208.p.ssafy.io/api/cocktails/bookmarks`,
          {
            cocktail_id: detail.cocktail_id,
          },
          {
            headers: {
              Authorization: atk,
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          setIsBookmarked(!isBookmarked);
          console.log(response);
        });
    }
  };

  if (detail) {
    return (
      <div className={style.detail_cocktail_info}>
        {/* 칵테일 이미지 영역 */}
        <div className={style.detail_cocktail_img_div}>
          <img
            className={style.detail_cocktail_img}
            src={detail.cocktail_img}
            alt="image"
          />
        </div>
        {/* 칵테일 정보 영역 */}
        <div className={style.detail_cocktail_info_div}>
          {/* 헤더 영역*/}
          <div className={style.detail_cocktail_info_header}>
            <div className={style.detail_cocktail_info_header_top}>
              <div className={style.detail_cocktail_title}>
                {detail.cocktail_name_ko}
                <br />({detail.cocktail_name_en})
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
                  {detail.cocktail_rating}
                </div>
              </div>

              <div className={style.detail_cocktail_header_element}>
                <img src="/assets/icons/LikeCheckedICON.png" alt="" />
                <div className={style.detail_cocktail_header_element_count}>
                  {detail.cocktail_likes}
                </div>
              </div>

              <div className={style.detail_cocktail_header_element}>
                <img src="/assets/icons/CommentICON.png" alt="" />
                <div className={style.detail_cocktail_header_element_count}>
                  {detail.cocktail_comments}
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
              {detail.garnish?.map((v) => (
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
                &nbsp;{detail.glass}&nbsp;
              </div>
              <div className={style.detail_cocktail_ingredient_base}>
                &nbsp; {detail.base} &nbsp;
              </div>
            </div>
            <div className={style.detail_cocktail_ingredient_element}>
              {detail.ingredient?.map((key) => (
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
              {detail.recipe?.map((key) => (
                <div>
                  {key.recipe_num} : {key.recipe_content}
                </div>
              ))}
            </div>
          </div>
          {/* 소개 영역*/}
          <div className={style.detail_cocktail_recipe_content_textarea}>
            <div className={style.detail_cocktail_recipe_content_title}>
              소개
            </div>
            <div className={style.detail_cocktail_recipe_content_message}>
              &nbsp; {detail.cocktail_content}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading_spinner />;
  }
};

export default Cocktail_info;
