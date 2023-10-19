import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./apis/userApi";
import { albumsApi } from "./apis/albumsApi";
import {  photosApi } from "./apis/photosApi";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useRemoveAlbumMutation,
  useAddAlbumMutation,
  useFetchAlbumsQuery,
} from "./apis/albumsApi";

export {
  useAddUserMutation,
  useFetchUserQuery,
  useRemoveUserMutation,
} from "./apis/userApi";

export {
  useAddPhotoMutation,
  useRemovePhotoMutation,
  useFetchPhotosQuery
} from "./apis/photosApi";
