import { Link } from "react-router-dom";
import "./Banner.css"

const Banner = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] rounded-3xl mt-12 bg-[#1313130d] mx-32 px-28 grid">
      <div className="flex justify-center items-center flex-col lg:flex-row-reverse">
        <img
          src="../../../public/bannerBook.svg"
          className="w-3/12 rounded-lg"
        />
        <div className="w-2/3">
          <h1 className="text-5xl w-3/4 font-bold font-playfair-display">
            Books to freshen up your bookshelf
          </h1>
          <Link to="/listed-books">
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
