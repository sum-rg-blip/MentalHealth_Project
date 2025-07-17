import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { FiAlignJustify, FiX } from "react-icons/fi";

function Navbar({ darkMode, toggleDarkMode, isAdmin }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className={`sticky top-0 z-50 shadow-md transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-[#d5ebe0] to-[#F0FDF4] text-green-700' 
    : 'bg-gradient-to-r from-green-50 via-green-100 to-green-200 text-green-900'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold tracking-wide text-green-700 dark:text-green-400">
          MindCare 
        </Link>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? (
              <FiX className="h-6 w-6 text-yellow-300" />
            ) : (
              <FiAlignJustify className="h-6 w-6 text-green-500 dark:text-green-300" />
            )}
          </button>
        </div>

        <ul className={`lg:flex items-center space-x-6 font-medium text-lg ${isOpen ? "block absolute bg-white   top-[70px] left-0 w-full px-6 py-3 shadow-full lg:static lg:w-auto lg:shadow-none z-40" : "hidden lg:flex"}`}>
          <li>
            <NavLink to="/" end onClick={handleLinkClick} className={({ isActive }) =>
              `hover:text-green-700 dark:hover:text-green-300 transition ${
                isActive ? "font-semibold underline" : ""
              }`
            }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" onClick={handleLinkClick} className={({ isActive }) =>
              `hover:text-green-700 dark:hover:text-green-300 transition ${
                isActive ? "font-semibold underline" : ""
              }`
            }>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleLinkClick} className={({ isActive }) =>
              `hover:text-green-700 dark:hover:text-green-300 transition ${
                isActive ? "font-semibold underline" : ""
              }`
            }>
              About
            </NavLink>
          </li>

         
           {!isAdmin && (
            <li>
              <NavLink to="/login" onClick={handleLinkClick} className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full transition shadow-md">
                Login
              </NavLink>
            </li>
          )}
        </ul>

        <div className="ml-4 hidden lg:block">
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-green-600 hover:bg-green-700 dark:bg-green-400 dark:hover:bg-green-300 transition shadow-md focus:outline-none">
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-300" />
            ) : (
              <MoonIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="block lg:hidden px-5 pb-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-green-600 hover:bg-green-700 dark:bg-green-400 dark:hover:bg-green-300 transition shadow-md focus:outline-none">
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-300" />
            ) : (
              <MoonIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
