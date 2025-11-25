// src/pages/Home.js
import React from "react";
import "../index.css";
import BusinessButtons from "../components/BusinessButtons";

import homeBg from "../assets/home_bg.jpg";
import leftPost from "../assets/lab_bg.jpg";
import rightPost from "../assets/lab_bg2.jpg";

const Home = () => {
  return (
    <div className="home">

      {/* MAIN HERO SECTION */}
      <div className="hero-section">
        <img src={homeBg} alt="Home Background" className="home-bg" />

        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to A Mart Holdings</h1>

            <p className="hero-text">
              A Mart Holdings partners with world-renowned healthcare providers,
              pharmaceutical manufacturers and diagnostic laboratories to bring the
              latest medical technology, products and services to Sri Lanka.
            </p>

            <p className="hero-text">
              We are agents for world-leading diagnostic and research labs in Asia and
              Europe, facilitating patient testing in oncology, hematology and rare
              diseases.
            </p>

            <p className="hero-text">
              Our medical tourism arm helps patients access top healthcare from leading
              hospitals in Singapore and India.
            </p>
          </div>
        </div>
      </div>

      {/* LEFT & RIGHT MINI POSTS */}
      <div className="home-post-section">
        <div className="home-post-card">
          <img src={leftPost} alt="Diagnostics" className="post-img" />
          <div className="post-overlay">
            <h2>Introducing</h2>
            <h1>Latest Diagnostic Services</h1>
            <p>
              We introduced latest diagnostic services to Sri Lanka partnering
              with modern diagnosis labs in Asia and Europe.
            </p>
          </div>
        </div>

        <div className="home-post-card">
          <img src={rightPost} alt="Technologies" className="post-img" />
          <div className="post-overlay">
            <h2>Introducing</h2>
            <h1>Latest Technologies</h1>
            <p>
              We are in forefront in introducing latest AI technologies for healthcare,
              pharmaceuticals, retails, hospitality, banking and real estate in Sri Lanka.
            </p>
          </div>
        </div>
      </div>

      {/* NEW BUSINESS BUTTONS SECTION */}
      <BusinessButtons />

    </div>
  );
};

export default Home;
