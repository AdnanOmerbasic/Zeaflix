import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const moviesApi = createApi({
  reducerPath: "movies",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.themoviedb.org/3/",
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query({
        query: () => {
          return {
            url: "discover/movie",
            params: {
              sort_by: "popularity.desc",
              api_key: "3867a8eaac8a5d3191ed5ec4b9b38f95",
            },
            method: "GET",
          };
        },
      }),
      fetchHighestRatedMovies: builder.query({
        query: () => {
          return {
            url: "discover/movie",
            params: {
              sort_by: "vote_average.desc",
              api_key: "3867a8eaac8a5d3191ed5ec4b9b38f95",
            },
            method: "GET",
          };
        },
      }),
      fetchUpcommingMovies: builder.query({
        query: () => {
          return {
            url: "discover/movie",
            params: {
              api_key: "3867a8eaac8a5d3191ed5ec4b9b38f95",
            },
            method: "GET",
          };
        },
      }),
      fetchSearchMovie: builder.query({
        query: (searchTerm) => {
          return {
            url: "search/movie",
            params: {
              query: searchTerm,
              api_key: "3867a8eaac8a5d3191ed5ec4b9b38f95",
            },
          };
        },
      }),
    };
  },
});

export const {
  useFetchPopularMoviesQuery,
  useFetchHighestRatedMoviesQuery,
  useFetchUpcommingMoviesQuery,
  useFetchSearchMovieQuery,
} = moviesApi;
export { moviesApi };