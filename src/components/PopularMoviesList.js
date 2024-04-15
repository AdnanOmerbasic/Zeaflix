import { useFetchPopularMoviesQuery } from "../store";
import MovieCard from "./MovieCard";

const PopularMoviesList = () => {
  const { data, isFetching, error } = useFetchPopularMoviesQuery();
  console.log(data);
  let content;
  if (isFetching) {
    content = (
      <div className="flex justify-center items-center bg-yellow-400 w-56  h-11 rounded-3xl">
        <h4 className="text-xl font-semibold inline-block">Loading...</h4>
      </div>
    );
  } else if (error) {
    content = <div>Error loading movies</div>;
  } else {
    content = data.results.map((movie) => {
      return <MovieCard key={movie.id} movie={movie} />;
    });
  }

  return (
    <div>
      <div className="text-3xl text-white font-semibold translate-y-24 flex ml-28">
        Popular movies
      </div>
      <div className="flex flex-row flex-wrap mt-40  px-24 gap-x-8 gap-y-28">
        {content}
      </div>
      <div className="mt-40"></div>
    </div>
  );
};

export default PopularMoviesList;
