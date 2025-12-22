// src/pages/AboutUs.js
import React, { useState } from "react";
import aboutUsImg from "../assets/about_bg.jpg";
import "../styles/AboutUs.css";

import missionImg from "../assets/mission.jpg";
import visionImg from "../assets/vision.jpg";
import valuesImg from "../assets/values.jpg";
import chairmanImg from "../assets/chairman.jpg";

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
      text: `To become Sri Lanka's most trusted healthcare bridge to the world,
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

      {/* HERO */}
      <div className="about-hero">
        <img src={aboutUsImg} alt="About Us" className="about-hero-bg" width="1600" height="800" />

        <div className="about-hero-overlay">
          <div className="about-hero-inner">
            <h1 className="about-hero-title fade-in-up">About A Mart Holdings</h1>
            <p className="about-hero-subtitle fade-in-up delay-1">
              Connecting Sri Lanka to world-class healthcare, diagnostics and technology.
            </p>
          </div>
        </div>
      </div>

      {/* HIGHLIGHT CARDS */}
      <div className="about-highlight">
        <div className="highlight-card fade-up">
          <span className="highlight-label">Founded</span>
          <span className="highlight-value">2018</span>
          <span className="highlight-note">Built on ambition, resilience, and innovation.</span>
        </div>
        <div className="highlight-card fade-up delay-1">
          <span className="highlight-label">Business Verticals</span>
          <span className="highlight-value">7+</span>
          <span className="highlight-note">Pharma, diagnostics, medical tourism, design and more.</span>
        </div>
        <div className="highlight-card fade-up delay-2">
          <span className="highlight-label">Global Network</span>
          <span className="highlight-value">Worldwide</span>
          <span className="highlight-note">Trusted partnerships and international certifications.</span>
        </div>
      </div>

      {/* MAIN ABOUT */}
      <section className="about-card fade-up">
        <p>
          A Mart is one of Sri Lanka's fastest growing companies, built on a foundation
          of ambition, resilience, and innovation. From humble beginnings in 2018, the
          company rapidly diversified into Pharmaceuticals, Diagnostics, Medical Tourism,
          Branding & Design, Helaya Pharmacy, Helaya International (Dubai), and Power & Energy.
        </p>

        <p>
          Our strategic objective is reinforcing core strengths while exploring emerging markets.
          Guided by an energetic leadership team, A Mart consistently enters and excels in
          challenging environments, becoming one of the most respected business entities in the country.
        </p>

        <p>
          At the heart of our success is our greatest asset — our people. Loyal, committed, and
          highly skilled professionals fuel our growth with passion and expertise. Their dedication
          empowers us to stay ahead, embrace innovation, and expand into new industries with confidence.
        </p>

        <p>
          We operate with a purpose-driven mindset, leveraging technology and adaptive thinking to
          redefine standards and create impact across every sector we serve.
        </p>

        <p>
          Our commitment to quality, innovation, and customer satisfaction remains central to everything we do.
          At A Mart, we shape the future alongside our partners, employees, and community.
        </p>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="mv-modern fade-up">
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

        <div className="mv-cards-container">
          <div className="mv-card-image fade-up">
            <img
              src={activeSection.image}
              alt={activeSection.title}
              width="640"
              height="400"
              className="mv-modern-img"
            />
          </div>

          <div className="mv-card-text fade-up delay-1">
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

      {/* CHAIRMAN MESSAGE */}
      <section className="chairman-section fade-up">
        <div className="chairman-content">
          <h2 className="chairman-title">Chairman's Message</h2>
          <p className="chairman-text">
            Our journey is guided by a bold vision: to elevate Sri Lanka's healthcare landscape
            through innovation, global partnerships, and unwavering commitment to excellence.
            Together, we are shaping a healthier and more prosperous future for our nation.
          </p>
        </div>

        <div className="chairman-image-wrapper fade-up delay-1">
          <img
            src={chairmanImg}
            alt="Chairman - A Mart Holdings"
            className="chairman-image"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
