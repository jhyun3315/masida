import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type baseState = {
  base: string;
};

const initialState: baseState = {
  base: "",
};

const counterSlice = createSlice({
  name: "baseSelect",
  initialState,
  reducers: {
    setSelectBase: (state, action: PayloadAction<string>) => {
      state.base = action.payload;
    },
  },
});

const { actions, reducer: baseReducer } = counterSlice;

export const { setSelectBase } = actions;

export default baseReducer;
