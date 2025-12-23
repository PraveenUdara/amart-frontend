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
          We provide advanced diagnostic and laboratory services that deliver accurate, timely
          results to support informed healthcare decisions. Using state-of-the-art technology and
          adhering to international quality standards, we offer a comprehensive range of testing
          solutions, including Pathology, Hematology, Oncology, hereditary and rare disease
          testing, screening and carrier testing, and personalized treatment support.
        </p>
        <p>
          Our expert team is committed to precision, efficiency, and reliability, ensuring seamless
          testing experiences for hospitals, clinics, and individual patients. Every test is conducted
          with the highest level of accuracy to support clinicians in diagnosis, early detection, and
          effective treatment planning.
        </p>
        <p>
          By continuously integrating the latest advancements in diagnostic science, we contribute
          to improved health outcomes and enhanced patient care—helping build a healthier
          community through dependable and high-quality diagnostics.
        </p>
        <div className="diagnostics-cta">
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
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
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
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
          <a className="diag-contact-btn" href="/contact">Contact Us</a>
        </div>
        <div className="centogene-image">
          <img src={centogImg} alt="Centogene" />
        </div>
      </section>

    </div>
  );
};

export default Diagnostics;
