import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface nameState {
  searchName: string;
}

const initialState: nameState = {
  searchName: "",
};

const counterSlice = createSlice({
  name: "nameSelect",
  initialState,
  reducers: {
    setSelectName: (state, action: PayloadAction<string>) => {
      state.searchName = action.payload;
    },
  },
});

const { actions, reducer: nameReducer } = counterSlice;

export const { setSelectName } = actions;

export default nameReducer;
