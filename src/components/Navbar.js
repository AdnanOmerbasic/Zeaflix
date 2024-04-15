import { Link } from "react-router-dom";
import SearchMovie from "./Search";
const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="flex flex-row justify-start items-center mt-5">
          <Link to="/" className=" ml-80">
            <span className="text-yellow-300 text-4xl font-bold">Zea</span>
            <span className="text-blue-400 text-4xl font-bold">flix</span>
          </Link>
          <Link
            to="/popular"
            className=" font-semibold text-white ml-48 text-lg hover:text-green-300"
          >
            Popular
          </Link>
          <Link
            to="/highest-rated"
            className="font-semibold text-white ml-48 text-lg hover:text-green-300"
          >
            Highest Rated
          </Link>
          <Link
            to="/favoriteMovies"
            className="font-semibold text-white ml-48 text-lg  hover:text-green-300"
          >
            Favorites
          </Link>
          <div className="ml-48">
            <SearchMovie />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
