// src/components/Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (!searchValue.trim()) return;

    // 🔧 Later you can route to a search page
    console.log("Searching for:", searchValue);

    setSearchValue("");
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <div className="navbar-logo">
          <img src={logo} className="nav-logo-img" alt="A Mart Holdings Logo" />
          <p className="nav-logo-text">A Mart Holdings</p>
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

        {/* MOBILE HAMBURGER */}
        <div
          className={`hamburger ${mobileMenu ? "open" : ""}`}
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS */}
        <div className={mobileMenu ? "nav-links mobile-open" : "nav-links"}>

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active-line" : "nav-link"
            }
            onClick={() => setMobileMenu(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active-line" : "nav-link"
            }
            onClick={() => setMobileMenu(false)}
          >
            About Us
          </NavLink>

          {/* BUSINESS DROPDOWN */}
          <div className="nav-dropdown">
            <button
              className="nav-link dropdown-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              type="button"
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

          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? "nav-link active-line" : "nav-link"
            }
            onClick={() => setMobileMenu(false)}
          >
            Events
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active-line" : "nav-link"
            }
            onClick={() => setMobileMenu(false)}
          >
            Contact Us
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
