// src/components/Navbar.js
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const businessItems = [
  { label: "Pharmaceuticals", path: "/business/pharmaceuticals" },
  { label: "Diagnostics", path: "/business/diagnostics" },
  { label: "Medical Tourism", path: "/business/medical-tourism" },
  { label: "Helaya Pharmacy", path: "/business/helaya-pharmacy" },
  { label: "Medical Centers", path: "/business/medical-centers" },
  { label: "Branding & Design", path: "/business/branding-design" },
  { label: "Helaya International", path: "/business/helaya-international" },
  { label: "Manufacture", path: "/business/manufacture" },
  { label: "Expia", path: "/business/expia" },
];

const Navbar = () => {
  const [bizOpen, setBizOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [shrink, setShrink] = useState(false);

  const navRef = useRef(null);
  const closeTimer = useRef(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setBizOpen(false);
      closeTimer.current = null;
    }, 120);
  };

  // Sticky shrink on scroll
  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (!navRef.current?.contains(e.target)) {
        setBizOpen(false);
        setMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return;
    setSearchValue("");
  };

  const closeMenus = () => {
    setBizOpen(false);
    setMobileMenu(false);
  };

  return (
    <nav ref={navRef} className={`navbar ${shrink ? "navbar-shrink" : ""}`}>
      <div className="navbar-inner">
        {/* LEFT : LOGO */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenus}>
          <img src={logo} className="nav-logo-img" alt="A Mart Holdings Logo" />
          <span className="nav-logo-text">A Mart Holdings</span>
        </NavLink>

        {/* CENTER : NAVIGATION */}
        <div className={`nav-center ${mobileMenu ? "mobile-open" : ""}`}>
          <NavLink to="/" end className="nav-link" onClick={closeMenus}>
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link" onClick={closeMenus}>
            About Us
          </NavLink>

          {/* ===== BUSINESS MEGA MENU (FIXED) ===== */}
          <div
            className="nav-mega"
            onMouseEnter={() => {
              cancelClose();
              setBizOpen(true);
            }}
            onMouseLeave={scheduleClose}
          >
            <button
              className="nav-link nav-business-btn"
              onClick={() => {
                cancelClose();
                setBizOpen((v) => !v);
              }}
              type="button"
              aria-expanded={bizOpen}
            >
              Businesses
              <span
                className={`arrow ${bizOpen ? "up" : ""}`}
                aria-hidden="true"
              ></span>
            </button>

            {/* Keep hover alive on panel */}
            <div
              className={`mega-panel ${bizOpen ? "show" : ""}`}
              onMouseEnter={() => {
                cancelClose();
                setBizOpen(true);
              }}
              onMouseLeave={scheduleClose}
            >
              <div className="mega-inner">
                <div className="mega-left">
                  <h4>Our Businesses</h4>
                  <p>
                    A Mart Holdings operates across pharmaceuticals, diagnostics,
                    clinics, medical tourism, manufacturing and global services.
                  </p>
                </div>

                <div className="mega-grid">
                  {businessItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="mega-item"
                      onClick={closeMenus}
                    >
                      <span className="mega-icon">•</span>
                      <span className="mega-text">{item.label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <NavLink to="/events" className="nav-link" onClick={closeMenus}>
            Events
          </NavLink>

          <NavLink to="/contact" className="nav-link" onClick={closeMenus}>
            Contact Us
          </NavLink>
        </div>

        {/* RIGHT : SEARCH */}
        <form className="nav-search nav-search-right" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>

        {/* MOBILE HAMBURGER */}
        <button
          className={`hamburger ${mobileMenu ? "open" : ""}`}
          onClick={() => setMobileMenu((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
