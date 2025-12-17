// src/pages/pharmaceuticals.js
import React, { useEffect } from "react";
import pharmaCover from "../assets/9 pages/pharmaceuticals.jpg";
import pharmaImage2 from "../assets/9 pages/ph2.jpg";
import "../styles/pharma.css";

const Pharmaceuticals = () => {

  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pharma-page">

      {/* ================= HERO ================= */}
      <div className="pharma-hero">
        <img src={pharmaCover} alt="Pharmaceuticals" />
        <div className="pharma-hero-text">
          <h1>Pharmaceuticals</h1>
          <p>
            High-quality medicines and healthcare solutions with global partners.
          </p>
        </div>
      </div>

      {/* ================= INFO SECTION ================= */}
      <section className="pharma-info reveal">
        <div className="pharma-text">
          <h2>Pharmaceuticals</h2>
          <p>
            We are one of the top and well respected pharmaceutical distributors in Sri Lanka.
            We supply pharmaceutical drugs and surgical devices to the state hospitals, private
            hospitals and pharmacy stores around the country.
          </p>

          {/* CERTIFICATIONS */}
          <div className="pharma-certifications">
            <div className="cert-badge">ISO Certified</div>
            <div className="cert-badge">GMP Compliant</div>
            <div className="cert-badge">NMRA Approved</div>
          </div>

          {/* CTA */}
          <div className="pharma-cta">
            <a href="/contact">Contact Us</a>
          </div>
        </div>

        <div className="pharma-image-wrap">
          <img
            src={pharmaCover}
            alt="Pharmaceutical distribution"
            className="pharma-info-image"
          />
        </div>
      </section>

      {/* ================= QUALITY SECTION ================= */}
      <section className="pharma-quality reveal">
        <div className="pharma-quality-image">
          <img src={pharmaImage2} alt="Quality pharmaceutical products" />
        </div>

        <div className="pharma-quality-text">
          <h3>Latest and highest quality products</h3>

          <p>
            We are committed to introducing the latest and highest quality pharmaceutical
            products to Sri Lanka, enriching the lives of people across the country.
          </p>

          <p>
            We supply premium medicines sourced globally, stored under recommended temperature
            conditions to maintain effectiveness, with proper NMRA certifications.
          </p>

          <p>
            For over two decades, our management has contributed to the healthcare industry by
            introducing high-quality and innovative pharmaceutical solutions.
          </p>

          <p>
            Health is our priority, and we ensure the highest standards in every product we offer.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Pharmaceuticals;
