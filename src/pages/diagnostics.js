// src/pages/diagnostics.js
import React from "react";
import "../styles/diagnostics.css";

// COVER IMAGE
import diagnosticsCover from "../assets/9 pages/diagnostics.jpg";

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

    </div>
  );
};

export default Diagnostics;
