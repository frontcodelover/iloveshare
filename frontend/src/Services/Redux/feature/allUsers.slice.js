import { createSlice } from "@reduxjs/toolkit";

export const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: {
    allUsers: null,
  },
  reducers: {
    setAllUsersData: (state, { payload }) => {
      state.allUsers = payload;
    },
  },
});

export const { setAllUsersData } = allUsersSlice.actions;
export default allUsersSlice.reducer;
