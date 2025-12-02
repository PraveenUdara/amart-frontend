// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";
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

          <p className="footer-text">
            Email: info@amartholdings.com
          </p>
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
            Facebook Page
          </a>
        </div>

        {/* Column 4: Map */}
        <div className="footer-col footer-map-col">
          <div className="footer-map-card">
            <iframe
              title="A Mart Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126744.86456191196!2d79.81213096943358!3d6.865459099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17a15537a7bc9%3A0x22a9a765c2174c4a!2sSunethra%20Devi%20Rd%2C%20Kohuwala!5e0!3m2!1sen!2slk!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="footer-map"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Bottom Divider Line */}
      <div className="footer-divider"></div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} A Mart Holdings. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
