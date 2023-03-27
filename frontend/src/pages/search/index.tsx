import Header from "../../components/Header/Header";
import SearchPage from "../../components/Search/SearchPage";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_cocktails_ingredients } from "../api/cocktails/cocktail_api";
import { searchIngredientType } from "../../type/ingredientTypes";
import { setSelectIngredient } from "../../../store/category/ingredientSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export type search_props = {
  ingredient: searchIngredientType[];
};

const search = () => {
  const dispatch = useDispatch();
  const [ingredientList, setIngredientList] =
    useState<searchIngredientType[]>();

  useEffect(() => {
    get_cocktails_ingredients().then((response) => {
      setIngredientList(response);
      dispatch(setSelectIngredient(response));
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);
  const req = context.req;
  const res = context.res;

  try {
    const response = await axios.get(
      `https://j8b208.p.ssafy.io/api/cocktails/search`,
      {
        params: {
          sort_num: 0,
          cocktail_name: useSelector((state: RootState) => state.nameSelect),
          cocktail_base: useSelector((state: RootState) => state.baseSelect),
          cocktail_color: useSelector((state: RootState) => state.colorSelect),
          cocktail_difficulty: useSelector(
            (state: RootState) => state.difficultySelect
          ),
          cocktail_ingredient: useSelector(
            (state: RootState) => state.ingredientSelect
          ),
        },
      }
    );
    const data = response.data.data;
    console.log("call : ", data);
    return {
      props: {
        detail: data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};
