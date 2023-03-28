import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "../store";

export interface tokenState {
    accessToken:string
  }

  const initialState: tokenState = {
    accessToken: "",
  };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login : (state,action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.user.accessToken) {
        return state;
      }
      console.log("HYDRATE", action.payload.user.accessToken);
      state.accessToken = action.payload.user.accessToken;
    },
  },
});

export const { login } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;