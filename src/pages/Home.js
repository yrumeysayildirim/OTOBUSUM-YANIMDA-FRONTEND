import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import './Home.css';
import i18n from '../i18n';

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);

  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');

  const validRoutes = ['474', '477', '472', '486'];

  const handleSearch = () => {
    const route = searchText.trim();
    if (validRoutes.includes(route)) {
      navigate(`/bus-schedule/${route}`);
    } else {
      setError(t('bus_schedule.no_data'));
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className={`home-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="header-section">
        <div className="silhouette-bg"></div>
      </header>

      {error && <div className="search-error">{error}</div>}

      <div className="search-section">
        <input
          type="text"
          className="search-input"
          placeholder={t('appDescription')}
          value={searchText}
          onChange={e => { setSearchText(e.target.value); setError(''); }}
          onKeyPress={handleKeyPress}
        />
        <button className="search-button" onClick={handleSearch}>
          {t('search')}
        </button>
      </div>

      <div className="cards-container">
        <div className="card chart-card" onClick={() => navigate('./bus-distribution')}>
          <p>{t('pieChart')}</p>
        </div>
        <div className="card chart-card" onClick={() => navigate('./stop-density')}>
          <p>{t('stopDensity.title')}</p>
        </div>
        <div className="card chart-card" onClick={() => navigate('./bus-bar-chart')}>
          <p>{t('weeklyDensity')}</p>
        </div>
        <div className="card chart-card" onClick={() => navigate('./real-time-bus')}>
          <p>{t('realTimeTracking.title')}</p>
        </div>
      </div>
      <div className="silhouette-bottom-bg"></div>
      </div>
   
  );
}

export default Home;
