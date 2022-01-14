import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isLight: true,
  },
  reducers: {
    toggleLight: (state, action) => {
      state.isLight = !state.isLight;
    },
  },
});

export const selectIsLight = (state) => state.theme.isLight;

export const { toggleLight } = themeSlice.actions;

export default themeSlice.reducer;
