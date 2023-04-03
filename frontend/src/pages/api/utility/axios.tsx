import axios from "axios";
import { store } from "../../../../store/store";

export const getAuthHeader = () => {
  const accessToken = store.getState().user.accessToken;
  if (accessToken) {
    const headers = {
      Authorization: `${accessToken}`,
    };
    return headers;
  } else return null;
};

const axiosInstance = axios.create({
  baseURL: "http://j8b208.p.ssafy.io:8080/",
  // "Content-Type": "application/json",
});
