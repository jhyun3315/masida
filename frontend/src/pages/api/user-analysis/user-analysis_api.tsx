import axios from "axios";
import { store } from "../../../../store/store";
import { cocktailBase } from "../../../type/cocktailPreference";

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
      // console.log("사용자의 칵테일 취향 Top 5를 보여줘", response.data.data);
      value = response.data.data;
    })
    .catch((error) => { console.log(error) })
  
  return value;
}