// src/pages/medical-tourism.js
import React, { useEffect, useState } from "react";
import "../styles/tourism.css";
import tourismCover from "../assets/9 pages/medicaltcover.jpg";
import indiaImage from "../assets/9 pages/medicalt/MH.jpg";
import asterImage from "../assets/9 pages/medicalt/A-CMI.jpg";
import apolloImage from "../assets/9 pages/medicalt/appolo.webp";
import ggImage from "../assets/9 pages/medicalt/GG.webp";
import mountImage from "../assets/9 pages/medicalt/Mount-Elizabeth_novena.jpg";
import mountElizabethImage from "../assets/9 pages/medicalt/mounitel.jpg";
import parkwayImage from "../assets/9 pages/medicalt/pak-east.jpg";
import gleneaglesImage from "../assets/9 pages/medicalt/gleneagles.jpg";
import pccImage from "../assets/9 pages/medicalt/pcc.jpg";

const hospitalData = {
  india: [
    {
      id: "manipal",
      title: "Manipal Hospitals",
      image: indiaImage,
      reverse: false,
      description: [
        "Manipal Hospital offers 56 specialties under one roof with advanced technology and clinicians known for precise diagnostics and treatment.",
        "From robotic surgery to centers of excellence, patients from over 30 countries choose Manipal for comprehensive care and modern facilities.",
      ],
    },
    {
      id: "aster",
      title: "Aster CMI Hospital Bengaluru",
      image: asterImage,
      reverse: true,
      description: [
        "Aster CMI is a 500-bed facility delivering primary to quaternary care with excellence across cardiac sciences, neurosciences, gastroenterology, liver care, and more.",
        "Multidisciplinary teams provide integrated plans, from women's health to organ transplant and rehabilitative services.",
      ],
    },
    {
      id: "apollo",
      title: "Apollo Hospitals, Chennai",
      image: apolloImage,
      reverse: false,
      description: [
        "Apollo's flagship in Chennai spans 60+ departments led by internationally trained doctors, offering cutting-edge procedures and advanced facilities.",
        "International patients are guided by experienced staff who coordinate travel, admission, and aftercare for a seamless experience.",
      ],
    },
    {
      id: "gleneagles-india",
      title: "Gleneagles Global Hospitals",
      image: ggImage,
      reverse: true,
      description: [
        "Gleneagles Global Hospitals pioneer multi-organ transplants and advanced care in hepatology, nephrology, bariatrics, and gastroenterology.",
        "Hospitals in Mumbai, Bengaluru, Chennai, and Hyderabad pair state-of-the-art infrastructure with a commitment to clinical excellence.",
      ],
    },
  ],
  singapore: [
    {
      id: "novena",
      title: "Mount Elizabeth Novena Hospital, Singapore",
      image: mountImage,
      reverse: true,
      description: [
        "Mount Elizabeth Novena blends luxury interiors with world-class care, upholding Singapore's reputation for excellence.",
        "International patient teams advise on special needs, cost estimates, and after-visit support to keep care transparent and comfortable.",
      ],
    },
    {
      id: "mount-elizabeth",
      title: "Mount Elizabeth Hospital, Singapore",
      image: mountElizabethImage,
      reverse: false,
      description: [
        "Serving the Asia-Pacific for 30+ years, Mount Elizabeth pairs top specialists with leading technology across oncology, cardiology, and more.",
        "The hospital holds Joint Commission International accreditation, ensuring consistent quality and patient safety.",
      ],
    },
    {
      id: "parkway-east",
      title: "Parkway East Hospital, Singapore",
      image: parkwayImage,
      reverse: true,
      description: [
        "General acute care with specialties spanning OB-GYN, general and orthopaedic surgery, ENT, and ophthalmology, supported by on-site rehab and imaging.",
        "JCI accreditation reflects Parkway East’s focus on clinical quality for patients and staff alike.",
      ],
    },
    {
      id: "gleneagles-sg",
      title: "Gleneagles Hospital, Singapore",
      image: gleneaglesImage,
      reverse: false,
      description: [
        "Specialist, diagnostic, and imaging services across oncology, cardiology, transplant, gastroenterology, orthopaedics, and women's health.",
        "JCI accredited since 2006, Gleneagles emphasizes patient safety and consistent outcomes.",
      ],
    },
    {
      id: "pcc",
      title: "Parkway Cancer Centre, Singapore",
      image: pccImage,
      reverse: true,
      description: [
        "Comprehensive cancer care delivered by a multidisciplinary team of doctors, nurses, counsellors, and allied professionals.",
        "Advanced therapies and supportive care ensure each visit is as effective and comfortable as possible.",
      ],
    },
  ],
};

const MedicalTourism = () => {
  const [activeCountry, setActiveCountry] = useState("india");

  useEffect(() => {
    const elements = document.querySelectorAll(".tourism-reveal");
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
  }, [activeCountry]);

  return (
    <div className="tourism-page">

      {/* COVER */}
      <section
        className="tourism-cover"
        style={{ backgroundImage: `url(${tourismCover})` }}
      >
        <div className="tourism-overlay">
          <div className="tourism-cover-content">
            <h1>Medical Tourism</h1>
            <p>
              Access world-class treatment through our global hospital network with end-to-end support.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="tourism-content">
        <div className="tourism-intro">
          <h2>International Care, Guided Locally</h2>
          <p>
            Access leading hospitals in India and Singapore with travel guidance, appointments, and aftercare,
            so every step feels clear and supported.
          </p>
        </div>

        <div className="tourism-tabs">
          <button
            className={`tourism-tab ${activeCountry === "india" ? "active" : ""}`}
            onClick={() => setActiveCountry("india")}
            type="button"
          >
            India
          </button>
          <button
            className={`tourism-tab ${activeCountry === "singapore" ? "active" : ""}`}
            onClick={() => setActiveCountry("singapore")}
            type="button"
          >
            Singapore
          </button>
        </div>

        <div className="tourism-tab-panel" key={activeCountry}>
          {hospitalData[activeCountry].map(hospital => (
            <div
              key={hospital.id}
              className={`tourism-split ${hospital.reverse ? "tourism-split-reverse" : ""} tourism-reveal`}
            >
              <div className="tourism-image">
                <img src={hospital.image} alt={hospital.title} loading="lazy" />
              </div>
              <div className="tourism-copy">
                <h3>{hospital.title}</h3>
                {hospital.description.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default MedicalTourism;
