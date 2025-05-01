import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import KvkkDisclosure from './KvkkDisclosure';
import AboutAppDisclosure from './AboutAppDisclosure';
import ContactDisclosure from './ContactDisclosure';
import StarRating from '../components/StarRating';
import RatingDisclosure from './RatingDisclosure';
import { ThemeContext } from './ThemeContext';   // <<< ekledik
import './About.css';

function About() {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);  // <<< ekledik

  return (
    <div className={`about-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2 className="about-title">{t("about")}</h2>

      <div className="list-container">
        {/* Diğer liste öğeleri burada yer alabilir */}
      </div>

      <AboutAppDisclosure />
      <KvkkDisclosure />
      <ContactDisclosure />
      <RatingDisclosure />

      <footer className="footer-area">
        <img src="/logo19.jpeg" alt="Logo" className="footer-logo" />
        <p className="version">{t("version")}: 1.0.4</p>
        <p>© 2024 OtobüsümYanımda</p>
      </footer>
    </div>
  );
}

export default About;