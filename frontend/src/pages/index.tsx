import axios from "axios";
import { NextPageContext } from "next";
import { useState, useEffect } from "react";
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
  const [isLoading, setIstLoading] = useState(false);
  ResetCategory();
  const cocktail_props: landing_props = {
    random: random,
    likeList: likeList,
  };

  return (
    <>
      <Main_banner />
      <Main_cocktail {...cocktail_props} />
      <Main_search />
      <Main_manual />
      <Footer />
    </>
  );
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

    return {
      random,
      likeList,
    };
  } catch (err) {
    return {
      random: null,
      likeList: null,
    };
  }
};
