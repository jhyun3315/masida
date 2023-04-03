import axios from "axios";
import { commentType } from "../../../type/commentTypes";

axios.defaults.url = "https://j8b208.p.ssafy.io/";

export const get_worldcup_final_comments = async (cocktail_id: string) => { 
  
  let url = `/api/comments/${cocktail_id}`;
  let value: commentType[] = null;
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  };

  await axios
    .get(url,config)
    .then((response) => {
      value = response.data.data;
    }).catch((error) => { console.log("칵테일 댓글 리스트를 불러오지 못했습니다.") });
  
  return value;

}

