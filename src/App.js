import AboutPage from "pages/AboutPage";
import Contact from "pages/Contact";
import HomePage from "pages/HomePage";
import Jobs from "pages/Jobs";
import PrivacyPolicy from "pages/PrivacyPolicy";
import TermsAndConditions from "pages/TermsAndConditions";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
