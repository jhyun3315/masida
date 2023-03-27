import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  searchedIngredientType,
  searchIngredientType,
} from "../../src/type/ingredientTypes";

const initialState: searchedIngredientType = {
  ingredient: [],
};

const counterSlice = createSlice({
  name: "ingredientSelect",
  initialState,
  reducers: {
    setSelectIngredient: (
      state,
      action: PayloadAction<searchIngredientType[]>
    ) => {
      state.ingredient = action.payload;
    },
    changeSelectIngredient: (
      state,
      action: PayloadAction<searchIngredientType>
    ) => {
      state.ingredient[action.payload.ingredient_id].ingredient_add =
        !action.payload.ingredient_add;
    },
  },
});

const { actions, reducer: ingredientReducer } = counterSlice;

export const { setSelectIngredient, changeSelectIngredient } = actions;

export default ingredientReducer;
