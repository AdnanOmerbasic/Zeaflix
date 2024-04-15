import { useState } from "react";
import MovieModal from "./MovieModal";

const MovieCard = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!false);
  };

  const handleRemoveDetails = () => {
    setShowDetails(false);
  };

  const posterBasePath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  return (
    <div>
      <div className="flex">
        <div className="flex flex-row flex-wrap items-center justify-between ">
          <img
            src={posterBasePath + movie.poster_path}
            alt="movie"
            className="rounded-2xl hover:scale-150 transition-transform duration-150"
            onClick={handleShowDetails}
          />
          {showDetails && (
            <MovieModal toggleOff={handleRemoveDetails} movie={movie} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;