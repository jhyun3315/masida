import { useEffect, useState } from "react";
import { get_cocktail_word_data } from "../api/analisys/analisys_api";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Cocktail_world_ingredient from "../../components/Theme/Cocktail_world_ingredient";
import Cocktail_world_fact from "../../components/Theme/Cocktail_world_fact";
import Cocktail_world_movies from "../../components/Theme/Cocktail_world_movies";
import Cocktail_world_word from "../../components/Theme/Cocktail_world_word";
import { wordType } from "../../type/cocktailWord";
import { cocktail_world } from "../../type/cocktailWord";

export type cocktail_world_ingredientType = {
  isLoading: boolean,
  wordList:cocktail_world,
}
const cocktail_world = () => {
  
  const [isLoading,setIsLoading] = useState(false);
  const [wordList, setWordList] = useState<cocktail_world>();
  
  useEffect(() => {
    get_cocktail_word_data().then((response) => {
      setIsLoading(true);
      setWordList(response);
      console.log("뿝", response);
    });
  }, []);

  const cocktail_world_ingredient_props: cocktail_world_ingredientType = {
    isLoading: isLoading,
    wordList:wordList,
  };


  return (<>
    <Header />
    <Cocktail_world_ingredient {...cocktail_world_ingredient_props} />
    <Cocktail_world_word />
    <Cocktail_world_fact />
    <Cocktail_world_movies/>
    <Footer/>
  </>)
};

export default cocktail_world;