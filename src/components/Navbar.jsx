import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar bg-black md:px-10 z-10 fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn text-white btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Cinema</a>
              </li>
              <li>
                <a>Series</a>
              </li>
              <li>
                <a>Local</a>
              </li>
              <li>
                <a>Kids</a>
              </li>
              <li>
                <a>Donkey+</a>
              </li>
            </ul>
          </div>
          <a className="normal-case text-lg text-white">Donkey+</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-white">
            <li>
              <a>Cinema</a>
            </li>
            <li>
              <a>Series</a>
            </li>
            <li>
              <a>Local</a>
            </li>
            <li>
              <a>Kids</a>
            </li>
            <li>
              <a>Donkey+</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-red-600 hover:bg-red-800 text-white">
            Get started
          </a>
        </div>
      </div>
    );
  }
}
