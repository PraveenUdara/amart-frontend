// src/pages/pharmaceuticals.js
import React from "react";
import pharmaCover from "../assets/9 pages/pharmaceuticals.jpg";
import "../styles/pharma.css";

const Pharmaceuticals = () => {
  return (
    <div>

      {/* COVER IMAGE */}
      <div className="pharma-hero">
        <img src={pharmaCover} alt="Pharmaceuticals" />
        <div className="pharma-hero-text">
          <h1>Pharmaceuticals</h1>
          <p>
            High-quality medicines and healthcare solutions with global partners.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Pharmaceuticals;
