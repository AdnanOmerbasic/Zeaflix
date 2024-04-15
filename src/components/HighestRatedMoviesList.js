import { useFetchHighestRatedMoviesQuery } from "../store";
import MovieCard from "./MovieCard";

const HighestRatedMovieList = () => {
  const { data, isFetching, error } = useFetchHighestRatedMoviesQuery();
  console.log(data);
  let content;
  if (isFetching) {
    content = (
      <div className="flex justify-center items-center mt-12 bg-yellow-400 text-white font-bold">
        Loading...
      </div>
    );
  } else if (error) {
    content = <div>Error loading movies</div>;
  } else {
    content = data.results
      .map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })
      .filter(
        (movie) => movie.poster_path !== null && movie.vote_average !== 0
      );
  }

  return (
    <div>
      <div className="text-3xl text-white font-semibold translate-y-24 flex ml-28">
        Highest rated movies
      </div>
      <div className="flex flex-row flex-wrap mt-40  px-24 gap-x-8 gap-y-28">
        {content}
      </div>
      <div className="mt-40"></div>
    </div>
  );
};

export default HighestRatedMovieList;
