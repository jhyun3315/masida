import Header from "@/components/Header/Header";
import CocktailPreference from "@/components/UserAnalysis/CocktailPreference";
import ColorPreference from "@/components/UserAnalysis/ColorPreference";
import IngredientPreference from "@/components/UserAnalysis/IngredientPreference";
import UserPreference from "@/components/UserAnalysis/UserPreference";
import style from './index.module.scss';
import { cocktailBase } from "@/type/cocktailPreference";


const userAnalisys = () => {
   const cocktail_props: cocktailBase[] = [
    {
      base_name: "진",
			base_count : 23,
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
  ]

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
      <CocktailPreference {...cocktail_props} />
      <ColorPreference />
      <IngredientPreference />
      <UserPreference/>
    </>
   )
};

export default userAnalisys;