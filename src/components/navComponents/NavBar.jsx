import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex items-center gap-8 text-[15px] font-medium">
      {/* Links */}
      <Link
        className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md transition duration-200 hover:bg-indigo-50"
        to="/"
      >
        Courses
      </Link>

      <Link
        className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md transition duration-200 hover:bg-indigo-50"
        to="/login"
      >
        Login
      </Link>

      {/* Signup as Button */}
      <Link
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
        to="/signup"
      >
        Sign Up
      </Link>

      {/* Cart */}
      <div className="relative cursor-pointer group">
        <div className="p-2 rounded-full hover:bg-indigo-50 transition">
          <FaShoppingCart className="text-xl text-gray-700 group-hover:text-indigo-600" />
        </div>

        {/* Badge */}
        <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] px-1.5 py-[1px] rounded-full shadow">
          2
        </span>
      </div>
    </div>
  );
};

export default NavBar;
