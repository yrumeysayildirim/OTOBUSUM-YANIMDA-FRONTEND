// src/components/StarRating.jsx
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../pages/ThemeContext';  // Context’i doğru yoldan import edin
import { useTranslation } from 'react-i18next'; // i18n kullanacağız
import './StarRating.css';

export default function StarRating({ onRatingChange }) {
  const { t, i18n } = useTranslation();  // Dil çevirisi için i18n'i kullanıyoruz
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);     // Tema bilgisini alıyoruz

  const handleClick = starValue => {
    setRating(starValue);
    setSubmitted(true);
    onRatingChange?.(starValue);
  };

  return (
    <div className="star-rating-wrapper">
      <div className="star-rating">
        {[...Array(5)].map((_, i) => {
          const val = i + 1;
          return (
            <span
              key={i}
              className={`star ${val <= rating ? 'selected' : ''}`}
              onClick={() => handleClick(val)}
            >
              &#9733;
            </span>
          );
        })}
      </div>

      {submitted && (
        <p className={`thank-you-message ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          {t('thankYouMessage')}
        </p>
      )}
    </div>
  );
}
