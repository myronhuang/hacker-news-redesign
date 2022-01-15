import { createSlice } from "@reduxjs/toolkit";
import { checkLocalStorage } from "../../utilities/useLocalStorage";

const savedState = checkLocalStorage("starred")

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    starred: savedState === "undefined" ? [] : savedState,
  },
  reducers: {
    starPost: (state, action) => {
      if (!state.starred.find((id) => id === action.payload.id))
        state.starred.push(action.payload.id);
    },
    unstarPost: (state, action) => {
      state.starred = state.starred.filter((id) => id !== action.payload.id);
    },
  },
});

export const selectStarredPosts = (state) => state.posts.starred;

export const { starPost, unstarPost } = postsSlice.actions;

export default postsSlice.reducer;
