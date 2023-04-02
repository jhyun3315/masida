import World_cup_league_result from "../../../components/Worldcup/World_cup_league_result";
import Header from "../../../components/Header/Header";
<<<<<<< HEAD
import { cocktail_worldcup_data, detail_props } from "../../../type/cocktailTypes";

const cocktail_worldcup_result = (props: cocktail_worldcup_data) => {
    return (
      <>
        <Header />
        <World_cup_league_result {...props} />
      </>
    );
=======
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
>>>>>>> 3821500253f7be0eb91aa972b0e7ce033ab83a84
};
export default cocktail_worldcup_result;
