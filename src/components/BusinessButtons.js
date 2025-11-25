// src/components/BusinessButtons.js
import React from "react";
import "../index.css";

// Import images
import pharmaImg from "../assets/pharma.jpg";
import diagnosticsImg from "../assets/diagnostics.jpg";
import tourismImg from "../assets/tourism.jpg";
import helayaPharmacyImg from "../assets/helaya_pharmacy.webp";
import helayaInternationalImg from "../assets/helaya_international.jpg";
import brandingImg from "../assets/amart_branding.jpg";
import helayaClinicImg from "../assets/helaya_clinic.jpg";
import expiaImg from "../assets/expia.jpg";  // NEW

const BusinessButtons = () => {

  const items = [
    { title: "Pharmaceuticals", image: pharmaImg },
    { title: "Medical Diagnostics", image: diagnosticsImg },
    { title: "Medical Tourism", image: tourismImg },
    { title: "Helaya Pharmacy", image: helayaPharmacyImg },
    { title: "Helaya International", image: helayaInternationalImg },
    { title: "A Mart Branding & Design", image: brandingImg },
    { title: "Helaya Clinic", image: helayaClinicImg },
    { title: "Expia", image: expiaImg },   // NEW BUTTON
  ];

  return (
    <div className="business-buttons-container">
      {items.map((btn, index) => (
        <div className="business-btn-card" key={index}>
          <img src={btn.image} className="business-btn-img" alt={btn.title} />

          <div className="business-btn-overlay">
            <h3>{btn.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessButtons;

