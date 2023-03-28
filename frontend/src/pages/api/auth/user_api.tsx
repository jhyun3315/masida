import axios from "axios";
import { userType } from "../../../type/userTypes";
import { getAuthHeader } from "../utility/axios";

axios.defaults.baseURL = "https://j8b208.p.ssafy.io/";

export const get_user_info = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: getAuthHeader().Authorization,
    },
  };
  let url = "/api/oauth/users";
  let value: userType = null;
  await axios
    .get(url, config)
    .then((response) => {
      console.log("get_cocktails_detail : ", response);
      value = response.data.data;
    })
    .catch((err) => {
      console.log("get_cocktails_detail error ocurred");
    });

  return { value };
};
