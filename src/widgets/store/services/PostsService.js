import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const fetchPosts = createApi({
  reducerPath: "allPosts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: build => ({
    getAllPosts: build.query({
      query: ({ limit, page = 1 }) => `/posts/?_limit=${limit}&_page=${page}`,
    }),
  }),
});

export const getPostById = createApi({
  reducerPath: "getOnePost",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: build => ({
    getOnePost: build.query({
      query: count => `/posts/${count}`,
    }),
  }),
});
