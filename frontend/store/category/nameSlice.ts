import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from "@reduxjs/toolkit";

interface nameState {
  searchName: string;
}

const initialState: nameState = {
  searchName : "",
};

const counterSlice = createSlice({
  name: 'nameSelect',
  initialState,
  reducers: {
    setSelectName : (state, action : PayloadAction<string>) => {
      state.searchName = action.payload ;
    },
  },
});

const { actions, reducer: nameReducer } = counterSlice;

export const { setSelectName } = actions;

export default nameReducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { PayloadAction } from "@reduxjs/toolkit";

// interface nameState {
//   base: string;
// }

// const initialState: nameState = {
//   base: "",
// };

// const counterSlice = createSlice({
//   name: 'nameSelect',
//   initialState,
//   reducers: {
//     setSelectName : (state, action : PayloadAction<string>) => {
//       state.base = action.payload ;
//     },
//   },
// });

// const { actions, reducer: nameReducer } = counterSlice;

// export const { setSelectName } = actions;

// export default nameReducer;