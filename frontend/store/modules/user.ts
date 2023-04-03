import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { userType } from "../../src/type/userTypes";
import { RootState } from "../store";

export interface userState {
  accessToken: string,
  userInfo: userType;
};

const initialState: userState = {
  accessToken: "",
  userInfo: {
    user_name: "",
    user_email: "",
    user_profile: "",
    user_gender: "",
    user_age_range: ""
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login : (state,action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    logout : (state) => {
      state.accessToken = "";
    },
    setUserInfo: (state, action: PayloadAction<userType>) => {
      const newInfo = { ...state.userInfo, ...action.payload };
      state.userInfo = action.payload;
    },
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

const { actions, reducer: userSliceReducer } = userSlice;

export const selectUser = (state: RootState) => state.user;
export const { login, logout,setUserInfo } = userSlice.actions;
export default userSliceReducer;