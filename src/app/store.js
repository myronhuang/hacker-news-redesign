import { configureStore } from "@reduxjs/toolkit";
import { hackerNewsApi } from "../services/hackerNewsApi";
import postsReducer from "../features/posts/postsSlice";
import themeReducer from "../features/theme/themeSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    theme: themeReducer,
    [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hackerNewsApi.middleware),
});
