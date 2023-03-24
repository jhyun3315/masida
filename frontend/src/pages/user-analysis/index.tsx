import Header from "../../components/Header/Header";
import CocktailPreference from "../../components/UserAnalysis/CocktailPreference";
import ColorPreference from "../../components/UserAnalysis/ColorPreference";
import IngredientPreference from "../../components/UserAnalysis/IngredientPreference";
import UserPreference from "../../components/UserAnalysis/UserPreference";
import style from './index.module.scss';
import { cocktailBase } from "../../type/cocktailPreference";
import { cocktailBase_props } from "../../type/cocktailRating";

export type cocktail_props_analysis = {
  cocktailList: cocktailBase[],
  cocktailRating: cocktailBase_props
}


const userAnalisys = () => {

  const cocktail_props: cocktail_props_analysis = {
    cocktailList: [
    {
      base_name: "진",
      base_count: 23,
      base_ratio: 56
    },
    {
      base_name: "럼",
			base_count : 12,
	    base_ratio: 23
    },
    {
      base_name: "보드카",
      base_count: 6,
      base_ratio: 12,
    },
    {
      base_name: "데킬라",
			base_count : 3,
	    base_ratio: 6
    },
    {
      base_name: "꼬냑",
			base_count : 1,
	    base_ratio: 3
    }
    ],

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
    }
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