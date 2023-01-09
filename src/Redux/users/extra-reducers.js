import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const users = await axios.get('https://jsonplaceholder.typicode.com/users');
      return users;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
const extraReducers = {
  [getUsers.pending]: state => {
    state.status = 'PENDING';
  },
  [getUsers.fulfilled]: (state, { payload }) => {
    const data = payload.data;
    const users = Array.isArray(data)?data:[];
    state.users = users
    state.status = 'SUCCESS'
  },
  [getUsers.rejected]: state => {
    state.status = 'ERROR'
  }
}
export default extraReducers