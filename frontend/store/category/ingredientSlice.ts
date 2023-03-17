import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from "@reduxjs/toolkit";
import { searchedIngredientType, searchIngredientType } from "../../src/type/ingredientTypes";


const initialState: searchedIngredientType = {
  ingredient: [],
};

const counterSlice = createSlice({
  name: 'ingredientSelect',
  initialState,
  reducers: {
    setSelectIngredient : (state, action : PayloadAction<searchIngredientType[]>) => {
      state.ingredient = action.payload ;
    },
  },
});

const { actions, reducer: ingredientReducer } = counterSlice;

export const { setSelectIngredient } = actions;

export default ingredientReducer;