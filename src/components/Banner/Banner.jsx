import { Link } from "react-router-dom";
import "./Banner.css"

const Banner = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] rounded-3xl mt-12 bg-[#1313130d] lg:mx-32 mx-8 px-4 lg:px-28 grid">
      <div className="flex justify-center items-center flex-col lg:flex-row-reverse">
        <img
          src="https://svgshare.com/i/14i0.svg"
          className="w-3/12 rounded-lg mb-4 lg:mb-0"
        />
        <div className="w-full lg:w-2/3">
          <h1 className="text-5xl w-full text-center lg:text-left lg:w-3/4 font-bold font-playfair-display">
            Books to freshen up your bookshelf
          </h1>
          <Link to="/listed-books" className="flex lg:justify-normal justify-center">
            <button className="btn mt-12 text-white bg-[#23BE0A]">
              View The List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
