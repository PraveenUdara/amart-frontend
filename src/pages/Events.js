// src/pages/Events.js
import React from "react";

const Events = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Events</h1>
        <p className="page-subtitle">
          Highlight your upcoming and past events, launches, and special
          programs.
        </p>

        <div className="card-grid">
          <div className="card">
            <h3 className="card-title">Upcoming Event</h3>
            <p className="card-text">
              Add details about your next event, date, and purpose here.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Recent Event</h3>
            <p className="card-text">
              Briefly describe a recent event or milestone and how it impacted
              your customers or community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
