import axios from "axios";
import {
  detail_props,
  randomType,
  likeType,
} from "../../../type/cocktailTypes";

import { searchIngredientType } from "../../../type/ingredientTypes";

/**
 * @author kim jihwan
 *
 * @copyright 2023
 */

// 엑시오스 기본 세팅
axios.defaults.baseURL = "https://j8b208.p.ssafy.io/";
// axios.defaults.withCredentials = true;

/**
 * 칵테일 상세 조회
 */
export const get_cocktails_detail = async (cocktail_id: number) => {
  let url = `/api/cocktails/${cocktail_id}`;
  let value: detail_props = null;
  await axios
    .get(url)
    .then((response) => {
      console.log("get_cocktails_detail : ", response);
      value = response.data.data;
    })
    .catch((err) => {
      console.log("get_cocktails_detail error ocurred");
    });

  return { value };
};

/**
 * 칵테일 랜점 추첨 1개
 */
export const get_cocktails_random = async () => {
  let url = `/api/cocktails/random`;
  let value: randomType = null;
  await axios
    .get(url)
    .then((response) => {
      // console.log(response.data.data);
      console.log("get_cocktails_random : ", response);

      value = response.data.data;
    })
    .catch((err) => {
      console.log("get_cocktails_random error ocurred");
    });

  return { value };
};

/**
 * 칵테일 좋아요 상위 10개
 */
export const get_cocktails_likes_top = async () => {
  let url = `/api/cocktails/likes-top`;
  let value: likeType[] = null;
  await axios
    .get(url)
    .then((response) => {
      // console.log(response);
      console.log("get_cocktails_likes_top : ", response);

      value = response.data.data;
    })
    .catch((err) => {
      console.log("get_cocktails_likes_top error ocurred");
    });

  return { value };
};

// export default {get_cocktails_detail};

/**
 * 칵테일 재료 목록 반환
 */
export const get_cocktails_ingredients = async () => {
  let url = `/api/cocktails/ingredients`;
  let value: searchIngredientType[] = null;
  await axios
    .get(url)
    .then((response) => {
      value = response.data.data;
    })
    .catch((err) => {
      console.log("재료가 없습니다. 다시 입력해주세요.", err);
    });
  return value;
};
