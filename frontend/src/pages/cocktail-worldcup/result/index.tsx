import World_cup_league_result from "../../../components/Worldcup/World_cup_league_result";
import Header from "../../../components/Header/Header";
import { detail_props } from "../../../type/cocktailTypes";
import { cocktail_worldcup_data } from "../../../type/cocktailTypes";
import ResetCategory from "../../../components/UI/ResetCategory";

const cocktail_worldcup_result = (props: cocktail_worldcup_data) => {
  ResetCategory();
  return (
    <>
      <Header />
      <World_cup_league_result {...props} />
    </>
  );
};
export default cocktail_worldcup_result;
