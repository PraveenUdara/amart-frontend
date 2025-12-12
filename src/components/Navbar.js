import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

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
    <nav className="navbar navbar-overlay">
      <div className="navbar-inner">

        {/* LOGO */}
        <div className="navbar-logo">
          <img src={logo} className="nav-logo-img" alt="A Mart Holdings Logo" />
          <p className="nav-logo-text">A Mart Holdings</p>
        </div>

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

        {/* LINKS */}
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
            >
              Business
              <span className={isOpen ? "arrow up" : "arrow"}>▼</span>
            </button>

            {isOpen && (
              <div className="dropdown-menu">
                {businessItems.map((b) => (
                  <NavLink
                    key={b.path}
                    to={b.path}
                    className="dropdown-item"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileMenu(false);
                    }}
                  >
                    {b.label}
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
