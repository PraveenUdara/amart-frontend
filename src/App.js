// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
 // ✅ Add this line

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Business from "./pages/Business";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />  {/* ✅ Auto scroll to top */}

        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/business" element={<Business />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>

        <footer className="footer">
          © {new Date().getFullYear()} A Mart Holdings. All rights reserved.
        </footer>
      </Router>
    </div>
  );
}

export default App;
