// src/pages/medical-tourism.js
import React, { useState } from "react";
import "../styles/tourism.css";
import tourismCover from "../assets/9 pages/medicaltcover.jpg";
import indiaImage from "../assets/9 pages/medicalt/MH.jpg";
import asterImage from "../assets/9 pages/medicalt/A-CMI.jpg";
import apolloImage from "../assets/9 pages/medicalt/appolo.webp";
import ggImage from "../assets/9 pages/medicalt/GG.webp";
import mountImage from "../assets/9 pages/medicalt/Mount-Elizabeth_novena.jpg";
import mountElizabethImage from "../assets/9 pages/medicalt/mounitel.jpg";
import parkwayImage from "../assets/9 pages/medicalt/pak-east.jpg";

const MedicalTourism = () => {
  const [activeCountry, setActiveCountry] = useState("india");

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

      {/* PLACEHOLDER CONTENT */}
      <section className="tourism-content">
        <h2>International Care, Guided Locally</h2>
        <p>
          We help our clients to seek treatment in world leading hospitals in Singapore and India. A-mart
          works closely with a network of extensively equipped and accredited hospitals with internationally
          qualified consultants and world-class laboratories.
        </p>

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

        <div className="tourism-tab-panel">
          {activeCountry === "india" ? (
            <>
              <div className="tourism-split">
                <div className="tourism-image">
                  <img src={indiaImage} alt="Manipal Hospitals India" />
                </div>
                <div className="tourism-copy">
                  <h3>Manipal Hospitals</h3>
                  <p>
                    Manipal Hospital has 56 specialties offered under one roof to bring in enhanced
                    health delivery for the patients. The hospital is fast becoming a preferred
                    destination for patients from over 30 countries.
                  </p>
                  <p>
                    There are specialized centers where you can get comprehensive care. The latest
                    technological advancements are all available for your patient’s service. Hospital
                    also perform Robotic Surgery. With the use of latest technological advancements,
                    Manipal Hospital able to diagnose the ailment accurately and able to provide the
                    best possible treatment.
                  </p>
                </div>
              </div>

              <div className="tourism-split split-margin">
                <div className="tourism-copy">
                  <h3>Aster CMI Hospital Bengaluru</h3>
                  <p>
                    The Aster CMI Hospital has contemporary state-of-the-art facilities accommodating close to
                    500 beds and offers comprehensive primary care to quaternary care services with centers of
                    excellence in cardiac sciences, neurosciences, gastroenterology sciences, surgery and allied
                    specialties, integrated liver care, organ transplant, urology and nephrology, orthopaedics,
                    women’s health, and child & adolescent health.
                  </p>
                </div>
                <div className="tourism-image">
                  <img src={asterImage} alt="Aster CMI Hospital Bengaluru" />
                </div>
              </div>

              <div className="tourism-split split-margin">
                <div className="tourism-image">
                  <img src={apolloImage} alt="Apollo Hospitals Chennai" />
                </div>
                <div className="tourism-copy">
                  <h3>Apollo Hospitals, Chennai</h3>
                  <p>
                    Apollo Hospitals, Chennai, is the flagship hospital of the Apollo Group. This hospital has
                    over 60 departments spearheaded by internationally trained doctors, state-of-the-art
                    facilities for various health disorders and cutting-edge medical procedures, that makes it
                    the most preferred destinations for patients from across India and around the globe.
                  </p>
                  <p>
                    Patients travel from various countries to seek treatment at the hospitals. Apollo’s highly
                    experienced staff knows exactly how to assist international patients.
                  </p>
                </div>
              </div>

              <div className="tourism-split split-margin">
                <div className="tourism-copy">
                  <h3>Gleneagles Global Hospitals</h3>
                  <p>
                    Gleneagles Global Hospitals has revolutionized patient care and patient experiences with
                    advanced treatment, state-of-the-art infrastructure and unparalleled commitment to clinical
                    excellence. GGH have pioneered several path-breaking procedures and offered a new lease of
                    life to people from India and abroad.
                  </p>
                  <p>
                    GGH offers expert care and advanced procedures in the field of multi-organ transplants as
                    well as hepatology, nephrology, bariatrics and gastroenterology. GGH have hospitals in
                    Mumbai, Bengaluru, Chennai and Hyderabad.
                  </p>
                </div>
                <div className="tourism-image">
                  <img src={ggImage} alt="Gleneagles Global Hospitals" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="tourism-split tourism-split-reverse">
                <div className="tourism-copy">
                  <h3>Mount Elizabeth Novena Hospital, Singapore</h3>
                  <p>
                    Mount Elizabeth Novena Hospital and Specialist Centre not only places quality healthcare within
                    reach, but provides patients and visitors with an enhanced hospital experience with its tastefully
                    styled interiors. Upholding Singapore’s reputation for delivering world-class medical services.
                  </p>
                  <p>
                    Our staff are trained to advise on the special needs of patients before, during, and, if necessary,
                    after their visit. They are also able to provide advice on the estimated cost of treatments and
                    procedures.
                  </p>
                </div>
                <div className="tourism-image">
                  <img src={mountImage} alt="Mount Elizabeth Novena Hospital Singapore" />
                </div>
              </div>

              <div className="tourism-split split-margin">
                <div className="tourism-image">
                  <img src={mountElizabethImage} alt="Mount Elizabeth Hospital Singapore" />
                </div>
                <div className="tourism-copy">
                  <h3>Mount Elizabeth Hospital, Singapore</h3>
                  <p>
                    Mount Elizabeth has been serving the Asia-Pacific for over 30 years as a leading medical hub,
                    earning the trust of patients from all over the region with its strategic pairing of exceptional
                    medical talents with advanced technology.
                  </p>
                  <p>
                    Staffed by a large team of dedicated professionals and a diverse mix of highly skilled specialists,
                    Mount Elizabeth Hospitals have received the renowned Joint Commission International (JCI)
                    accreditation of quality care.
                  </p>
                </div>
              </div>

              <div className="tourism-split tourism-split-reverse split-margin">
                <div className="tourism-copy">
                  <h3>Parkway East Hospital, Singapore</h3>
                  <p>
                    Parkway East Hospital is a general acute care hospital with a comprehensive range of clinical
                    specialties and subspecialties, including obstetrics and gynecology, general surgery,
                    orthopaedic surgery, ear, nose and throat (ENT), and ophthalmology.
                  </p>
                  <p>
                    Rehabilitation therapy, imaging services, and other ancillary services are also available on-site.
                    Parkway East Hospital is accredited by the Joint Commission International (JCI), underscoring its
                    commitment to excellence for patients and staff.
                  </p>
                </div>
                <div className="tourism-image">
                  <img src={parkwayImage} alt="Parkway East Hospital Singapore" />
                </div>
              </div>
            </>
          )}
        </div>
      </section>

    </div>
  );
};

export default MedicalTourism;
