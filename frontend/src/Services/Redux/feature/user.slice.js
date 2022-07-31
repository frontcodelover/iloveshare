import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,

  },
  reducers: {
    setCurrentUserData: (state, { payload }) => {
      state.user = payload;
    },
   
  },
});



export const { setCurrentUserData } = userSlice.actions;
export default userSlice.reducer;
