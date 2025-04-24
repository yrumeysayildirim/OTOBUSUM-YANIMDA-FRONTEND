// src/pages/Contact.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactDisclosure from './ContactDisclosure';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="contact-container">
      <h2 className="contact-title">{t("contact")}</h2>
      <ContactDisclosure />
    </div>
    
  );
}

export default Contact;