// src/pages/ContactUs.js
import React from "react";
import "../index.css";

const ContactUs = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">
          Send us your inquiries or feedback. We will respond as soon as possible.
        </p>

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Your message has been sent.");
          }}
        >
          <div className="form-row">
            <label className="form-label">Name</label>
            <input
              className="form-input"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              placeholder="Write your message here..."
              required
            />
          </div>

          <button className="btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
