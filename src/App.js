import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PopularMoviesList from "./components/PopularMoviesList";
import HighestRatedMovieList from "./components/HighestRatedMoviesList";
import { Route, Routes } from "react-router-dom";
import FavoriteMoviesList from "./components/FavoriteMoviesList";
import UpcommingMoviesList from "./components/UpcommingMoviesList";
import SearchList from "./components/SearchList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<PopularMoviesList />} />
        <Route path="/highest-rated" element={<HighestRatedMovieList />} />
        <Route path="/favoriteMovies" element={<FavoriteMoviesList />} />
        <Route path="/searched" element={<SearchList />} />
        <Route path="/upcomming" element={<UpcommingMoviesList />} />
      </Routes>
    </div>
  );
};

export default App;
