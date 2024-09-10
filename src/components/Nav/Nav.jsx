import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="mx-auto lg:px-16">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* Logo and Company Name */}
              <img src="/logo.png" alt="Company Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-N">Nexcent</span>
            </Link>
          </div>
          <div className="hidden text-[#18191F] font-medium text-base leading-4 md:flex items-center space-x-4 lg:space-x-6">
            {/* Navigation Buttons */}
            <Link to="/" className="text-gray-800 hover:text-blue-600 transition">
              Home
            </Link>
            <Link
              to="/service"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Service
            </Link>
            <Link
              to="/feature"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Feature
            </Link>
            <Link
              to="/product"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Product
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Contact
            </Link>
            <Link
              to="/testimonial"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Testimonial
            </Link>
            <Link
              to="/FAQ"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              FAQ
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 font-medium text-sm">
            <button className="px-4 py-2 gap-[14px] text-primary bg-neutral-Silver rounded hover:bg-blue-700 transition">
              Login
            </button>
            <button className="px-3 py-3 gap-[10px] rounded-md text-neutral-White bg-primary">
              Sign Up
            </button>
          </div>
          <div className="md:hidden flex items-center">
            {/* Mobile Menu Button */}
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block text-gray-800 px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-800 px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-gray-800 px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="block text-gray-800 px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="block text-gray-800 px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="block text-gray-800 px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <div className="flex items-center space-x-4 mt-4">
            <button className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition">
              Login
            </button>
            <button className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
