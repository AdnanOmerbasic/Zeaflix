import { CiSearch } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";
import { useNavigate } from "react-router-dom";

const SearchMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector((state) => {
    return state.search.searchTerm;
  });
  const handleSearchTermChange = (event) => {
    console.log(event.target.value);
    dispatch(changeSearchTerm(event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/searched");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center">
        <CiSearch className="fill-black h-7 w-10 translate-x-10" />
        <input
          className=" rounded-2xl  bg-white text-black w-64 indent-10 h-8 focus:outline-none border border-solid  focus:border-green-400"
          type="text"
          placeholder="Search by movies, genre"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </form>
  );
};
export default SearchMovie;
