// src/pages/AboutUs.js
import React, { useState } from "react";
import aboutUsImg from "../assets/about_bg.jpg";
import "../styles/AboutUs.css";

// ⬇️ NEW IMAGE IMPORTS FOR MISSION / VISION / VALUES
import missionImg from "../assets/mission.jpg";   // Our Mission image
import visionImg from "../assets/vision.jpg";     // Our Vision image
import valuesImg from "../assets/values.jpg";     // Our Values image

const AboutUs = () => {
  // ⬇️ DATA FOR TABS
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
    <div className="page">
      {/* TOP HERO IMAGE */}
      <div className="about-hero-container">
        <img src={aboutUsImg} alt="About Us" className="about-hero-img" />
      </div>

      {/* MAIN ABOUT TEXT BOX */}
      <div className="about-section">
        <h2 className="about-title">About A Mart Holdings</h2>

        <p className="about-description">
          A Mart Holdings partners with world-renowned healthcare providers,
          pharmaceutical manufacturers and diagnostic laboratories to bring
          the latest medical technology, products and services to Sri Lanka.
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

      {/* ⭐ NEW MISSION / VISION / VALUES SECTION AT BOTTOM */}
      <section className="mv-section">
        {/* LEFT SIDE TABS */}
        <div className="mv-tabs">
          {Object.values(sections).map((sec) => (
            <button
              key={sec.key}
              className={
                "mv-tab-btn" + (activeKey === sec.key ? " mv-tab-btn-active" : "")
              }
              onClick={() => setActiveKey(sec.key)}
            >
              {sec.label}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="mv-content">
          <img
            src={activeSection.image}
            alt={activeSection.title}
            className="mv-image"
          />

          <div className="mv-text-block">
            <p className="mv-small-label">{activeSection.label}</p>
            <h3 className="mv-title">{activeSection.title}</h3>

            {/* Mission & Vision as paragraph, Values as bullet list */}
            {activeSection.key !== "values" ? (
              <p className="mv-text">{activeSection.text}</p>
            ) : (
              <ul className="mv-list">
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
