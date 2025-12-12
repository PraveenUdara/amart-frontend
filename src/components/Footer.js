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

        {/* Column 1: Logo + Address */}
        <div className="footer-col">
          <img src={logo} alt="A Mart Holdings" className="footer-logo" />

          <h3 className="footer-heading">A Mart Holdings (Pvt) Ltd</h3>

          <p className="footer-text location">
            #12 City Center,<br />
            Sunethradevi Road,<br />
            10250, Sri Lanka
          </p>
        </div>

        {/* Column 2: Contact */}
        <div className="footer-col">
          <h3 className="footer-heading">Contact</h3>

          <p className="footer-text">
            Tel / WhatsApp:<br />
            +94 77 7744 816<br />
            +94 77 7648 888
          </p>

          <p className="footer-text">
            Email: info@amartholdings.com
          </p>
        </div>

        {/* Column 3: Google Map */}
        <div className="footer-col footer-map-col">
          <h3 className="footer-heading">Our Location</h3>

          <div className="footer-map-card">
            <iframe
              className="footer-map"
              title="A Mart Holdings Location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=A%20Mart%20Holdings%20(Pvt)%20Ltd,%20City%20Center,%20Sunethradevi%20Road&output=embed"
            ></iframe>
          </div>
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

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} A Mart Holdings. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
