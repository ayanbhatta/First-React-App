import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Login
        </h2>

        <form className="flex flex-col gap-4">
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

          {/* Mode Selection */}
          <div className="flex justify-between text-sm text-gray-700">
            <label className="flex items-center gap-2">
              <input type="radio" name="role" className="accent-indigo-600" />
              User
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="role" className="accent-indigo-600" />
              Admin
            </label>
          </div>

          <button className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
