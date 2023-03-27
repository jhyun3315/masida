// import { Inter } from "next/font/google";

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

// const inter = Inter({ subsets: ["latin"] });

export type cocktail_props = {
  random_type: randomType;
  like_list: likeType[];
};

export default function Home(): JSX.Element {
  const [randomCocktail, setRandomCocktail] = useState<randomType>();
  const [likeList, setLikeList] = useState<likeType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    get_cocktails_random().then((response) => {
      setRandomCocktail(response.value);
    });
    get_cocktails_likes_top().then((response) => {
      console.log(response.value);
      setLikeList(response.value);
    });
    setIsLoading(true);
  }, []);

  const cocktail_props: cocktail_props = {
    random_type: randomCocktail,

    like_list: likeList,
  };

  // if (isLoading) {
    console.log("hello")
    return (
      <>
        <Main_banner />
        <Main_cocktail {...cocktail_props} />
        <Main_search />
        <Main_manual />
        <Footer />
      </>
    );
  // } else {
  //   return <></>;
  // }
}
