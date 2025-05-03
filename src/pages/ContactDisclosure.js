// src/pages/ContactDisclosure.js
import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from './ThemeContext'; // Dark mode için eklendi
import './ContactDisclosure.css';

function ContactDisclosure() {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);
  const { isDarkMode } = useContext(ThemeContext); // Dark mode için eklendi

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`contact-disclosure-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="contact-toggle" onClick={toggleDetails}>
        {t("contact")}
      </div>
      {showDetails && (
        <div className="contact-details">
          <p className="address">{t("contactAddress")}</p>
          <p className="phone">{t("contactPhone")}</p>
        </div>
      )}
    </div>
  );
}

export default ContactDisclosure;
