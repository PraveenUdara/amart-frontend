// src/pages/Home.js
import React from "react";
import bgImage from "../assets/home_bg.jpg";     // Full hero image
import labBG from "../assets/lab_bg.jpg";        // Left promo image
import "../index.css";

function Home() {
  return (
    <div>

      {/* =====================================================
            FULL IMAGE HERO (Doctor & Kid)
      ====================================================== */}
      <div className="home-hero-wrapper">
        <img src={bgImage} alt="Doctor and child" className="home-hero-img" />

        <div className="absolute-overlay">
          <div className="hero-content hero-box">
            <h1 className="hero-title">Welcome to A Mart Holdings</h1>

            <p className="hero-text">
              A Mart Holdings partners with world-renowned healthcare providers,
              pharmaceutical manufacturers and diagnostic laboratories to bring
              the latest medical technology, products and services to Sri Lanka.
            </p>

            <p className="hero-text">
              We are agents for world-leading diagnostic and research labs in Asia
              and Europe, facilitating patient testing in oncology, hematology and
              rare diseases.
            </p>

            <p className="hero-text">
              Our medical tourism arm helps patients access quality care from
              top hospitals in Singapore and India.
            </p>
          </div>
        </div>
      </div>


      {/* =====================================================
            LEFT + RIGHT PROMO CARDS
      ====================================================== */}
      <div className="promo-section-row">

        {/* LEFT CARD */}
        <div
          className="promo-card"
          style={{ backgroundImage: `url(${labBG})` }}
        >
          <div className="promo-overlay">
            <h3 className="promo-subtitle">INTRODUCING</h3>
            <h1 className="promo-title">LATEST DIAGNOSTIC SERVICES</h1>
            <p className="promo-text">
              We introduced latest diagnostic services to Sri Lanka partnering
              with modern diagnosis labs in Asia and Europe.
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          className="promo-card"
          style={{
            backgroundImage: `url(${require("../assets/lab_bg2.jpg")})`
          }}
        >
          <div className="promo-overlay">
            <h3 className="promo-subtitle">INTRODUCING</h3>
            <h1 className="promo-title">LATEST TECHNOLOGIES</h1>
            <p className="promo-text">
              We are in forefront in introducing latest AI technologies for
              healthcare, pharmaceuticals, retails, hospitality, banking and
              real estate in Sri Lanka.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;
