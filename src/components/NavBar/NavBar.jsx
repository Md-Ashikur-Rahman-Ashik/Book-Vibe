import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="p-4 text-black mt-12 mx-32">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          to="/"
          className="flex items-center p-2 font-work-sans text-[28px] font-bold"
        >
          Book Vibe
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex font-work-sans">
          <li className="flex">
            <NavLink to="/"
              className={`flex items-center px-4 rounded-lg border-[#23BE0A] ${({isActive}) => isActive? "border-2": ""}`}
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/listedBooks"
              className={`flex items-center px-4 rounded-lg border-[#23BE0A] ${({isActive}) => (isActive? "border-2": "")}`}
            >
              Listed Books
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              className="flex items-center px-4 rounded-lg hover:border-2 border-[#23BE0A]"
            >
              Pages To Read
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">
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
