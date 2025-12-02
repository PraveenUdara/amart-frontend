// src/pages/AboutUs.js
import React, { useState } from "react";
import aboutUsImg from "../assets/about_bg.jpg";
import "../styles/AboutUs.css";

import missionImg from "../assets/mission.jpg";
import visionImg from "../assets/vision.jpg";
import valuesImg from "../assets/values.jpg";

const AboutUs = () => {
  const sections = {
    mission: {
      key: "mission",
      label: "Our Mission",
      title: "Our Mission",
      image: missionImg,
      text: `Improve patient lives by delivering innovative genetic diagnosis solutions 
and provide high quality pharmaceuticals to government and private market.`,
    },
    vision: {
      key: "vision",
      label: "Our Vision",
      title: "Our Vision",
      image: visionImg,
      text: `To become Sri Lanka’s most trusted healthcare bridge to the world — 
enabling early, accurate, and affordable medical solutions through global-standard 
innovation and technology.`,
    },
    values: {
      key: "values",
      label: "Our Values",
      title: "Our Values",
      image: valuesImg,
      textLines: [
        "Patient-First Care",
        "Innovation & Excellence",
        "Integrity & Trust",
        "Quality & Reliability",
        "Collaboration & Partnership",
      ],
    },
  };

  const [activeKey, setActiveKey] = useState("mission");
  const activeSection = sections[activeKey];

  return (
    <div className="about-page">

      {/* ⭐ HERO IMAGE WITH TEXT OVERLAY */}
      <div className="about-hero">
        <img src={aboutUsImg} alt="About Us" className="about-hero-bg" />
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">About A Mart Holdings</h1>
          <p className="about-hero-subtitle">
            Connecting Sri Lanka to world-class healthcare, diagnostics & technology.
          </p>
        </div>
      </div>

      {/* ⭐ MAIN ABOUT CONTENT CARD */}
      <section className="about-card">
        <p>
          A Mart Holdings partners with world-renowned healthcare providers,
          pharmaceutical manufacturers and diagnostic laboratories to bring the
          latest medical technology, products and services to Sri Lanka.
        </p>

        <p>
          We work with leading diagnostic and research labs in Asia and Europe,
          facilitating patient testing in oncology, hematology and rare diseases.
        </p>

        <p>
          Our medical tourism division ensures patients receive world-class
          healthcare from top hospitals in Singapore and India.
        </p>
      </section>

      {/* ⭐ MISSION / VISION / VALUES MODERN SECTION */}
      <section className="mv-modern">

        {/* HORIZONTAL TABS WITH UNDERLINE ANIMATION */}
        <div className="mv-tabs-modern">
          {Object.values(sections).map((sec) => (
            <button
              key={sec.key}
              className={
                "mv-tab-modern-btn" +
                (activeKey === sec.key ? " mv-tab-modern-active" : "")
              }
              onClick={() => setActiveKey(sec.key)}
            >
              {sec.label}
            </button>
          ))}
          <div
            className="mv-tab-underline"
            style={{
              transform:
                activeKey === "mission"
                  ? "translateX(0%)"
                  : activeKey === "vision"
                  ? "translateX(100%)"
                  : "translateX(200%)",
            }}
          ></div>
        </div>

        {/* CONTENT AREA APPEARS WITH FADE + SLIDE ANIMATION */}
        <div className="mv-cards-container fade-slide">
          <div className="mv-card-image">
            <img
              src={activeSection.image}
              alt={activeSection.title}
              className="mv-modern-img"
            />
          </div>

          <div className="mv-card-text">
            <h3 className="mv-title-modern">{activeSection.title}</h3>

            {activeSection.key !== "values" ? (
              <p className="mv-modern-text">{activeSection.text}</p>
            ) : (
              <ul className="mv-modern-list">
                {activeSection.textLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
