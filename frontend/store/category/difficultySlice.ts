import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from "@reduxjs/toolkit";

interface difficultyState {
  difficulty: string[];
}

const initialState: difficultyState = {
  difficulty: [],
};

const counterSlice = createSlice({
  name: 'difficultySelect',
  initialState,
  reducers: {
    setSelectDifficulty : (state, action : PayloadAction<string[]>) => {
      state.difficulty = action.payload ;
    },
  },
});

const { actions, reducer: difficultyReducer } = counterSlice;

export const { setSelectDifficulty } = actions;

export default difficultyReducer;