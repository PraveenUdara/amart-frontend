// src/pages/diagnostics.js
import React from "react";
import "../styles/diagnostics.css";

// COVER IMAGE
import diagnosticsCover from "../assets/9 pages/diagnostics.jpg";
import medgenomeImg from "../assets/9 pages/diagnostic/Medgenome.webp";
import centogImg from "../assets/9 pages/diagnostic/centog.webp";

const Diagnostics = () => {
  return (
    <div className="business-page">

      {/* ================= COVER SECTION ================= */}
      <section
        className="business-cover"
        style={{ backgroundImage: `url(${diagnosticsCover})` }}
      >
        <div className="business-cover-overlay">
          <div className="business-cover-content">
            <h1 className="business-cover-title">Diagnostics</h1>
            <p className="business-cover-desc">
              Advanced laboratory diagnostics powered by global partner labs and
              cutting-edge medical technology.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PAGE CONTENT ================= */}
      <section className="business-content">
        <h2>World-Class Diagnostic Services</h2>
        <p>
          A Mart Diagnostics delivers accurate, timely, and reliable diagnostic
          services through partnerships with internationally accredited
          laboratories.
        </p>
      </section>

      {/* ================= MEDGENOME FEATURE ================= */}
      <section className="medgenome-section">
        <div className="medgenome-image">
          <img src={medgenomeImg} alt="MedGenome" />
        </div>
        <div className="medgenome-copy">
          <h3>Medgenome</h3>
          <p>
            MedGenome is a genomics and clinical data driven genetic testing and drug
            discovery research company and a leader in genetic testing with expertise
            in identifying genetic mutations using simultaneous genome sequencing and
            clinical data analysis.
          </p>
          <p>
            With the state-of-the-art Next Generation Sequencing (NGS) facility,
            MedGenome is one of the highest throughput NGS & CAP accredited lab in
            South Asia. MedGenome offers comprehensive diagnostic solutions to
            researchers, doctors and hospitals.
          </p>
          <p className="medgenome-cta">Contact us to arrange a test.</p>
        </div>
      </section>

      {/* ================= CENTOGENE FEATURE ================= */}
      <section className="centogene-section">
        <div className="centogene-copy">
          <h3>CENTOGENE</h3>
          <p>
            Centogene is one of the largest genetic biotech companies worldwide, the
            European market leader, and one of the global leaders in genetic
            diagnostic analyses of rare inherited diseases.
          </p>
          <p>
            Centogene is focused on transforming clinical, genetic, and biochemical
            data into medical solutions for patients with a global network of
            partners.
          </p>
          <p>
            Click here to learn more about Centogene’s diagnostic services.
          </p>
          <p className="centogene-cta">Contact us to arrange a test.</p>
        </div>
        <div className="centogene-image">
          <img src={centogImg} alt="Centogene" />
        </div>
      </section>

    </div>
  );
};

export default Diagnostics;
