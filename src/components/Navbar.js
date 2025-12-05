// src/components/Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);           // Business dropdown
  const [mobileMenu, setMobileMenu] = useState(false);   // Mobile menu

  const businessItems = [
    { label: "Diagnostics", path: "/business/diagnostics" },
    { label: "Pharmaceuticals", path: "/business/pharma" },
    { label: "Medical Tourism", path: "/business/medical-tourism" },
    { label: "Clinic", path: "/business/clinic" },
    { label: "Expia", path: "/business/expia" },
    { label: "Helaya Pharmacy", path: "/business/helaya-pharmacy" },
    { label: "Helaya International", path: "/business/helaya-international" },
    { label: "A Mart Design", path: "/business/amart-design" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <div className="navbar-logo">
          <img src={logo} alt="A Mart Holdings" className="nav-logo-img" />
          <p className="nav-logo-text">A Mart Holdings</p>
        </div>

        {/* HAMBURGER BUTTON (MOBILE) */}
        <div
          className={mobileMenu ? "hamburger active" : "hamburger"}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAVIGATION LINKS */}
        <div className={mobileMenu ? "nav-links mobile-open" : "nav-links"}>

          <NavLink to="/" end className="nav-link" onClick={() => setMobileMenu(false)}>
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link" onClick={() => setMobileMenu(false)}>
            About Us
          </NavLink>

          {/* BUSINESS WITH DROPDOWN */}
          <div className="nav-dropdown">
            <button
              type="button"
              className="nav-link nav-link-dropdown"
              onClick={() => setIsOpen(!isOpen)}
            >
              Business
              <span className={isOpen ? "arrow up" : "arrow"}>▼</span>
            </button>

            {isOpen && (
              <div className="dropdown-menu">
                {businessItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="dropdown-item"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileMenu(false);
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/events" className="nav-link" onClick={() => setMobileMenu(false)}>
            Events
          </NavLink>

          <NavLink to="/contact" className="nav-link" onClick={() => setMobileMenu(false)}>
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
