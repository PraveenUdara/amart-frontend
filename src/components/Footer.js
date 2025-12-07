// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-top">

        {/* Column 1: Logo + Company Info */}
        <div className="footer-col">
          <img src={logo} alt="A Mart Holdings" className="footer-logo" />

          <h3 className="footer-heading">A Mart Holdings</h3>

          <p className="footer-text">
            City Center, No.12,<br />
            Sunethradevi Road,<br />
            Kohuwala, Sri Lanka
          </p>
        </div>

        {/* Column 2: Contact Information */}
        <div className="footer-col">
          <h3 className="footer-heading">Contact</h3>

          <p className="footer-text">
            Tel / WhatsApp:<br />
            +94 77 7744 816<br />
            +94 77 7648 888
          </p>

          <p className="footer-text">Email: info@amartholdings.com</p>
        </div>

        {/* Column 3: Social Media */}
        <div className="footer-col">
          <h3 className="footer-heading">Find Us On</h3>

          <a
            href="https://www.facebook.com/amartholdings/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
              className="footer-social-icon"
              alt="Facebook"
            />
            Facebook
          </a>
        </div>

        {/* Column 4: Business Links */}
        <div className="footer-col">
          <h3 className="footer-heading">Our Businesses</h3>

          <Link className="footer-link" to="/pharmaceuticals">Pharmaceuticals</Link>
          <Link className="footer-link" to="/diagnostics">Medical Diagnostics</Link>
          <Link className="footer-link" to="/tourism">Medical Tourism</Link>
          <Link className="footer-link" to="/pharmacy">Helaya Pharmacy</Link>
          <Link className="footer-link" to="/international">Helaya International</Link>
          <Link className="footer-link" to="/branding">Branding & Design</Link>
          <Link className="footer-link" to="/clinic">Helaya Clinic</Link>
          <Link className="footer-link" to="/expia">Expia</Link>
        </div>

      </div>

      {/* Bottom Divider */}
      <div className="footer-divider"></div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} A Mart Holdings. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
