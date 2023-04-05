import axios from "axios";
import { userType } from "../../../type/userTypes";
import { getAuthHeader } from "../utility/axios";
import { useDispatch } from "react-redux";
import { logout } from "../../../../store/modules/user";
import { useRouter } from "next/router";

axios.defaults.baseURL = "https://j8b208.p.ssafy.io/";

export const get_user_info = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: getAuthHeader()?.Authorization,
    },
  };
  let url = "/api/oauth/users";
  let value: userType = null;
  await axios
    .get(url, config)
    .then((response) => {
      value = response.data.data;
    })
    .catch((err) => {
      console.log("Current User Info Error");
    });

  return { value };
};

export const logout_user =  async () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const config = {
    headers: {
      Authorization: getAuthHeader()?.Authorization,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
     }
  }
  let url = "/api/oauth/kakao/logout"
  await axios
    .get(url, config)
    .then(function () {
        dispatch(logout());
        router.reload();
      })
    .catch((err) => {
      console.log("Current User Info Error");
    });
}

