import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Config from "../config";
import { ReqresUserListResponse, ReqresUserResponse } from "../interfaces/API";

export const API_APP = createApi({
  reducerPath: "API_APP",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: Config.URL_CONFIG,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      { token: string },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),

    fetchUserProfile: builder.query<ReqresUserResponse, number>({
      query: (id) => `/users/${id}`,
      providesTags: ["User"],
    }),
    getUsers: builder.query<ReqresUserListResponse, number | void>({
      query: (page = 1) => `/users?page=${page}`,
      providesTags: ["User"],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useFetchUserProfileQuery,
  useGetUsersQuery,
} = API_APP;
