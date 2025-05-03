import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from './ThemeContext';  // Doğru yolu kullanıyoruz
import './Settings.css';

function Settings() {
  const { t, i18n } = useTranslation();
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isRefreshOpen, setIsRefreshOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setIsLangOpen(!isLangOpen);
  };

  const toggleRefreshDropdown = () => {
    setIsRefreshOpen(!isRefreshOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`settings-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1 className="settings-title">{t("settings")}</h1>

      {/* Dil Seçeneği */}
      <div className="settings-item" onClick={toggleLanguageDropdown}>
        <div className="item-label">{t("language")}</div>
        <div className="item-action">
          <span>{i18n.language === 'tr' ? t("turkish") : t("english")}</span>
          {isLangOpen && (
            <div className={`language-dropdown ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
              <div onClick={() => changeLanguage('tr')}>{t("turkish")}</div>
              <div onClick={() => changeLanguage('en')}>{t("english")}</div>
            </div>
          )}
        </div>
      </div>

      {/* Tema Seçeneği */}
      <div className="settings-item">
        <div className="item-label">{t("theme")}</div>
        <div className="item-action">
        <button
  className={`theme-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
  onClick={toggleTheme}
>
  {i18n.language === 'tr' 
    ? (isDarkMode ? "Karanlık" : "Açık") 
    : (isDarkMode ? "Dark" : "Light")}
</button>
        </div>
      </div>

      {/* Bildirimler */}
      <div className="settings-item">
        <div className="item-label">{t("notifications")}</div>
        <div className="item-action">
          <input type="checkbox" defaultChecked />
        </div>
      </div>

      {/* Veri Yenileme Süresi */}
      <div className="settings-item" onClick={toggleRefreshDropdown}>
        <div className="item-label">{t("refreshRate")}</div>
        <div className="item-action">
          <span role="img" aria-label="clock" style={{ fontSize: '1.2rem' }}>⏰</span>
          {isRefreshOpen && (
            <div className={`refresh-dropdown ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
              <div>5 {t("minutes")}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
