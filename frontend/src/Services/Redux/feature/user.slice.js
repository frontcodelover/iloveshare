import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    pouetpouet: localStorage.getItem("jwt"),
  },
  reducers: {
    setCurrentUserData: (subState, { payload }) => {
      console.log("state", JSON.parse(JSON.stringify(subState)));
      subState.user = payload;
    },
  },
});

export const { setCurrentUserData } = userSlice.actions;
export default userSlice.reducer;
