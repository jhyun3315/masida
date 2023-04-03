import axios from "axios";
import { NextPageContext } from "next";

import Main_banner from "../components/Main/Main_banner";
import Main_cocktail from "../components/Main/Main_cocktail";
import Main_search from "../components/Main/Main_search";
import Main_manual from "../components/Main/Main_manual";
import Footer from "../components/Footer/Footer";

import { randomType, likeType } from "../type/cocktailTypes";

export interface landing_props {
  random: randomType;
  likeList: likeType[];
}
import ResetCategory from "../components/UI/ResetCategory";

const landing = ({ random, likeList }: landing_props) => {
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
