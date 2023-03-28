import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface tokenState {
  accessToken:string
}

const initialState: tokenState = {
  accessToken: "",
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login (state,action: PayloadAction<string>) {
      state.accessToken = action.payload;
    }, logout(state) {
      state.accessToken = "";
    }
  }
});

const { actions, reducer: userReducer } = userSlice;
export const { login,logout } = actions;
export default userReducer;
export const selectUser = (state : RootState) => state.user.accessToken;
