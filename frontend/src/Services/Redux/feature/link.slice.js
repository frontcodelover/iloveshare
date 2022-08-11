import { createSlice } from "@reduxjs/toolkit";

export const linkSlice = createSlice({
  name: "link",
  initialState: {
    link: null,
  },
  reducers: {
    setLinkData: (state, { payload }) => {
      state.link = payload;
    },
  },
});

export const { setLinkData } = linkSlice.actions;
export default linkSlice.reducer;
