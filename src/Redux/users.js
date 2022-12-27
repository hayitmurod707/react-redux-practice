import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  users: [],
};
export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users = [...state.users, payload];
    },
    removeUser: (state, { payload }) => {
      const users = state.users.filter((user, index) => index !== payload);
      state.users = users;
    },
  },
});
export const { addUser, removeUser } = users.actions;
export default users.reducer;