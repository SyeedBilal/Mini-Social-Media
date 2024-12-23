import React from "react";

const Header = () => {
  return (
    <header className="bg-base-100 shadow-lg">
      <nav className="navbar px-4 md:px-8">
        {/* Brand Name */}
        <div className="flex-1">
          <a className="text-xl font-bold text-primary hover:text-primary-focus" href="#">
            Brand
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="btn btn-ghost">
            Home
          </a>
          <a href="#" className="btn btn-ghost">
            Pricing
          </a>
          <a href="#" className="btn btn-ghost">
            FAQ
          </a>
          <a href="#" className="btn btn-ghost">
            About
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="btn btn-outline">
            Login
          </a>
          <a href="#" className="btn btn-primary">
            Signup
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <div className="divider my-1"></div>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Signup</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
