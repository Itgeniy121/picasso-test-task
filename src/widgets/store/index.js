import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { fetchPosts } from "./services/PostsService";
import { getPostById } from "./services/PostsService";
export const store = configureStore({
  reducer: {
    [fetchPosts.reducerPath]: fetchPosts.reducer,
    [getPostById.reducerPath]: getPostById.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      fetchPosts.middleware,
      getPostById.middleware
    ),
});

setupListeners(store.dispatch);
