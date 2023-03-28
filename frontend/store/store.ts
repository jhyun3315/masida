import { configureStore, combineReducers } from '@reduxjs/toolkit';
import baseSlice from "./category/baseSlice";
import colorSlice from "./category/colorSlice";
import difficultySlice from './category/difficultySlice';
import ingredientSlice from './category/ingredientSlice';
import nameSlice from './category/nameSlice';

import userSlice  from './modules/user';

import persistReducer from 'redux-persist/lib/persistReducer';
import createWebStorage from "redux-persist/lib/storage/createWebStorage";


//로컬 스토리지에 persist 적용시키는 것.
const createNoopStorage = () => {
  return {
    getItem(_key : any) {
      return Promise.resolve(null);
    },
    setItem(_key : any , value : any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const local =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

import {
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";


const reducers = combineReducers({
  baseSelect : baseSlice,
  colorSelect : colorSlice,
  difficultySelect : difficultySlice,
  ingredientSelect: ingredientSlice,
  nameSelect : nameSlice,
  user:userSlice,
})

//새로고침시 안없어 지는 것을 whitelist에 저장.
const persistConfig = {
  key: "root",
  storage: local,
  whitelist: ["user"],
};

//redux-persist를 사용하기위해 Reducer합치는 단계
const persistedReducer = persistReducer(persistConfig, reducers);

//긁어온 거
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//ReturnType<Type>은 함수 Type의 반환 타입으로 구성된 타입을 생성해주는 것 입니다.
export type RootState = ReturnType<typeof store.getState>;

//여기서 AppDispatch는 dispatch의 타입을 편하게 하기위해서 미리 설정하는 것입니다.
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
