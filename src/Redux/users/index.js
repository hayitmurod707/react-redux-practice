import { createSlice } from '@reduxjs/toolkit';
import extraReducers from "./extra-reducers";
const initialState = {
  users: [],
  status: 'PENDING'
};
export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users = [...state.users, payload];
    },
    removeUser: (state, { payload }) => {
      const users = state.users.filter(({id}) => id !== payload);
      state.users = users;
    },
  },
  extraReducers
});
export const { addUser, removeUser, getUsers } = users.actions;
export default users.reducer;