import { useEffect,useState } from "react";
import Header from "../../components/Header/Header";
import CocktailPreference from "../../components/UserAnalysis/CocktailPreference";
import ColorPreference from "../../components/UserAnalysis/ColorPreference";
import IngredientPreference from "../../components/UserAnalysis/IngredientPreference";
import UserPreference from "../../components/UserAnalysis/UserPreference";
import style from './index.module.scss';
import { cocktailBase } from "../../type/cocktailPreference";
import { cocktailBase_props } from "../../type/cocktailRating";
import { cocktail_recommend } from "../../type/cocktailTypes";
import { userAnalysis_cocktailBase } from "../api/user-analysis/user-analysis_api";
import { GetServerSideProps } from "next";
import axios from "axios";
import { store } from "../../../store/store";
import { AnyAaaaRecord } from "dns";
import { wrapper } from "../../../store";

export type cocktail_props_analysis = {
  cocktailList: cocktailBase[],
  cocktailRating: cocktailBase_props,
  cocktailRecordList: cocktail_recommend[],
}

const userAnalisys = ({ ctList }:any) => {

  const [cocktailList_props, setCocktailList_props] = useState<cocktailBase[]>(null);
  useEffect(() => {
    setCocktailList_props(ctList);
    console.log(ctList,"냥냥펀ㄴ치")
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
    cocktailList:cocktailList_props,
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
        base_rest: 12
        },
        {
        rating_score: 2,
        base_jin: 11,
        base_rum: 1,
        base_vodka: 19,
        base_whiskey: 1,
        base_rest: 15
        },
        {
        rating_score: 3,
        base_jin: 5,
        base_rum: 9,
        base_vodka: 10,
        base_whiskey: 4,
        base_rest: 7
        },
        {
        rating_score: 4,
        base_jin: 10,
        base_rum: 3,
        base_vodka: 2,
        base_whiskey: 1,
        base_rest: 12
        },
        {
        rating_score: 5,
        base_jin: 2,
        base_rum: 19,
        base_vodka: 20,
        base_whiskey: 4,
        base_rest: 1
      }
     ]
    },
    cocktailRecordList: [
      {
	        "cocktail_id":1,
					"cocktail_name_ko": "오렌지 블로썸",
	        "cocktail_img": "/assets/image/cocktail.png",
      },
      {
	        "cocktail_id":2,
					"cocktail_name_ko": "킹렌지 블로썸",
	        "cocktail_img": "/assets/image/cocktail.png",
      },
      {
	        "cocktail_id":3,
					"cocktail_name_ko": "오렌지 블로썸",
	        "cocktail_img": "/assets/image/cocktail.png",
      },
      {
	        "cocktail_id":4,
					"cocktail_name_ko": "오렌지 블로썸",
	        "cocktail_img": "/assets/image/cocktail.png",
      },
      {
	        "cocktail_id":5,
					"cocktail_name_ko": "오렌지 블로썸",
	        "cocktail_img": "/assets/image/cocktail.png",
      },
      {
	        "cocktail_id":6,
					"cocktail_name_ko": "오렌지 블로썸",
	        "cocktail_img": "/assets/image/cocktail.png",
      },
      {
	        "cocktail_id":7,
					"cocktail_name_ko": "오렌지 블로썸",
	        "cocktail_img": "/assets/image/cocktail.png",
      },
      {
	        "cocktail_id":8,
					"cocktail_name_ko": "오렌지 블로썸",
	        "cocktail_img": "/assets/image/cocktail.png",
      },
      {
	        "cocktail_id":9,
					"cocktail_name_ko": "오렌지 블로썸",
	        "cocktail_img": "/assets/image/cocktail.png",
      },
    ]
  }

  return (
    <>
      <Header />
      <div className={ style.userAnalisys}>
        <div className={ style.userAnalisys_logo}>
          <h1>MASIDA</h1>
          <p>칵테일을 맛있게 마시다.</p>
        </div>
        <div className={ style.userAnalisys_pdf}> 
          <img src='assets/icons/Vector.png'></img>
          <span>PDF로 내보내기</span>
        </div>
      </div>
      <CocktailPreference {...cocktail_props}/>
      <ColorPreference />
      <IngredientPreference />
      <UserPreference/>
    </>
   )
};

export default userAnalisys;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async () => { 
      let atk = store.getState().user.accessToken;
      if (!atk) {
        atk = "";
    }
    console.log("Atk : ", atk);

    try {
      const response1 = await axios.get("https://j8b208.p.ssafy.io/api/my-analysis/cocktail-base", {
        headers: {
          // Authorization: atk,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = response1.data.data;
      console.log("몰라 시발", data);
      return {
        props: {
          ctList: data,
        }
      };
  } catch (err) {
      console.log(err);
      return {
        props: undefined,
      };
    }
  }
);
