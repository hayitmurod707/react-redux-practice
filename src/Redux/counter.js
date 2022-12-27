import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  count: 0,
};
export const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.count = state.count - 1;
    },
    decrement: state => {
      state.count = state.count + 1
    },
  },
});
export const { increment, decrement } = counter.actions;
export default counter.reducer;