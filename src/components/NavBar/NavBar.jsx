import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="p-4 text-black mt-12 mx-8 lg:mx-32 font-work-sans">
      <div className="container flex gap-10 lg:gap-0 items-center justify-center">
        <Link
          to="/"
          className="flex p-2 text-2xl lg:text-[28px] font-bold"
        >
          Book Vibe
        </Link>
        <div className="items-center flex-shrink-0 flex gap-2 lg:hidden">
          <button className="self-center px-2 py-2 font-semibold rounded bg-[#23BE0A] text-white">
            Sign in
          </button>
          <button className="self-center px-2 py-2 font-semibold rounded bg-[#59C6D2] text-white">
            Sign up
          </button>
        </div>
        <ul className="items-stretch hidden lg:flex text-[18px] font-semibold">
          <li className="flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-2 flex items-center px-2 rounded-lg border-[#23BE0A] text-[#23BE0A]"
                  : "flex items-center px-2"
              }
            >
              <span className="text-center">Home</span>
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/listed-books"
              className={({ isActive }) =>
                isActive
                  ? "border-2 flex items-center px-2 rounded-lg border-[#23BE0A] text-[#23BE0A]"
                  : "flex items-center px-2"
              }
            >
              <span className="text-center">Listed Books</span>
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/pages-to-read"
              className={({ isActive }) =>
                isActive
                  ? "border-2 flex items-center px-2 rounded-lg border-[#23BE0A] text-[#23BE0A]"
                  : "flex items-center px-2"
              }
            >
              <span className="text-center">Pages To Read</span>
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/author-spotlight"
              className={({ isActive }) =>
                isActive
                  ? "border-2 flex items-center px-2 rounded-lg border-[#23BE0A] text-[#23BE0A]"
                  : "flex items-center px-2"
              }
            >
              <span className="text-center">Author Spotlight</span>
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/book-club"
              className={({ isActive }) =>
                isActive
                  ? "border-2 flex items-center px-2 rounded-lg border-[#23BE0A] text-[#23BE0A]"
                  : "flex items-center px-2"
              }
            >
              <span className="text-center">Book Club</span>
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 gap-4 hidden lg:flex">
          <button className="self-center px-8 py-3 text-[18px] font-semibold rounded bg-[#23BE0A] text-white">
            Sign in
          </button>
          <button className="self-center px-8 py-3 text-[18px] font-semibold rounded bg-[#59C6D2] text-white">
            Sign up
          </button>
        </div>
        <button className="p-4 hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
