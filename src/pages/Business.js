// src/pages/Business.js
import React from "react";

const Business = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Business</h1>
        <p className="page-subtitle">
          Explore the key business areas and services under A Mart Holdings.
        </p>

        <div className="card-grid">
          <div className="card">
            <h3 className="card-title">Service Area 1</h3>
            <p className="card-text">
              Short description of your first main business or service.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Service Area 2</h3>
            <p className="card-text">
              Short description of another important area of the business.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Service Area 3</h3>
            <p className="card-text">
              You can later replace this with real details as your project
              grows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
