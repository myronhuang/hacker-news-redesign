import { createSlice } from "@reduxjs/toolkit";
import { checkLocalStorage } from "../../utilities/useLocalStorage";


const savedState = checkLocalStorage("isLight");

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isLight: savedState === undefined ? true : savedState,
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
