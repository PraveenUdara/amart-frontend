// src/pages/Home.js
import React, { useState, useEffect } from "react";
import "../index.css";
import BusinessButtons from "../components/BusinessButtons";

// HERO IMAGES
import homeBg from "../assets/home_bg.jpg";
import doctorHero from "../assets/hero_diagnostics.jpg";
import diagnosticsHero from "../assets/hero_diagnostics.jpg";
import techHero from "../assets/hero_tech_healthcare.jpg";

import leftPost from "../assets/lab_bg.jpg";
import rightPost from "../assets/lab_bg2.jpg";
import doctorsImg from "../assets/doctors.png";

import "../styles/Home.css";

const HERO_IMAGES = [homeBg, doctorHero, diagnosticsHero, techHero];

const Home = () => {
  /* --------------------------- HERO SLIDER --------------------------- */
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* ---------------------- BUSINESS HOVER DATA ------------------------ */
  const [hoverData, setHoverData] = useState(null);

  return (
    <div className="home">

      {/* ⭐ HERO SECTION WITH FADE SLIDER */}
      <div className="hero-section">
        {HERO_IMAGES.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Hero Slide"
            className={`home-bg ${index === heroIndex ? "active" : ""}`}
          />
        ))}

        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to A Mart Holdings</h1>

            <p className="hero-text">
              A Mart Holdings partners with world-renowned healthcare providers,
              pharmaceutical manufacturers and diagnostic laboratories to bring
              the latest medical technology to Sri Lanka.
            </p>

            <p className="hero-text">
              We facilitate diagnostics, oncology, hematology and rare disease
              testing through leading international labs.
            </p>

            <p className="hero-text">
              Our medical tourism arm connects patients to top hospitals in
              Singapore and India.
            </p>
          </div>
        </div>
      </div>

      {/* MINI POSTS */}
      <div className="home-post-section">

        <div className="home-post-card">
          <img src={leftPost} alt="Diagnostics" className="post-img" />
          <div className="post-overlay">
            <h2>Introducing</h2>
            <h1>Latest Diagnostic Services</h1>
            <p>
              We bring advanced diagnostic services to Sri Lanka through leading labs.
            </p>
          </div>
        </div>

        <div className="home-post-card">
          <img src={rightPost} alt="Technologies" className="post-img" />
          <div className="post-overlay">
            <h2>Introducing</h2>
            <h1>Latest Technologies</h1>
            <p>
              We introduce AI-driven technologies for healthcare, retail and finance.
            </p>
          </div>
        </div>

      </div>

      {/* ⭐ BUSINESS SECTION — PREVIEW LEFT + GRID RIGHT */}
      <div className="business-section-wrapper">

        {/* LEFT PREVIEW BOX */}
        <div className="business-left-content">
          {!hoverData ? (
            <>
              <h2 className="hover-title">Business Overview</h2>
              <p className="hover-description">
                Hover over a business to see details.
              </p>
            </>
          ) : (
            <>
              {/* Preview image */}
              {hoverData.preview && (
                <img
                  src={hoverData.preview}
                  alt="Preview"
                  className="business-preview-image"
                />
              )}

              <h2 className="hover-title">{hoverData.title}</h2>
              <p className="hover-description">{hoverData.desc}</p>
            </>
          )}
        </div>

        {/* RIGHT SIDE — BUSINESS CARDS */}
        <BusinessButtons onHoverChange={setHoverData} />

      </div>

      {/* ⭐ WHY CHOOSE US SECTION */}
      <section className="choose-section">
        <div className="choose-content">
          <h2>Why Patients Choose Us</h2>

          <p>
            A Mart Health works with highly experienced specialists to deliver
            evidence-based care using modern medical technologies.
          </p>

          <p>
            We provide preventive healthcare, diagnostic services and lifestyle
            treatments for long-term wellness.
          </p>

          <p>
            All A Mart facilities follow international patient safety standards.
          </p>
        </div>

        <div className="choose-image">
          <img src={doctorsImg} alt="Medical Team" />
        </div>
      </section>

    </div>
  );
};

export default Home;
