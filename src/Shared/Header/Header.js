import React from "react";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <nav className="bg-primary sticky top-0">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-72"
            >
              <Link
                className="flex text-start font-semibold pr-10 pl-5 py-2 active:border-b-2 active:border-accent"
                to="/"
              >
                Shop
              </Link>
              <Link
                className="flex text-start font-semibold pr-10 pl-5 py-2 active:border-b-2 active:border-accent"
                to="/men"
              >
                Men's Collection
              </Link>
              <Link
                className="flex text-start font-semibold pr-10 pl-5 py-2 active:border-b-2 active:border-accent"
                to="/women"
              >
                Women's Collection
              </Link>
              <Link
                className="flex text-start font-semibold pr-10 pl-5 py-2 active:border-b-2 active:border-accent"
                to="/food"
              >
                Food & Spice
              </Link>
            </div>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
            Bestbuy
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Link
            className="flex text-start font-semibold px-5 py-2 hover:border-accent hover:border-b-2 focus:text-accent"
            to="/"
          >
            Shop
          </Link>
          <Link
            className="flex text-start font-semibold px-5 py-2 hover:border-accent hover:border-b-2 focus:text-accent"
            to="/men"
          >
            Men's Collection
          </Link>
          <Link
            className="flex text-start font-semibold px-5 py-2 hover:border-accent hover:border-b-2 focus:text-accent"
            to="/women"
          >
            Women's Collection
          </Link>
          <Link
            className="flex text-start font-semibold px-5 py-2 hover:border-accent hover:border-b-2 focus:text-accent"
            to="/food"
          >
            Food & Spice
          </Link>
        </div>
        <div className="navbar-end">
          <Link to="" className="p-5">
            <GiShoppingCart className="text-2xl" />
          </Link>
          <Link to="" className=" p-5">
            <CgProfile className="text-2xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
