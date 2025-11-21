// src/pages/AboutUs.js
import React from "react";
import aboutUsImg from "../assets/about_bg.jpg";

const AboutUs = () => {
  return (
    <div className="page">

      {/* ONLY IMAGE — NO TEXT OVER IMAGE */}
      <div className="about-hero-container">
        <img src={aboutUsImg} alt="About Us" className="about-hero-img" />
      </div>

      {/* Normal text BELOW image */}
      <div className="container">
        <p className="about-description">
          A Mart Holdings partners with world-renowned healthcare providers,
          pharmaceutical manufacturers and diagnostic laboratories to bring the
          latest medical technology, products and services to Sri Lanka.
        </p>

        <p className="about-description">
          We work with leading diagnostic and research labs in Asia and Europe,
          facilitating patient testing in oncology, hematology and rare diseases.
        </p>

        <p className="about-description">
          Our medical tourism division ensures patients receive world-class
          healthcare from top hospitals in Singapore and India.
        </p>
      </div>

    </div>
  );
};

export default AboutUs;
