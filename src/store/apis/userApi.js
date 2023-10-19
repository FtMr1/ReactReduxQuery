import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { resolve } from "styled-jsx/css";
import { faker } from "@faker-js/faker";

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }), 
  endpoints(builder) {
    return {
      fetchUser: builder.query({
        providesTags: ["User"],
        query: () => {
          return {
            url: "/users",
            method: "GET",
          };
        },
      }),
      addUser: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "User" }];
        },
        query: () => {
          return {
            url: "/users",
            method: "POST",
            body: {
              name: faker.name.fullName(),
            },
          };
        },
      }),
      removeUser: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "User" }];
        },
        query: (user) => {
          return {
            url: `/users/${user.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});
export const { useFetchUserQuery, useAddUserMutation, useRemoveUserMutation } =
  usersApi;
export { usersApi };
