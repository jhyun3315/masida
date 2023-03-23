import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

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
    }
  }
});

const { actions, reducer: userReducer } = userSlice;
export const { login } = actions;
export default userReducer;

