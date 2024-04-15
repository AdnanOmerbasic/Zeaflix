import MovieImg from "../assets/Cinema_Background.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative inline-block mt-32">
        <img src={MovieImg} alt="moviePic" className="img-frontPage" />
        <Link to="/upcomming">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-5">
            <button className=" bg-green-600 text-white w-44 h-12 font-bold text-lg rounded-2xl shadow-2xl drop-shadow-2xl backdrop-blur-md hover:bg-blue-400 ">
              Upcomming
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
