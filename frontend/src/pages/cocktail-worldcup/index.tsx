<<<<<<< HEAD
import World_cup_leage from "@/components/Worldcup/World_cup_league";
import Header from "../../components/Header/Header";


const cocktail_worldcup = () => {

    return (
      <>
        <Header />
        <World_cup_leage />

      </>
    );
  
};
export default cocktail_worldcup;
=======
import { NextPage } from "next";
import { cocktail_worldcup_data } from "../../type/cocktailTypes";
import World_cup_league from "../../components/Worldcup/World_cup_league";
import Header from "../../components/Header/Header";
import axios from "axios";
import ResetCategory from "../../components/UI/ResetCategory";

interface Props {
  ctList: cocktail_worldcup_data[];
}

const cocktail_worldcup: NextPage<Props> = ({ ctList }) => {
  ResetCategory();
  return (
    <>
      <Header />
      <World_cup_league {...ctList} />
    </>
  );
};
export default cocktail_worldcup;

cocktail_worldcup.getInitialProps = async () => {
  try {
    const get_cocktail_worldcup_list = await axios.get(
      `https://j8b208.p.ssafy.io/api/worldcups`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const ctList: cocktail_worldcup_data[] =
      get_cocktail_worldcup_list.data.data;

    return {
      ctList,
    };
  } catch (err) {
    console.log("cocktail worldcup list를 불러오지 못함");
    return {
      ctList: [],
    };
  }
};
>>>>>>> frontend
