import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  searchedIngredientType,
  searchIngredientType,
} from "../../src/type/ingredientTypes";

//리덕스의 상태를 변경하기 위해선 원래 reducer안에사 action으로 변경해주어야함.
//그냥 바로 접근하려 해서 에러를 띄운다고 현재 생각중.
type stateType = {
  add: searchedIngredientType;
  remove: searchIngredientType;
};

//이부분이 잘못된 것 같음.
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
  },
});

const { actions, reducer: ingredientReducer } = counterSlice;

export const { setSelectIngredient } = actions;

export default ingredientReducer;
