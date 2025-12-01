// src/components/Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; 
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const businessItems = [
    { label: "Diagnostics", path: "/business/diagnostics" },
    { label: "Pharmaceuticals", path: "/business/pharma" },
    { label: "Medical Tourism", path: "/business/medical-tourism" },
    { label: "Clinic", path: "/business/clinic" },
    { label: "Expia", path: "/business/expia" }, // Branding renamed
    { label: "Helaya Pharmacy", path: "/business/helaya-pharmacy" },
    { label: "Helaya International", path: "/business/helaya-international" },
    { label: "A Mart Design", path: "/business/amart-design" },
  ];

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

          {/* BUSINESS DROPDOWN */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button
              type="button"
              className="nav-link nav-link-dropdown"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Business
            </button>

            {isOpen && (
              <div className="dropdown-menu">
                {businessItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="dropdown-item"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

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
