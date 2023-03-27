import axios from "axios";
import { GetServerSideProps } from "next";

import Main_banner from "../components/Main/Main_banner";
import Main_cocktail from "../components/Main/Main_cocktail";
import Main_search from "../components/Main/Main_search";
import Main_manual from "../components/Main/Main_manual";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";

import {
  get_cocktails_likes_top,
  get_cocktails_random,
} from "./api/cocktails/cocktail_api";

import { randomType, likeType } from "../type/cocktailTypes";


export interface landing_props {
  random_cocktail : randomType;
  like_list : likeType[];
}

const landing = ({random_cocktail, like_list} :landing_props) => {
  const [randomCocktail, setRandomCocktail] = useState<randomType>();
  const [likeList, setLikeList] = useState<likeType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setRandomCocktail(random_cocktail)
    setLikeList(like_list)
    setIsLoading(true);
  }, []);

  const cocktail_props: landing_props = {
    random_cocktail: randomCocktail,
    like_list: likeList,
  };

  if (isLoading) {
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
    return (
      <>
        <div>불러오는 중입니다.</div>
      </>
    );
  }
};

export default landing;

export const getServerSideProps: GetServerSideProps = async () => {
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

    const random = response_random.data.data;
    const likeList = response_likeList.data.data;

    return {
      props: {
        random: random,
        likeList: likeList,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};
