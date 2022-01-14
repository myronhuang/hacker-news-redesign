import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hackerNewsApi = createApi({
  reducerPath: "hackerNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hacker-news.firebaseio.com/v0/",
  }),
  endpoints: (build) => ({
    getNewPostIds: build.query({
      query: () => `newstories.json?print=pretty`,
    }),
    getItemById: build.query({
      query: (id) => `item/${id}.json?print=pretty`,
    }),
  }),
});

export const { useGetNewPostIdsQuery, useGetItemByIdQuery } = hackerNewsApi;
