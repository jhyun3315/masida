import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface pageState {
  currentPage: number;
}

const initialState: pageState = {
    currentPage: 0,
};

const pageSlice = createSlice({
  name: "nameSelect",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

const { actions, reducer: pageReducer } = pageSlice;

export const { setCurrentPage } = actions;

export default pageReducer;
