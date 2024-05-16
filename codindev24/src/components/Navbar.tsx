import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../sass/navbar.scss';
import '../sass/weather.scss';
import Weather from "./Weather.tsx";
// firebase
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  signOut,
} from "firebase/auth";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import Weatherspain from "./Weatherspain.tsx";
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';

export default function Navbar() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };

  useEffect

  return (
   <div>
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
              <a href="/">Home</a>
            </li>
            <li>
              <a>Posts</a>
              <ul className="p-2">
                <li>
                  <a href="/notesmain">Notes</a>
                </li>
                <li>
                  <a href="/postsmain">Posts</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
        C<span>odin</span>dev
        </a>
      </div>
      {/* .navbar-start */}

      <div className="navbar-center hidden lg:flex">
      {/* <Weather /> */}
      </div>
      {/* .navbar-center */}

      <div className="navbar-end">
      {!user ? (
      <div>
      <Link className="loginnav" to="/login">Login</Link>
      {/* <Link className="register" to="/signup">SignUp</Link> */}
      </div>
      ) : (
      <div>
        <span className="email"><PersonIcon />{user?.email}</span>
      </div>
      )}
      <div className="signout">
        
      <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <SettingsIcon/>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute z-20"
          >
            <li>
              <a href="/login" onClick={logout}><LogoutIcon />Signout</a>
            </li>
            <li>
              <a><EmailIcon/>Contact</a>
            </li>
          </ul>
        </div>
        </div>{/* .signout */}

      </div>{/* .navbar-end */}
    </div>
    <div className="weatherbelow">
      <Weather />
      {/* <Weatherspain/> */}
      </div>
    </div>
  );
}
