import World_cup_league_result from "../../../components/Worldcup/World_cup_league_result";
import Header from "../../../components/Header/Header";
import { cocktail_worldcup_data, detail_props } from "../../../type/cocktailTypes";

const cocktail_worldcup_result = (props: cocktail_worldcup_data) => {
    return (
      <>
        <Header />
        <World_cup_league_result {...props} />
      </>
    );
};
export default cocktail_worldcup_result;
