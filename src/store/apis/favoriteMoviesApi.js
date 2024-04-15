import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const favoriteMoviesApi = createApi({
  reducerPath: "favorites",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005/",
  }),
  endpoints(builder) {
    return {
      fetchFavoriteMovies: builder.query({
        providesTags: ["FavoriteMovies"],
        query: () => {
          return {
            url: "favoriteMovies",
            method: "GET",
          };
        },
      }),
      addFavoriteMovie: builder.mutation({
        invalidatesTags: ["FavoriteMovies"],
        query: (favoriteMovie) => {
          return {
            url: "favoriteMovies",
            method: "POST",
            body: favoriteMovie,
          };
        },
      }),
      removeFavoriteMovie: builder.mutation({
        invalidatesTags: ["FavoriteMovies"],
        query: (movieId) => {
          return {
            url: `favoriteMovies/${movieId}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchFavoriteMoviesQuery,
  useAddFavoriteMovieMutation,
  useRemoveFavoriteMovieMutation,
} = favoriteMoviesApi;
export { favoriteMoviesApi };
