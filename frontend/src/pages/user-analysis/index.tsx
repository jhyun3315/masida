import Header from "@/components/Header/Header";
import CocktailPreference from "@/components/UserAnalysis/CocktailPreference";
import ColorPreference from "@/components/UserAnalysis/ColorPreference";
import IngredientPreference from "@/components/UserAnalysis/IngredientPreference";
import UserPreference from "@/components/UserAnalysis/UserPreference";
import style from './index.module.scss';

const userAnalisys = () => {
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
      <CocktailPreference />
      <ColorPreference />
      <IngredientPreference />
      <UserPreference/>
    </>
   )
};

export default userAnalisys;