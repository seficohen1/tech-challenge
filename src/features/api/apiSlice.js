import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
    mode: 'cors',
    // prepareHeaders: (headers) => {
    //   headers.set('Content-Type', `application/json`);
    //   headers.set('Access-Control-Allow-Origin', `http://localhost:3000`);
    //   headers.set('Access-Control-Allow-Method', `POST`);
    //   headers.set(
    //     'Access-Control-Allow-Headers',
    //     `Content-Type, Authorization`,
    //   );

    //   return headers;
    // },
  }),

  tagTypes: ['files', 'users', 'search'],
  endpoints: (builder) => ({
    getAllFiles: builder.query({
      query: () => '/files',
      providesTags: ['files'],
    }),
    uploadFile: builder.mutation({
      query: (file) => ({
        url: '/files',
        method: 'POST',
        body: file,
      }),
      invalidatesTags: ['files'],
    }),
    getCurrentUser: builder.query({
      query: () => '/users',
      providesTags: ['users'],
    }),
    search: builder.mutation({
      query: (searchText) => ({
        url: '/search',
        method: 'POST',
        body: searchText,
        mode: 'cors',
      }),
      invalidatesTags: ['files'],
    }),
    getSearchResults: builder.query({
      query: (query) => `/search?query=${query}`,
    }),
  }),
});

export const {
  useGetAllFilesQuery,
  useUploadFileMutation,
  useGetCurrentUserQuery,
  useSearchMutation,
  useGetSearchResultsQuery,
} = apiSlice;

export default apiSlice;
