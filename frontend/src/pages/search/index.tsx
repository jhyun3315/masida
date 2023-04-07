import Header from "../../components/Header/Header";
import SearchPage from "../../components/Search/SearchPage";
import { useState, useEffect } from "react";
import { get_cocktails_ingredients } from "../api/cocktails/cocktail_api";
import { searchIngredientType } from "../../type/ingredientTypes";

export type search_props = {
  ingredient: searchIngredientType[];
};

const search = () => {
  const [ingredientList, setIngredientList] =
    useState<searchIngredientType[]>();

  useEffect(() => {
    get_cocktails_ingredients().then((response) => {
      setIngredientList(response);
    });
  }, []);

  const search_props: search_props = {
    ingredient: ingredientList,
  };
  return (
    <>
      <Header />
      <SearchPage {...search_props} />
    </>
  );
};

export default search;
