// src/pages/amart-design.js
import React, { useEffect } from "react";
import brandingCover from "../assets/9 pages/design/branding.png";
import "../styles/amartdesign.css";

const BrandingDesign = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".design-reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="design-page">
      <section className="design-hero">
        <img src={brandingCover} alt="Branding and design cover" className="design-hero-img" />
        <div className="design-hero-overlay">
          <div className="design-hero-text">
            <h1>Branding & Design</h1>
            <p>Building memorable identities with purposeful visuals and messaging.</p>
          </div>
        </div>
      </section>

      <section className="design-overview design-reveal">
        <div className="design-overview-text">
          <h2>Distinctive brands that stand out</h2>
          <p>
            From research to rollout, we craft cohesive brand systems that feel authentic,
            modern, and ready for every touchpoint - digital or physical.
          </p>
          <div className="design-tags">
            <span className="tag">Brand Strategy</span>
            <span className="tag">Visual Identity</span>
            <span className="tag">Packaging</span>
            <span className="tag">Digital Design</span>
          </div>
        </div>
        <div className="design-pillars">
          <div className="pillar-card">
            <h3>Research-led</h3>
            <p>Insights-driven discovery to align your brand with audience needs.</p>
          </div>
          <div className="pillar-card">
            <h3>Design systems</h3>
            <p>Scalable guidelines that keep every asset consistent and on-brand.</p>
          </div>
          <div className="pillar-card">
            <h3>Launch support</h3>
            <p>Campaign assets, print collateral, and digital rollouts that land.</p>
          </div>
        </div>
      </section>

      <section className="design-services design-reveal">
        <h2>What we deliver</h2>
        <div className="service-grid">
          <div className="service-card">
            <h4>Identity Systems</h4>
            <p>Logos, typography, and color palettes engineered to work everywhere.</p>
          </div>
          <div className="service-card">
            <h4>Marketing Collateral</h4>
            <p>Brochures, pitch decks, and campaign assets that feel cohesive.</p>
          </div>
          <div className="service-card">
            <h4>Digital Experiences</h4>
            <p>UI design for web and mobile that keeps your brand consistent.</p>
          </div>
          <div className="service-card">
            <h4>Packaging & Print</h4>
            <p>Retail packaging and print pieces that translate strategy into shelf impact.</p>
          </div>
        </div>
      </section>

      <section className="design-cta design-reveal">
        <div className="cta-card">
          <div>
            <h3>Ready to shape your next chapter?</h3>
            <p>Let's align your visual story with your business goals.</p>
          </div>
          <a className="cta-button" href="/contact">Talk to us</a>
        </div>
      </section>
    </div>
  );
};

export default BrandingDesign;
