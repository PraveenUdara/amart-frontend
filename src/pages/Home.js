// src/pages/Home.js
import React, { useState, useEffect } from "react";
import "../index.css";
import BusinessButtons from "../components/BusinessButtons";

// HERO IMAGES
import homeBg from "../assets/home_bg.jpg";
import doctorHero from "../assets/hero_diagnostics.jpg";
import diagnosticsHero from "../assets/labcv.jpg";
import techHero from "../assets/hero_tech_healthcare.jpg";

// MINI POSTS
import leftPost from "../assets/lab_bg.jpg";
import rightPost from "../assets/lab_bg2.jpg";
import doctorsImg from "../assets/doctors.png";

import "../styles/Home.css";

// DEFAULT PREVIEW IMAGE
import defaultPreview from "../assets/businessPreview/default.jpg";

/* ---------------------------------
   HERO SLIDES (IMAGE + TEXT)
---------------------------------- */
const HERO_SLIDES = [
  {
    image: homeBg,
    title: "Diagnostics",
    desc: "Advanced laboratory diagnostics with global partner labs",
  },
  {
    image: doctorHero,
    title: "Pharmaceuticals",
    desc: "High-quality medicines and healthcare solutions",
  },
  {
    image: diagnosticsHero,
    title: "Medical Tourism",
    desc: "Access world-class treatment in Singapore & India",
  },
  {
    image: techHero,
    title: "Clinic",
    desc: "Patient-focused clinical care with modern technology",
  },
];

const Home = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  /* ---------------- HERO SLIDER (OPTION A) ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500); // smooth timing

    return () => clearInterval(interval);
  }, []);

  const currentSlide = HERO_SLIDES[heroIndex];

  /* ---------------- BUSINESS PREVIEW ---------------- */
  const defaultHoverData = {
    preview: defaultPreview,
  };

  const [hoverData, setHoverData] = useState(defaultHoverData);

  return (
    <div className="home">

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">

        {/* HERO IMAGES */}
        {HERO_SLIDES.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.title}
            className={`home-bg ${index === heroIndex ? "active" : ""}`}
          />
        ))}

        {/* RIGHT-BOTTOM CONTENT */}
        <div className="hero-overlay hero-overlay-right">
          <div className="hero-content hero-content-right">

            {/* MAIN BRAND MESSAGE — DO NOT REMOVE */}
            <h1 className="hero-title fade-in delay-1">
              Welcome to A Mart Holdings
            </h1>

            <p className="hero-text hero-text-strong fade-in delay-2">
              One of Sri Lanka’s fastest-growing conglomerates, built on
              innovation, leadership, and trust.
            </p>

            {/* SLIDE LABEL */}
            <div key={heroIndex} className="hero-slide-info">
              <h3 className="hero-slide-title">
                {currentSlide.title}
              </h3>
              <p className="hero-slide-desc">
                {currentSlide.desc}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MINI POSTS ================= */}
      <section className="home-post-section">
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
      </section>

      {/* ================= BUSINESS SECTION ================= */}
      <section className="business-section-wrapper">
        <div className="business-left-content">
          <img
  src={hoverData?.preview || defaultPreview}
  alt="Preview"
  className="business-preview-image"
/>

            
          
        </div>

        <BusinessButtons
          onHoverChange={setHoverData}
          resetPreview={() => setHoverData(defaultHoverData)}
        />
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="choose-section">
        <div className="choose-left">
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

        <div className="choose-right">
          <img src={doctorsImg} alt="Medical Team" />
        </div>
      </section>

      {/* ================= QUALITY DATA ================= */}
      <section className="quality-section">
        <h2 className="quality-title">Quality Data</h2>

        <div className="quality-grid">
          <div className="quality-card">
            <h3>94.82%</h3>
            <span className="divider"></span>
            <p>Patient Satisfaction Rate on Services</p>
          </div>

          <div className="quality-card">
            <h3>97.30%</h3>
            <span className="divider"></span>
            <p>Compliance to Correct Patient Identification</p>
          </div>

          <div className="quality-card">
            <h3>88.33%</h3>
            <span className="divider"></span>
            <p>Hand Hygiene Compliance</p>
          </div>

          <div className="quality-card">
            <h3>0.09%</h3>
            <span className="divider"></span>
            <p>Rate of Hospital Acquired Infections</p>
          </div>

          <div className="quality-card">
            <h3>0.17%</h3>
            <span className="divider"></span>
            <p>Adverse Drug Reaction</p>
          </div>

          <div className="quality-card">
            <h3>0.00%</h3>
            <span className="divider"></span>
            <p>Rate of Hospital Acquired Bed Sores</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
