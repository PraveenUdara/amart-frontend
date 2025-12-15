// src/components/Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  /* ✅ UPDATED BUSINESS DROPDOWN (WITH MANUFACTURE) */
  const businessItems = [
    { label: "Pharmaceuticals", path: "/business/pharma" },
    { label: "Diagnostics", path: "/business/diagnostics" },
    { label: "Medical Tourism", path: "/business/medical-tourism" },
    { label: "Helaya Pharmacy", path: "/business/helaya-pharmacy" },
    { label: "Medical Centers", path: "/business/medical-centers" },
    { label: "Branding & Design", path: "/business/amart-design" },
    { label: "Helaya International", path: "/business/helaya-international" },
    { label: "Manufacture", path: "/business/manufacture" }, // ✅ NEW
    { label: "Expia", path: "/business/expia" },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return;

    console.log("Searching for:", searchValue);
    setSearchValue("");
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <div className="navbar-logo">
          <img src={logo} className="nav-logo-img" alt="A Mart Holdings Logo" />
          <span className="nav-logo-text">A Mart Holdings</span>
        </div>

        {/* SEARCH BAR (DESKTOP ONLY) */}
        <form className="nav-search" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search…"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            aria-label="Search"
          />
        </form>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${mobileMenu ? "open" : ""}`}
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </div>

        {/* NAV LINKS */}
        <div className={`nav-links ${mobileMenu ? "mobile-open" : ""}`}>

          <NavLink to="/" end className="nav-link" onClick={() => setMobileMenu(false)}>
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link" onClick={() => setMobileMenu(false)}>
            About Us
          </NavLink>

          {/* BUSINESS DROPDOWN */}
          <div className="nav-dropdown">
            <button
              className="nav-link dropdown-btn"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-expanded={isOpen}
            >
              Business
              <span className={`arrow ${isOpen ? "up" : ""}`}>▼</span>
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
