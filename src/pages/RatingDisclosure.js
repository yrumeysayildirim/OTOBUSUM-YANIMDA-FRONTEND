// src/pages/RatingDisclosure.js
import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import StarRating from '../components/StarRating'; // Daha önce oluşturduğunuz bileşen
import { ThemeContext } from './ThemeContext'; // ThemeContext'i ekledik
import './RatingDisclosure.css';

function RatingDisclosure() {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext); // Dark mode bilgisini aldık
  const [showRating, setShowRating] = useState(false);

  const toggleRating = () => {
    setShowRating(prev => !prev);
  };

  return (
    <div className={`rating-disclosure-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className={`rating-toggle ${isDarkMode ? 'dark-toggle' : 'light-toggle'}`} onClick={toggleRating}>
        {t("rateUs")}
      </div>
      {showRating && (
        <div className={`rating-content ${isDarkMode ? 'dark-content' : 'light-content'}`}>
          <StarRating />
        </div>
      )}
    </div>
  );
}

export default RatingDisclosure;
