import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { moviesApi } from "./apis/moviesApi";
import { favoriteMoviesApi } from "./apis/favoriteMoviesApi";
import { changeSearchTerm, searchReducer } from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    [favoriteMoviesApi.reducerPath]: favoriteMoviesApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(moviesApi.middleware)
      .concat(favoriteMoviesApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useFetchPopularMoviesQuery,
  useFetchHighestRatedMoviesQuery,
  useFetchUpcommingMoviesQuery,
  useFetchSearchMovieQuery,
  useFetchMovieTrailerQuery,
} from "./apis/moviesApi";

export {
  useFetchFavoriteMoviesQuery,
  useAddFavoriteMovieMutation,
  useRemoveFavoriteMovieMutation,
} from "./apis/favoriteMoviesApi";

export { changeSearchTerm };
