// src/pages/ContactUs.js
import React from "react";
import "../index.css";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page">

      {/* ------------------- TOP SECTION: MESSAGE + FORM ------------------- */}
      <div className="contact-top-section">

        {/* LEFT SIDE MESSAGE */}
        <div className="help-text">
          <h2>We are here to help!</h2>
          <p>
            Let us know how we can best serve you. Use the contact form to email us,
            and we will reply as soon as possible. It’s our honor to support you on
            your journey toward better health and wellbeing.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="form-wrapper">
          <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">
              Send us your inquiries or feedback. We will respond as soon as possible.
            </p>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your message has been sent.");
              }}
            >
              {/* Name + Phone SIDE BY SIDE */}
              <div className="two-column">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input className="form-input" placeholder="Your name" required />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    className="form-input"
                    type="tel"
                    placeholder="07X XXX XXXX"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button className="btn-submit" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* ------------------- MAP + INFO SECTION ------------------- */}
      <div className="map-info-section">

        {/* LEFT: GOOGLE MAP */}
        <div className="map-container">
          <iframe
            title="A Mart Location"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps?q=A%20Mart%20Holdings%20(Pvt)%20Ltd,%20City%20Center,%20Sunethradevi%20Rd,%20Kohuwala&output=embed"
          ></iframe>
        </div>

        {/* RIGHT: CONTACT DETAILS PANEL */}
        <div className="info-panel">
          <h2 className="info-title">ADDRESS</h2>
          <p className="info-text">
            A Mart Holdings (Pvt) Ltd <br />
            City Center, No.12,<br />
            Sunethradevi Road, Kohuwala,<br />
            Sri Lanka.
          </p>

          <h2 className="info-title">CONTACT NUMBERS</h2>
          <p className="info-text">
            Tel / WhatsApp:<br />
            +94 77 7744 816<br />
            +94 77 7648 888
          </p>

          <h2 className="info-title">EMAIL</h2>
          <p className="info-text">info@amartholdings.com</p>
        </div>
      </div>

      {/* ------------------- BOTTOM BOX SECTION ------------------- */}
      <div className="bottom-boxes">

        {/* LEFT BOX */}
        <div className="box get-direction-box">
          <h3>Get Directions</h3>
          <a
            href="https://www.google.com/maps?q=A%20Mart%20Holdings%20(Pvt)%20Ltd,%20City%20Center,%20Sunethradevi%20Rd,%20Kohuwala"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </div>

        {/* RIGHT BOX */}
        <div className="box open-hours-box">
          <h3>Open Hours</h3>
          <p>Mon – Fri: 8.00 am – 5.00 pm</p>
          <p>Sat – Sun: Closed</p>
          <p>Poya Day: Closed</p>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
