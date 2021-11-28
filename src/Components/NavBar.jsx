import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        Rebit<span>.</span>
      </h1>
      <ul className="nav-list">
        <li className="nav-link">Dashboard</li>
        <li className="nav-link">Explore</li>
        <li className="nav-link">About</li>
        <Link to="/">
          <li className="nav-link">Logout</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
