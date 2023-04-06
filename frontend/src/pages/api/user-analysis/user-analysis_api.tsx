import axios from "axios";
import { store } from "../../../../store/store";
import { cocktailAgeGender, cocktailBase,cocktailColor, cocktailIngredient } from "../../../type/cocktailPreference";
import { cocktailBase_props,cocktailColor_props,cocktailIngredient_props } from "../../../type/cocktailRating";
import { cocktail_recommend } from "../../../type/cocktailTypes";

axios.defaults.baseURL = "https://j8b208.p.ssafy.io/";

// 취향분석(가장 선호하는 Base Top 5)
export const userAnalysis_cocktailBase = async() => { 
  let url = "api/my-analysis/cocktail-base";
  let value: cocktailBase[] = null;

  const getAccessToken = store.getState().user.accessToken;

  const config = {
    headers: {
     "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: getAccessToken,
    }
  }
  await axios
    .get(url, config)
    .then((response) => {
      value = response.data.data;
    })
    .catch((error) => { console.log(error) })
  
  return value;
}

// 취향분석(가장 선호하는 색상 top 5)
export const userAnalysis_cocktailColor = async() => { 
  let url = "/api/my-analysis/cocktail-color";
  let value: cocktailColor[] = null;

  const getAccessToken = store.getState().user.accessToken;

  const config = {
    headers: {
     "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: getAccessToken,
    }
  }
  await axios
    .get(url, config)
    .then((response) => {
      value = response.data.data;
    })
    .catch((error) => { console.log(error) })
  
  return value;
}

// 취향분석(가장 선호하는 재료 top 5)
export const userAnalysis_cocktailIngredient = async() => { 
  let url = "/api/my-analysis/cocktail-ingredient";
  let value: cocktailIngredient[] = null;

  const getAccessToken = store.getState().user.accessToken;

  const config = {
    headers: {
     "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: getAccessToken,
    }
  }
  await axios
    .get(url, config)
    .then((response) => {
      value = response.data.data;
    })
    .catch((error) => { console.log(error) })
  
  return value;
}

// 취향분석(비슷한 나이&성별대에서 선호하는 칵테일 top 5)
export const userAnalysis_cocktailAgeGender = async() => { 
  let url = "/api/my-analysis/cocktail-age-gender";
  let value: cocktailAgeGender[] = null;

  const getAccessToken = store.getState().user.accessToken;

  const config = {
    headers: {
     "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: getAccessToken,
    }
  }
  await axios
    .get(url, config)
    .then((response) => {
      value = response.data.data;
    })
    .catch((error) => { console.log(error) })
  
  return value;
}


// 취향 분석(base)에서 별점의 분포도
export const user_starRating_cocktailBase = async() => { 
  let url = "/api/my-analysis/base-rating";
  let value: cocktailBase_props = null;

  const getAccessToken = store.getState().user.accessToken;

  const config = {
    headers: {
     "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: getAccessToken,
    }
  }
  await axios
    .get(url, config)
    .then((response) => {
      value = response.data;
    })
    .catch((error) => { console.log(error) })
  
  return value;
}

// 취향분석(색상)에서 별점의 분포도
export const user_starRating_cocktailColor = async() => { 
  let url = "/api/my-analysis/color-rating";
  let value: cocktailColor_props = null;

  const getAccessToken = store.getState().user.accessToken;

  const config = {
    headers: {
     "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: getAccessToken,
    }
  }
  await axios
    .get(url, config)
    .then((response) => {
      value = response.data;
    })
    .catch((error) => { console.log(error) })
  
  return value;
}

// 취향분석(재료)에서 별점의 분포도
export const user_starRating_cocktailIngredient = async() => { 
  let url = "/api/my-analysis/ingredient-rating";
  let value: cocktailIngredient_props = null;

  const getAccessToken = store.getState().user.accessToken;

  const config = {
    headers: {
     "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: getAccessToken,
    }
  }
  await axios
    .get(url, config)
    .then((response) => {
      value = response.data;
      console.log("별점 분포도", value);
    })
    .catch((error) => { console.log(error) })
  
  return value;
}


// 사용자의 base 취향에 따른 칵테일 추천 (상위 9개)
export const user_cocktail_recommend = async() => { 
  let url = "/api/my-analysis/recommend/base";
  let value: cocktail_recommend[] = null;

  const getAccessToken = store.getState().user.accessToken;

  const config = {
    headers: {
     "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: getAccessToken,
    }
  }
  await axios
    .get(url, config)
    .then((response) => {
      value = response.data.data;
      console.log("==============================================")
      console.log(response)
      console.log(getAccessToken)
    })
    .catch((error) => { console.log(error) })
  
  return value;
}

// 사용자의 색상 취향에 따른 칵테일 추천 (상위 9개)
export const user_cocktail_color_recommend = async() => { 
  let url = "/api/my-analysis/recommend/color";
  let value: cocktail_recommend[] = null;

  const getAccessToken = store.getState().user.accessToken;

  const config = {
    headers: {
     "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: getAccessToken,
    }
  }
  await axios
    .get(url, config)
    .then((response) => {
      value = response.data.data;
    })
    .catch((error) => { console.log(error) })
  
  return value;
}

// 사용자의 재료 취향에 따른 칵테일 추천 (상위 9개)
export const user_cocktail_ingredient_recommend = async() => { 
  let url = "/api/my-analysis/recommend/ingredient";
  let value: cocktail_recommend[] = null;

  const getAccessToken = store.getState().user.accessToken;

  const config = {
    headers: {
     "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: getAccessToken,
    }
  }
  console.log(getAccessToken)
  await axios
    .get(url, config)
    .then((response) => {
      value = response.data.data;
    })
    .catch((error) => { console.log(error) })
  
  return value;
}

// 사용자와 비슷한 나이&성별의 사용자가 선호하는 칵테일 추천 상위 9개
export const user_cocktail_age_gender_recommend = async() => { 
  let url = "/api/my-analysis/recommend/age-gender";
  let value: cocktail_recommend[] = null;

  const getAccessToken = store.getState().user.accessToken;

  const config = {
    headers: {
     "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: getAccessToken,
    }
  }
  await axios
    .get(url, config)
    .then((response) => {
      value = response.data.data;
    })
    .catch((error) => { console.log(error) })
  
  return value;
}
