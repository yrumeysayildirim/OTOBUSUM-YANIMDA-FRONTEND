// src/pages/KvkkDisclosure.js
import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from './ThemeContext'; // Dark mode için eklendi
import './KvkkDisclosure.css';

function KvkkDisclosure() {
  const { t } = useTranslation();
  const [showKvkk, setShowKvkk] = useState(false);
  const { isDarkMode } = useContext(ThemeContext); // Dark mode için eklendi

  const toggleKvkk = () => {
    setShowKvkk(!showKvkk);
  };

  return (
    <div className={`kvkk-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="kvkk-toggle" onClick={toggleKvkk}>
        {t("kvkkTitle")}
      </div>
      {showKvkk && (
        <div className="kvkk-text">
          <p>{t("kvkkText")}</p>
        </div>
      )}
    </div>
  );
}

export default KvkkDisclosure;
