import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../pages/ThemeContext';
import './BottomNav.css';

function BottomNav() {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <nav className={`bottom-nav ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <NavLink to="/"        className="nav-item" activeClassName="active">
        <span>{t('homeTitle')}</span>
      </NavLink>
      <NavLink to="/density" className="nav-item" activeClassName="active">
        <span>{t('densityTitle')}</span>
      </NavLink>
      <NavLink to="/settings"className="nav-item" activeClassName="active">
        <span>{t('settings')}</span>
      </NavLink>
      <NavLink to="/about"   className="nav-item" activeClassName="active">
        <span>{t('about')}</span>
      </NavLink>
    </nav>
  );
}

export default BottomNav;