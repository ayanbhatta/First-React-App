import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-10 py-10 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">EduStore</h1>
          <p className="text-sm text-gray-400">
            Learn anytime, anywhere. Build your skills with top courses.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li className="hover:text-indigo-400 cursor-pointer">Courses</li>
            <li className="hover:text-indigo-400 cursor-pointer">About</li>
            <li className="hover:text-indigo-400 cursor-pointer">Contact</li>
            <li className="hover:text-indigo-400 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex gap-5 text-xl">
            <FaFacebook className="hover:text-indigo-400 cursor-pointer" />
            <FaTwitter className="hover:text-indigo-400 cursor-pointer" />
            <FaInstagram className="hover:text-indigo-400 cursor-pointer" />
            <FaGithub className="hover:text-indigo-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        © 2026 EduStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
