import { createSlice, AsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
