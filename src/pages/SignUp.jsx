import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Create Account
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
