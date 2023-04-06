import axios from "axios";
import { cocktail_world } from "../../../type/cocktailWord";

axios.defaults.baseURL = "https://j8b208.p.ssafy.io/";


// 칵테일 월드 데이터 가져오기
export const get_cocktail_word_data = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  let url = "/api/analysis/word-cloud";
  let value: cocktail_world = null;
  await axios
    .get(url, config)
    .then((response) => {
      value = response.data.data;
    })
    .catch((err) => {
      console.log("Current User Info Error");
    });

  return value;
};