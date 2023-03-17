import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from "@reduxjs/toolkit";

interface colorState {
  color: string[];
}

const initialState: colorState = {
  color: [],
};

const counterSlice = createSlice({
  name: 'colorSelect',
  initialState,
  reducers: {
    setSelectColor : (state, action : PayloadAction<string[]>) => {
      state.color = action.payload ;
    },
  },
});

const { actions, reducer: colorReducer } = counterSlice;

export const { setSelectColor } = actions;

export default colorReducer;