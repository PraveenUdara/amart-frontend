// src/pages/Manufacture.js
import React from "react";
import "../styles/Manufacture.css";
import manufactureImg from "../assets/manufacture.jpg";

const Manufacture = () => {
  return (
    <div className="manufacture-page">

      {/* HERO */}
      <section className="manufacture-hero">
        <img src={manufactureImg} alt="Manufacturing" />
        <div className="manufacture-hero-overlay">
          <h1>Manufacturing</h1>
          <p>
            Quality-driven pharmaceutical and healthcare manufacturing solutions
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="manufacture-intro">
        <h2>Our Manufacturing Excellence</h2>
        <p>
          A Mart Manufacturing focuses on delivering high-quality pharmaceutical
          and healthcare products through modern production facilities, strict
          quality controls, and international compliance standards.
        </p>
      </section>

      {/* FEATURES */}
      <section className="manufacture-features">
        <div className="feature-card">
          <h3>GMP Standards</h3>
          <p>
            Our facilities operate under Good Manufacturing Practices to ensure
            product safety, consistency, and reliability.
          </p>
        </div>

        <div className="feature-card">
          <h3>Advanced Technology</h3>
          <p>
            We use modern equipment and automated processes to maintain precision
            and efficiency.
          </p>
        </div>

        <div className="feature-card">
          <h3>Quality Assurance</h3>
          <p>
            Every product undergoes rigorous testing to meet international
            healthcare standards.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Manufacture;
