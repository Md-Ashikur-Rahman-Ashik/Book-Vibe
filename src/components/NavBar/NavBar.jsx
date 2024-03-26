import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <header className="p-4 text-black mt-12 mx-32 font-work-sans">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          to="/"
          className="flex items-center p-2 text-[28px] font-bold"
        >
          Book Vibe
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-2 flex items-center px-4 rounded-lg border-[#23BE0A] text-[#23BE0A]"
                  : "flex items-center px-4"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/listed-books"
              className={({ isActive }) =>
                isActive
                  ? "border-2 flex items-center px-4 rounded-lg border-[#23BE0A] text-[#23BE0A]"
                  : "flex items-center px-4"
              }
            >
              Listed Books
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/pages-to-read"
              className={({ isActive }) =>
                isActive
                  ? "border-2 flex items-center px-4 rounded-lg border-[#23BE0A] text-[#23BE0A]"
                  : "flex items-center px-4"
              }
            >
              Pages To Read
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 gap-4 hidden lg:flex">
          <button className="self-center px-8 py-3 text-[18px] font-semibold rounded bg-[#23BE0A] text-white">Sign in</button>
          <button className="self-center px-8 py-3 text-[18px] font-semibold rounded bg-[#59C6D2] text-white">
            Sign up
          </button>
        </div>
        <button className="p-4 lg:hidden">
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
