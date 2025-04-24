import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from './ThemeContext'; // Dark mode için eklendi
import './AboutAppDisclosure.css';

function AboutAppDisclosure() {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);
  const { isDarkMode } = useContext(ThemeContext); // Dark mode kontrolü

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`about-app-disclosure-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="about-app-toggle" onClick={toggleDetails}>
        {t("aboutInfo")}
      </div>
      {showDetails && (
        <div className="about-app-text">
          <p>{t("aboutText1")}</p>
          <p>{t("aboutText2")}</p>
        </div>
      )}
    </div>
  );
}

export default AboutAppDisclosure;
