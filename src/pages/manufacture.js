// src/pages/Manufacture.js
import React from "react";
import "../styles/manufacture.css";
import manufactureImg from "../assets/9 pages/manufacture/manufatcure.png";

const Manufacture = () => {
  return (
    <div className="manufacture-page">

      {/* HERO */}
      <section className="manufacture-hero">
        <img src={manufactureImg} alt="Manufacturing" />
      </section>

      {/* INTRO */}
      <section className="manufacture-intro">
        <h2>Our Manufacturing Excellence</h2>
        <p>
          At A Mart Holdings, we are redefining cosmetology and aesthetic wellness through the
          development and manufacturing of scientifically formulated, proven skincare and
          haircare products. As custodians of quality-driven formulations, we combine research,
          innovation, and industry expertise to deliver safe, effective, and results-oriented
          solutions.
        </p>
        <p>
          Our manufacturing capabilities focus on skin, hair, and aesthetic care, offering a holistic
          approach to beauty and self-care. Through strong research partnerships and advanced
          formulation practices, we develop proprietary product ranges that align with the latest
          advancements in cosmetology and dermatological science.
        </p>
        <p>
          Our product portfolio includes brands such as Vital Skin and Pure Herbs, created to
          support both professional treatments and at-home care. Each product is developed with
          strict quality controls to ensure safety, consistency, and long-lasting results.
        </p>
        <p>
          Driven by innovation and a commitment to excellence, we empower individuals to achieve
          healthy, radiant skin and hair through solutions tailored to diverse needs. Every product
          we manufacture reflects our dedication to quality, safety, and industry-leading
          standards, reinforcing our position as a trusted name in cosmetology manufacturing.
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
