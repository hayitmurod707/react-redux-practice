import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  users: [],
  loading: false,
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
    getUsers: (state) => {
      state.loading = true;
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          const data = response?.data;
          const users = Array.isArray(data)?data:[];
          state.users = users;
        }).catch(() => {
          state.users = [];
        }).finally(()=> {
          state.loading = false;
        })
    }
  },
});
export const { addUser, removeUser, getUsers } = users.actions;
export default users.reducer;