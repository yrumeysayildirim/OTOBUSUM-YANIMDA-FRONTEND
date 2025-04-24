import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('tr');
  const { i18n } = useTranslation();

  // Tema değişikliğini body'e uygula (sayfa yenilendiğinde de geçerli olur)
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
  };

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <AppContext.Provider value={{ isDarkMode, language, toggleDarkMode, changeLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext; // 💡 import AppContext from '../context/AppContext' şeklinde kullanabilmek için

