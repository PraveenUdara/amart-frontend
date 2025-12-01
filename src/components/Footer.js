// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";
import logo from "../assets/footerlogo.png";   // ✅ import your logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT: LOGO + COMPANY INFO */}
        <div className="footer-section footer-left">
          <img src={logo} alt="A Mart Logo" className="footer-logo" />

          <div>
            <h3 className="footer-title">A Mart Holdings</h3>
            <p className="footer-text">
              Office:<br />
              City Center, No.12,<br />
              Sunethradevi Road, Kohuwala.<br />
              Sri Lanka
            </p>
          </div>
        </div>

        {/* MIDDLE: CONTACT INFO */}
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <p className="footer-text">
            Tel / Whatsapp:<br />
            +94 77 7744 816<br />
            +94 77 7648 888
          </p>
          <p className="footer-text">
            Email: info@amartholdings.com
          </p>
        </div>

      </div>

      <div className="footer-copy">
        © {new Date().getFullYear()} A Mart Holdings. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
