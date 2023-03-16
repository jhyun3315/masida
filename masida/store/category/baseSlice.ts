import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from "@reduxjs/toolkit";

interface baseState {
  base: string;
}

const initialState: baseState = {
  base: "",
};

const counterSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    setBase : (state, action : PayloadAction<string>) => {
      state.base = action.payload ;
    },
  },
});

const { actions, reducer: baseReducer } = counterSlice;

export const { setBase } = actions;

export default baseReducer;