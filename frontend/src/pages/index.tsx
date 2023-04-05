import axios from "axios";
import { NextPageContext } from "next";
import {useState, useEffect} from "react"
import Main_banner from "../components/Main/Main_banner";
import Main_cocktail from "../components/Main/Main_cocktail";
import Main_search from "../components/Main/Main_search";
import Main_manual from "../components/Main/Main_manual";
import Footer from "../components/Footer/Footer";
import Loading_spinner from "../components/UI/Loading_spinner";

import { randomType, likeType } from "../type/cocktailTypes";
import { useDispatch } from "react-redux";
import { logout } from "../../store/modules/user";

import { store } from "../../store/store";
export interface landing_props {
  random: randomType;
  likeList: likeType[];
}
import ResetCategory from "../components/UI/ResetCategory";

const landing = ({ random, likeList }: landing_props) => {
  const dispatch = useDispatch();
  const [isLoading, setIstLoading] =useState(false);
  ResetCategory();
  const cocktail_props: landing_props = {
    random: random,
    likeList: likeList,
  };

  // Landing page로 왔을 때, 현재 localStorage에 저장된 atk의 유효성을 검사
  // 무효한 경우 dispatch(logout())을 활용해서 atk 초기화
  useEffect(() => {
    axios
      .get("https://j8b208.p.ssafy.io/api/oauth/users", {
        headers: {
          Authorization: store.getState().user.accessToken,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status !== 200) {
          dispatch(logout());
        }
        setIstLoading(true)
      });

  },  [])
  if(isLoading){
    return (
      <>
        <Main_banner />
        <Main_cocktail {...cocktail_props} />
        <Main_search />
        <Main_manual />
        <Footer />
      </>
    );
  } else {
    return <Loading_spinner />
  }
};

export default landing;

landing.getInitialProps = async (ctx: NextPageContext) => {
  try {
    const response_random = await axios.get(
      `https://j8b208.p.ssafy.io/api/cocktails/random`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const response_likeList = await axios.get(
      `https://j8b208.p.ssafy.io/api/cocktails/likes-top`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const random: randomType = response_random.data.data;
    const likeList: likeType[] = response_likeList.data.data;

    console.log("성공");
    console.log(random);

    return {
      random,
      likeList,
    };
  } catch (err) {
    console.log("random, like list를 불러오지 못함");
    return {
      random: null,
      likeList: null,
    };
  }
};
