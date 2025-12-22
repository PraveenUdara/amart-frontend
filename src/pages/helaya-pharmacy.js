// src/pages/helaya-pharmacy.js
import React, { useState } from "react";
import "../styles/helayapharmacy.css";
import helayaCover from "../assets/9 pages/helaya paharmcey.png";
import helacolombo from "../assets/9 pages/helacolombo.webp";
import helkandy from "../assets/9 pages/helkandy.webp";

const HelayaPharmacy = () => {
  const [activeBranch, setActiveBranch] = useState("kandy");

  const branchContent = {
    kandy: {
      title: "Kandy Outlet",
      hours: "Mon - Sun: 8:00 AM - 10:00 PM",
      description: [
        "Serving central Sri Lanka with a full range of prescriptions, OTC essentials, and wellness products.",
        "Ask our pharmacists for medication guidance and personalized support for you and your family.",
      ],
      image: helkandy,
      alt: "Helaya Pharmacy Kandy",
    },
    kohuwala: {
      title: "Kohuwala Outlet",
      hours: "Mon - Sun: 8:00 AM - 10:00 PM",
      description: [
        "Supporting the Colombo suburb with quick access to prescriptions and attentive pharmacist advice.",
        "Drop in for wellness products, medication reviews, and caring service close to home.",
      ],
      image: helacolombo,
      alt: "Helaya Pharmacy Kohuwala",
    },
  };

  const current = branchContent[activeBranch];

  return (
    <div className="helaya-page">
      <section
        className="helaya-cover"
      >
        <img src={helayaCover} alt="Helaya Pharmacy" className="helaya-cover-img" />
        <div className="helaya-cover-overlay">
          <div className="helaya-cover-content">
            <h1>Helaya Pharmacy</h1>
            <p>
              Trusted pharmacy services delivering quality medicines and care.
            </p>
          </div>
        </div>
      </section>

      <section className="helaya-body">
        <p>
          Helaya Pharmacy offers reliable access to essential medicines and
          personalized guidance to support healthier communities.
        </p>
        <div className="helaya-locations">
          <button
            className={`helaya-btn ${activeBranch === "kandy" ? "active" : ""}`}
            onClick={() => setActiveBranch("kandy")}
            type="button"
          >
            Kandy
          </button>
          <button
            className={`helaya-btn ${activeBranch === "kohuwala" ? "active" : ""}`}
            onClick={() => setActiveBranch("kohuwala")}
            type="button"
          >
            Kohuwala
          </button>
        </div>
        <div className="helaya-hours">
          <div className="hour-card">
            <div className="hour-location">Kandy</div>
            <div className="hour-time">Mon - Sun: 8:00 AM - 10:00 PM</div>
          </div>
          <div className="hour-card">
            <div className="hour-location">Kohuwala</div>
            <div className="hour-time">Mon - Sun: 8:00 AM - 10:00 PM</div>
          </div>
        </div>
      </section>

      <section className="branch-feature">
        <div className="branch-image" key={`${activeBranch}-image`}>
          <img src={current.image} alt={current.alt} />
        </div>
        <div className="branch-text" key={`${activeBranch}-text`}>
          <h3>{current.title}</h3>
          <div className="branch-hours">Opening Hours: {current.hours}</div>
          {current.description.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HelayaPharmacy;
