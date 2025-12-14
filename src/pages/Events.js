// src/pages/Events.js
import React, { useState } from "react";
import "../styles/Events.css";

// 🔹 EVENTS COVER IMAGE
import eventsCover from "../assets/events_cover.jpg";

/* AUTO IMPORT ALL IMAGES FROM FOLDERS */
const importAll = (r) => r.keys().map(r);

const oncologistImages = importAll(
  require.context(
    "../assets/Events/oncologists-academic-session-2024",
    false,
    /\.(webp|jpg|jpeg|png)$/
  )
);

const stemCellImages = importAll(
  require.context(
    "../assets/Events/stem-cell-masterclass-2024",
    false,
    /\.(webp|jpg|jpeg|png)$/
  )
);

const cmeImages = importAll(
  require.context(
    "../assets/Events/thromboembolism-cme-2024",
    false,
    /\.(webp|jpg|jpeg|png)$/
  )
);

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="events-page">

      {/* ================= EVENTS COVER ================= */}
      <section className="events-hero">
        <img
          src={eventsCover}
          alt="Events Cover"
          className="events-hero-img"
        />

        <div className="events-hero-overlay">
          <h1 className="events-hero-title fade-in-up">
            Our Events
          </h1>
          <p className="events-hero-sub fade-in-up delay-1">
            Academic sessions, master classes & professional medical programs
          </p>
        </div>
      </section>

      {/* ================= EVENTS CONTENT ================= */}
      <div className="events-container">

        {/* EVENT 01 */}
        <div className="event-section fade-up">
          <h2>1st Annual Academic Session</h2>
          <h4>Sri Lanka College of Oncologists</h4>
          <p><strong>Date:</strong> Oct 11 – Oct 13, 2024</p>
          <p><strong>Venue:</strong> Hotel Galadari, Colombo</p>

          <div className="event-gallery">
            {oncologistImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Academic Session"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* EVENT 02 */}
        <div className="event-section fade-up delay-1">
          <h2>Hematopoietic Stem Cell Transplantation Master Class</h2>
          <p><strong>Date:</strong> Oct 10, 2024</p>
          <p><strong>Venue:</strong> Hotel Galadari, Colombo</p>

          <div className="event-gallery">
            {stemCellImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Stem Cell Master Class"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* EVENT 03 */}
        <div className="event-section fade-up delay-2">
          <h2>
            CME on “The Management of Thromboembolism in Cancer Patients”
          </h2>
          <h4>Sri Lanka College of Oncologists</h4>
          <p><strong>Date:</strong> June 29, 2024</p>
          <p><strong>Venue:</strong> Grand Monarch, Thalawathugoda</p>

          <div className="event-gallery">
            {cmeImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="CME Event"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

      </div>

      {/* ================= IMAGE LIGHTBOX ================= */}
      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </span>
            <img src={selectedImage} alt="Event Large View" />
          </div>
        </div>
      )}

    </div>
  );
};

export default Events;
