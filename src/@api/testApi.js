import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "./base/endPoints";
import { apiSlice, jsonToQueryString } from "./base/slice";

export const customerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getData: builder.query({
      query: (param) => ({
        url: API_ENDPOINTS.gateData,
      }),
    }),
    postData: builder.mutation({
      query: ({ data }) => ({
        url: API_ENDPOINTS.postData,
        method: "POST",
        body: data,
      }),
      providesTags: ["testApi"],
    }),
  }),
});

export const { useGetDataQuery, usePostDataMutation } = customerApi;
