// components/LanguageSelector.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', padding: '1rem' }}>
      <button onClick={() => handleLanguageChange('tr')}>
        Türkçe
      </button>
      <button onClick={() => handleLanguageChange('en')}>
        English
      </button>
    </div>
  );
};

export default LanguageSelector;