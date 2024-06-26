import { useFetchMovieTrailerQuery } from "../store";
const MovieTrailer = ({ movieId }) => {
  const { data, isFetching, error } = useFetchMovieTrailerQuery(movieId);
  console.log(data);
  let content;
  if (isFetching) {
    content = (
      <div className="flex justify-center items-center bg-yellow-400 w-56  h-11 rounded-3xl">
        <h4 className="text-xl font-semibold inline-block">Loading...</h4>
      </div>
    );
  } else if (error) {
    content = <div>Error loading movie trailer</div>;
  } else {
    const movieTrailer = data.results.find(
      (video) => video.site === "YouTube" && video.type === "Trailer"
    );
    if (movieTrailer) {
      const embed = `https://www.youtube.com/embed/${movieTrailer.key}`;
      content = (
        <iframe
          className="w-screen h-96 border-none"
          src={embed}
          title="Movie Trailer"
        ></iframe>
      );
    }
  }

  return (
    <div>
      <div className="flex flex-row flex-wrap mt-0">{content}</div>
    </div>
  );
};

export default MovieTrailer;
