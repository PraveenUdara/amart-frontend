// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ use your new PNG logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo + text */}
        <div className="navbar-logo">
          <img src={logo} alt="A Mart Holdings" className="nav-logo-img" />
          <p className="nav-logo-text">A Mart Holdings</p>
        </div>

        {/* Navigation links */}
        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/business"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            Business
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            Events
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
