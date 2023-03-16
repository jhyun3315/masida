import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterSlice from "./counter/counterSlice";

import persistReducer from 'redux-persist/lib/persistReducer';
import local from 'redux-persist/lib/storage';

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
    counter : counterSlice,
})

const persistConfig = {
  key: "root",
  storage: local,
  whitelist: ["counter"],
};


const persistedReducer = persistReducer(persistConfig, reducers);

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
