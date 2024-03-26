import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../sass/navbar.scss';
import '../sass/weather.scss';
import Weather from "./Weather.tsx";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute z-20"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Tyvek/Typar</a>
              <ul className="p-2">
                <li>
                  <a>Make a Siding</a>
                </li>
                <li>
                  <a>What we Provide</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
        C<span>odin</span>dev
        </a>
      </div>
      {/* .navbar-start */}

      <div className="navbar-center hidden lg:flex">
      <Weather />
      </div>
      {/* .navbar-center */}

      <div className="navbar-end">
        <button>Hire us</button>
      </div>
      {/* .navbar-end */}
    </div>
  );
}
