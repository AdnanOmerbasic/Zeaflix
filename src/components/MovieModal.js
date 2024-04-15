import { FaStar } from "react-icons/fa";
import {
  useAddFavoriteMovieMutation,
  useRemoveFavoriteMovieMutation,
} from "../store";

const MovieModal = ({ toggleOff, movie }) => {
  const [addFavoriteMovie] = useAddFavoriteMovieMutation();
  const [removeFavoriteMovie] = useRemoveFavoriteMovieMutation();

  const handleAddFavoritMovie = () => {
    addFavoriteMovie(movie);
  };

  const handleRemoveFavoritMovie = () => {
    removeFavoriteMovie(movie.id);
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div
        onClick={toggleOff}
        className="bg-[#292626] opacity-90 fixed  inset-0 "
      ></div>
      <div className=" bg-[#4d4444] fixed  rounded-xl h-820 w-700 ">
        <div className="text-white flex justify-start items-center mt-96 font-bold text-xl">
          {movie.title}
        </div>
        <div className="text-white mt-6">{movie.overview}</div>
        <div className="flex justify-end">
          <FaStar className="fill-yellow-300  translate-y-1.5" />
          <div className="text-white font-semibold p-1 flex justify-center items-center ">
            {movie.vote_average}
          </div>
        </div>
        <div className="text-white text-lg flex justify-center items-center">
          Release date: {movie.release_date}
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={handleAddFavoritMovie}
            className="rounded-2xl items-center flex justify-center bg-yellow-500 w-48 h-9"
          >
            Add to favorites
          </button>
          <button
            onClick={handleRemoveFavoritMovie}
            className="rounded-2xl items-center flex justify-center bg-red-500 w-48 h-9 text-white"
          >
            Remove from favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
