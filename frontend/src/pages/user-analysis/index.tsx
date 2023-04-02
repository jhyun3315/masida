import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CocktailPreference from "../../components/UserAnalysis/CocktailPreference";
import ColorPreference from "../../components/UserAnalysis/ColorPreference";
import IngredientPreference from "../../components/UserAnalysis/IngredientPreference";
import UserPreference from "../../components/UserAnalysis/UserPreference";
<<<<<<< HEAD
import style from './index.module.scss';
import { cocktailAgeGender, cocktailBase, cocktailColor, cocktailIngredient } from "../../type/cocktailPreference";
import { cocktailBase_props, cocktailColor_props } from "../../type/cocktailRating";
import { cocktail_recommend } from "../../type/cocktailTypes";
import { userAnalysis_cocktailBase,user_cocktail_recommend,user_starRating_cocktailBase,userAnalysis_cocktailColor,user_starRating_cocktailColor,user_cocktail_color_recommend, userAnalysis_cocktailIngredient,user_cocktail_ingredient_recommend,userAnalysis_cocktailAgeGender,user_cocktail_age_gender_recommend } from "../api/user-analysis/user-analysis_api";

export type cocktail_props_analysis = {
  isLoading_props1: boolean,
  isLoading_props2:boolean,
  cocktailList: cocktailBase[],
  cocktailRating: cocktailBase_props,
  cocktailRecordList: cocktail_recommend[],
}

export type cocktail_props_analysis_color = {
  isLoading_props3: boolean,
  isLoading_props4:boolean,
  cocktailList: cocktailColor[],
  cocktailRating: cocktailColor_props,
  cocktailRecordList: cocktail_recommend[],
}

export type cocktail_props_analysis_ingredient = {
  isLoading_props5: boolean,
  isLoading_props6:boolean,
  cocktailList: cocktailIngredient[],
  cocktailRating: cocktailColor_props,
  cocktailRecordList: cocktail_recommend[],
}

export type cocktail_props_analysis_age_gender = {
  isLoading_props7: boolean,
  isLoading_props8: boolean,
  cocktailList: cocktailAgeGender[],
  cocktailRecordList:cocktail_recommend[]
}


const userAnalisys = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [isLoading4, setIsLoading4] = useState(false);
  const [isLoading5, setIsLoading5] = useState(false);
  const [isLoading6, setIsLoading6] = useState(false);
  const [isLoading7, setIsLoading7] = useState(false);
  const [isLoading8, setIsLoading8] = useState(false);


  const [cocktailList_props, setCocktailList_props] = useState<cocktailBase[]>([]);
  const [cocktailStarRating_props, setCocktailStarRating_props] = useState<cocktailBase_props>(null);
  const [cocktailRecommendList_props, setcocktailRecommendList_props] = useState<cocktail_recommend[]>([]);

  const [cocktailList_color_props, setCocktailList_color_props] = useState<cocktailColor[]>([]);
  const [cocktailStarRating_color_props, setcocktailStarRating_color_props] = useState<cocktailColor_props>(null);
  const [cocktailRecommendList_color_props, setcocktailRecommendList_color_props] = useState<cocktail_recommend[]>([]);

  const [cocktailList_ingredient_props, setCocktailList_ingredient_props] = useState<cocktailIngredient[]>([]);
  const [cocktailStarRating_ingredient_props, setcocktailStarRating_ingredient_props] = useState<cocktailColor_props>(null);
  const [cocktailRecommendList_ingredient_props, setcocktailRecommendList_ingredient_props] = useState<cocktail_recommend[]>([]);

  const [cocktailList_age_gender_props, setCocktailList_age_gender_props] = useState<cocktailAgeGender[]>([]);
  const [cocktailRecommendList_age_gender_props, setcocktailRecommendList_age_gender_props] = useState<cocktail_recommend[]>([]);



  useEffect(() => {
    userAnalysis_cocktailBase().then((response) => {
      setIsLoading(true);
      setCocktailList_props(response);
    });
    user_starRating_cocktailBase().then((response) => {
      setIsLoading2(true);
      setCocktailStarRating_props(response);
    })
    user_cocktail_recommend().then((response) => { 
      setcocktailRecommendList_props(response);
    })
    userAnalysis_cocktailColor().then((response) => { 
      setIsLoading3(true);
      setCocktailList_color_props(response);
    })
    user_starRating_cocktailColor().then((response) => {
      setIsLoading4(true);
      setcocktailStarRating_color_props(response);
    })
    user_cocktail_color_recommend().then((response) => { 
      setcocktailRecommendList_color_props(response);
    })
    userAnalysis_cocktailIngredient().then((response) => {
      setIsLoading5(true);
      setCocktailList_ingredient_props(response);
    })
    user_cocktail_ingredient_recommend().then((response) => { 
      setcocktailRecommendList_ingredient_props(response);
    })
    userAnalysis_cocktailAgeGender().then((response) => {
      setIsLoading7(true);
      setCocktailList_age_gender_props(response);
    })
    user_cocktail_age_gender_recommend().then((response) => { 
      setcocktailRecommendList_age_gender_props(response);
    })

  }, []);

  const cocktail_props: cocktail_props_analysis = {
    isLoading_props1: isLoading,
    isLoading_props2:isLoading2,
    cocktailList:cocktailList_props,
    cocktailRating: cocktailStarRating_props,
    cocktailRecordList: cocktailRecommendList_props
  }
=======
import style from "./index.module.scss";
import { cocktailBase } from "../../type/cocktailPreference";
import { cocktailBase_props } from "../../type/cocktailRating";
import { cocktail_recommend } from "../../type/cocktailTypes";
import { userAnalysis_cocktailBase } from "../api/user-analysis/user-analysis_api";
import { GetServerSideProps } from "next";
import axios from "axios";
import { store } from "../../../store/store";
import { AnyAaaaRecord } from "dns";
import { wrapper } from "../../../store";
import ResetCategory from "../../components/UI/ResetCategory";

export type cocktail_props_analysis = {
  cocktailList: cocktailBase[];
  cocktailRating: cocktailBase_props;
  cocktailRecordList: cocktail_recommend[];
};

const userAnalisys = ({ ctList }: any) => {
  ResetCategory();
  const [cocktailList_props, setCocktailList_props] =
    useState<cocktailBase[]>(null);
  useEffect(() => {
    setCocktailList_props(ctList);
    console.log(ctList, "냥냥펀ㄴ치");
  }, [ctList]);

  const cocktail_props: cocktail_props_analysis = {
    // cocktailList: [
    // {
    //   base_name: "진",
    //   base_count: 23,
    //   base_ratio: 56
    // },
    // {
    //   base_name: "럼",
    // 	base_count : 12,
    //   base_ratio: 23
    // },
    // {
    //   base_name: "보드카",
    //   base_count: 6,
    //   base_ratio: 12,
    // },
    // {
    //   base_name: "데킬라",
    // 	base_count : 3,
    //   base_ratio: 6
    // },
    // {
    //   base_name: "꼬냑",
    // 	base_count : 1,
    //   base_ratio: 3
    // }
    // ],
    cocktailList: cocktailList_props,
    cocktailRating: {
      rating_average: 3,
      rating_count: "79",
      rating_max: 4,
      rating_max_base: "진",
      data: [
        {
          rating_score: 1,
          base_jin: 4,
          base_rum: 1,
          base_vodka: 8,
          base_whiskey: 19,
          base_rest: 12,
        },
        {
          rating_score: 2,
          base_jin: 11,
          base_rum: 1,
          base_vodka: 19,
          base_whiskey: 1,
          base_rest: 15,
        },
        {
          rating_score: 3,
          base_jin: 5,
          base_rum: 9,
          base_vodka: 10,
          base_whiskey: 4,
          base_rest: 7,
        },
        {
          rating_score: 4,
          base_jin: 10,
          base_rum: 3,
          base_vodka: 2,
          base_whiskey: 1,
          base_rest: 12,
        },
        {
          rating_score: 5,
          base_jin: 2,
          base_rum: 19,
          base_vodka: 20,
          base_whiskey: 4,
          base_rest: 1,
        },
      ],
    },
    cocktailRecordList: [
      {
        cocktail_id: 1,
        cocktail_name_ko: "오렌지 블로썸",
        cocktail_img: "/assets/image/cocktail.png",
      },
      {
        cocktail_id: 2,
        cocktail_name_ko: "킹렌지 블로썸",
        cocktail_img: "/assets/image/cocktail.png",
      },
      {
        cocktail_id: 3,
        cocktail_name_ko: "오렌지 블로썸",
        cocktail_img: "/assets/image/cocktail.png",
      },
      {
        cocktail_id: 4,
        cocktail_name_ko: "오렌지 블로썸",
        cocktail_img: "/assets/image/cocktail.png",
      },
      {
        cocktail_id: 5,
        cocktail_name_ko: "오렌지 블로썸",
        cocktail_img: "/assets/image/cocktail.png",
      },
      {
        cocktail_id: 6,
        cocktail_name_ko: "오렌지 블로썸",
        cocktail_img: "/assets/image/cocktail.png",
      },
      {
        cocktail_id: 7,
        cocktail_name_ko: "오렌지 블로썸",
        cocktail_img: "/assets/image/cocktail.png",
      },
      {
        cocktail_id: 8,
        cocktail_name_ko: "오렌지 블로썸",
        cocktail_img: "/assets/image/cocktail.png",
      },
      {
        cocktail_id: 9,
        cocktail_name_ko: "오렌지 블로썸",
        cocktail_img: "/assets/image/cocktail.png",
      },
    ],
  };
>>>>>>> 3821500253f7be0eb91aa972b0e7ce033ab83a84

  const cocktail_color_props: cocktail_props_analysis_color = {
    isLoading_props3: isLoading3,
    isLoading_props4:isLoading4,
    cocktailList:cocktailList_color_props,
    cocktailRating: cocktailStarRating_color_props,
    cocktailRecordList: cocktailRecommendList_color_props
  }

  const cocktail_ingredient_props: cocktail_props_analysis_ingredient = {
    isLoading_props5: isLoading5,
    isLoading_props6:isLoading6,
    cocktailList:cocktailList_ingredient_props,
    cocktailRating: cocktailStarRating_color_props,
    cocktailRecordList: cocktailRecommendList_ingredient_props
  }

  const cocktail_age_gender_props: cocktail_props_analysis_age_gender = {
    isLoading_props7: isLoading7,
    isLoading_props8:isLoading8,
    cocktailList:cocktailList_age_gender_props,
    cocktailRecordList: cocktailRecommendList_age_gender_props
  }

  

  return (
    <>
      <Header />
      <div className={style.userAnalisys}>
        <div className={style.userAnalisys_logo}>
          <h1>MASIDA</h1>
          <p>칵테일을 맛있게 마시다.</p>
        </div>
        <div className={style.userAnalisys_pdf}>
          <img src="assets/icons/Vector.png"></img>
          <span>PDF로 내보내기</span>
        </div>
      </div>
<<<<<<< HEAD
      <CocktailPreference {...cocktail_props}/>
      <ColorPreference {...cocktail_color_props} />
      <IngredientPreference {...cocktail_ingredient_props} />
      <UserPreference {...cocktail_age_gender_props} />
=======
      <CocktailPreference {...cocktail_props} />
      <ColorPreference />
      <IngredientPreference />
      <UserPreference />
>>>>>>> 3821500253f7be0eb91aa972b0e7ce033ab83a84
    </>
  );
};

export default userAnalisys;

<<<<<<< HEAD
=======
// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async () => {
//       let atk = store.getState().user.accessToken;
//       if (!atk) {
//         atk = "";
//     }
//     console.log("Atk : ", atk);

//     try {
//       const response1 = await axios.get("https://j8b208.p.ssafy.io/api/my-analysis/cocktail-base", {
//         headers: {
//           // Authorization: atk,
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//       });
//       const data = response1.data.data;
//       console.log("몰라 시발", data);
//       return {
//         props: {
//           ctList: data,
//         }
//       };
//   } catch (err) {
//       console.log(err);
//       return {
//         props: undefined,
//       };
//     }
//   }
// );
>>>>>>> 3821500253f7be0eb91aa972b0e7ce033ab83a84
