import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-black fixed top-0 w-full px-10  z-50">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center gap-4">
            <span className="bg-white rounded-full p-2 text-xl">
              <BiMoviePlay className="text-lg text-gray-800" />
            </span>
            <h1 className="text-white font-bold text-2xl">Tife Movie-Box</h1>
          </div>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:text-white">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
                  aria-current="page"
                  onClick={toggleMenu}
                >
                  Now Playing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/upcoming"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
                  onClick={toggleMenu}
                >
                  Upcoming
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/top-rated"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
                  onClick={toggleMenu}
                >
                  Top Rated
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/popular"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
                  onClick={toggleMenu}
                >
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/search"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
                  onClick={toggleMenu}
                >
                  Search
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* <nav className="bg-black text-white flex px-10 py-4 justify-between">
        <div className="flex items-center gap-3">
          <span className="bg-white rounded-full p-2 text-xl">
            <BiMoviePlay className="text-lg text-gray-800" />
          </span>
          <h1 className="font-bold text-2xl">TMDB App</h1>
        </div>
        <div className="flex gap-4">
          <NavLink to="/" className="nav-link">
            Now Playing
          </NavLink>
          <NavLink to="/upcoming" className="nav-link">
            Upcoming
          </NavLink>
          <NavLink to="/top-rated" className="nav-link">
            Top Rated
          </NavLink>
          <NavLink to="/popular" className="nav-link">
            Popular
          </NavLink>
          <NavLink to="/search" className="nav-link">
            Search
          </NavLink>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
