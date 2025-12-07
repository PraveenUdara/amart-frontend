// src/pages/AboutUs.js
import React, { useState } from "react";
import aboutUsImg from "../assets/about_bg.jpg";
import "../styles/AboutUs.css";

import missionImg from "../assets/mission.jpg";
import visionImg from "../assets/vision.jpg";
import valuesImg from "../assets/values.jpg";
import chairmanImg from "../assets/chairman.jpg"; // <-- Add Chairman Image

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

      {/* ⭐ HERO SECTION (TEXT BOTTOM RIGHT) */}
      <div className="about-hero">
        <img src={aboutUsImg} alt="About Us" className="about-hero-bg" />

        <div className="about-hero-overlay">
          <h1 className="about-hero-title">About A Mart Holdings</h1>
          <p className="about-hero-subtitle">
            Connecting Sri Lanka to world-class healthcare, diagnostics & technology.
          </p>
        </div>
      </div>

      {/* ⭐ MAIN ABOUT PARAGRAPH (WIDE VERSION) */}
      <section className="about-card">
        <p>
          A Mart is one of Sri Lanka’s fastest growing companies, built on a foundation
          of ambition, resilience, and innovation. From humble beginnings in 2018, the
          company has rapidly evolved and successfully diversified into several key
          sectors including Pharmaceuticals, Diagnostics, Medical Tourism, Branding &
          Design, Helaya Pharmacy, Helaya International (based in Dubai, UAE), and
          Power & Energy. Today, A Mart is also a trusted healthcare delivery partner to
          the Government of Sri Lanka, strengthening national capability.
        </p>

        <p>
          Our strategic objective is reinforcing our core operational strengths, while
          boldly exploring new opportunities in emerging markets. Guided by an energetic
          and forward-thinking leadership team, A Mart has consistently entered and
          excelled in challenging business environments, becoming one of the most
          distinguished and respected business entities in the country.
        </p>

        <p>
          At the heart of our success is our greatest asset — our people. Our loyal,
          committed, and highly skilled professionals fuel our growth with passion and
          expertise. Their dedication empowers us to stay ahead of the curve, embrace
          innovation, and expand into promising new industries with confidence and
          purpose.
        </p>

        <p>
          We operate with a purpose-driven mindset, leveraging cutting-edge technology
          and an adaptive approach that blends visionary thinking with strong technical
          execution. This unique balance enables us to redefine industry standards and
          create meaningful impact across all the sectors we serve.
        </p>

        <p>
          As we continue to grow, our unwavering commitment to quality, innovation, and
          customer satisfaction remains central to everything we do. At A Mart, we do
          more than envision the future — we shape it. Together with our partners,
          employees, and community, we are building a stronger, healthier, and more
          prosperous Sri Lanka.
        </p>
      </section>

      {/* ⭐ TABS: MISSION / VISION / VALUES */}
      <section className="mv-modern">
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

          {/* Moving Underline */}
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

        {/* CONTENT WITH IMAGE + TEXT */}
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

      {/* ⭐ CHAIRMAN MESSAGE SECTION */}
      <section className="chairman-section">
        <div className="chairman-content">
          <h2 className="chairman-title">Chairman’s Message</h2>
          <p className="chairman-text">
            At A Mart Holdings, our journey has always been guided by a bold vision:
            to elevate Sri Lanka’s healthcare landscape through innovation, global
            partnerships, and unwavering commitment to excellence. Together, we are
            shaping a healthier and more prosperous future for our nation.
          </p>
        </div>

        <div className="chairman-image-wrapper">
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
