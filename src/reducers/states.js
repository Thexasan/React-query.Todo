import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
};

export const slice = createSlice({
  name: "states",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.cars = action.payload;
    },
  },
});

export const { getUsers } = slice.actions;

export default slice.reducer;
