import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        <Link to="/">
          Rebit<span>.</span>
        </Link>
      </h1>
      <ul className="nav-list">
        <li className="nav-link">
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li className="nav-link">
          <Link to="/explore">Explore</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-link">
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
