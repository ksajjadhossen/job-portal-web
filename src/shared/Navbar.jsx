import React from "react";
import { use } from "react";
import { Link } from "react-router";
import AuthProvider from "../contexts/AuthContext/AuthProvider";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const items = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        {user && (
          <>
            <Link to="/myApplications">My Applications</Link>
          </>
        )}
      </li>
      <li>
        {user && (
          <>
            <Link to="/addJob">Add Job</Link>
          </>
        )}
      </li>
      <li>
        {user && (
          <>
            <Link to="/myPostedJobs">My posted Jobs</Link>
          </>
        )}
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm w-4/5 mx-auto">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {items}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Job Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{items}</ul>
      </div>
      <div className="navbar-end">
        <div className=" flex flex-row gap-5">
          {user ? (
            <Link onClick={() => signOutUser()} className="btn">
              Sign out
            </Link>
          ) : (
            <>
              <Link to="/signin" className="btn">
                Sign in
              </Link>
              <Link to="/register" className="btn">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
