import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Nematov Bekhzodbek" },
  { id: "1", name: "Betheny White" },
  { id: "2", name: "Dave Gray" },
  { id: "3", name: "Leo Young" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
