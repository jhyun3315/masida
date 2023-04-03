// 이 파일은 pages/detail/[id].tsx과 같이 wrapper를 사용하기 위해 필요합니다.
// by - kim jihwan

import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Context, createWrapper } from "next-redux-wrapper";
import userReducer from "./modules/user";
import logger from "redux-logger";
import { Action } from "redux";

const makeStore = (context: Context) =>
  configureStore({
    reducer: {
      user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
  });

export type TokenStore = ReturnType<typeof makeStore>;
export type TokenState = ReturnType<TokenStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TokenState,
  unknown,
  Action
>;

export const wrapper = createWrapper<TokenStore>(makeStore);