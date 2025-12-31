// src/pages/helaya-international.js
import React, { useEffect } from "react";
import intlCover from "../assets/9 pages/international/international.png";
import "../styles/helaya-international.css";

const HelayaInternational = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".intl-reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="intl-page">
      <section className="intl-hero">
        <img src={intlCover} alt="Helaya International cover" className="intl-hero-img" />
        <div className="intl-hero-overlay">
          <div className="intl-hero-text">
            <h1>Helaya International</h1>
            <p>Global sourcing and distribution with quality-first standards.</p>
          </div>
        </div>
      </section>

      <section className="intl-body intl-reveal">
        <div className="intl-text">
          <h2>Worldwide reach, trusted partners</h2>
          <p>
            We connect with leading manufacturers and logistics partners to ensure consistent, compliant delivery
            of pharmaceuticals and medical supplies across borders.
          </p>
          <div className="intl-tags">
            <span className="tag">Global sourcing</span>
            <span className="tag">Quality control</span>
            <span className="tag">Cold-chain</span>
            <span className="tag">Compliance</span>
          </div>
        </div>
        <div className="intl-grid">
          <div className="intl-card">
            <h3>Supply integrity</h3>
            <p>Audited suppliers, traceable batches, and strict storage protocols end-to-end.</p>
          </div>
          <div className="intl-card">
            <h3>Logistics expertise</h3>
            <p>Coordinated freight and customs support to keep timelines predictable.</p>
          </div>
          <div className="intl-card">
            <h3>Regulatory alignment</h3>
            <p>Documentation and certifications aligned with destination requirements.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelayaInternational;
