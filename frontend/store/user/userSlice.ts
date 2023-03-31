import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type userState = {
  user_name : string,
	user_email : string,
	user_profile : string,
	user_gender : string,
	user_age_range : string
}

const initialState = {
  userInfo: userState{
     user_name : "",
	  user_email : "",
	  user_profile : "",
	  user_gender : "",
	  user_age_range : ""
  }
}

const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<String>) => {
      state.user_name = action.payload;

    },
  },
});



