// src/components/FloatingIcons.js
import React from 'react';
import { FaWhatsapp, FaYoutube, FaPhoneAlt } from 'react-icons/fa';
import './FloatingIcons.css';

const Movingicon = () => {
  return (
    <div className="floating-icons">
      <a href="https://wa.me/918010385237" target='_blank' className="iconz whatsapp d-none d-lg-block" rel="noopener noreferrer">
        <FaWhatsapp className="iconz whatsapp" />
      </a>
      <a href="https://wa.me/8010385237"  className="iconz whatsapp d-block d-lg-none" rel="noopener noreferrer">
        <FaWhatsapp className="iconz whatsapp" />
      </a>
      
      <a href={`tel:+91 8530388815`} className="iconz phone">
        <FaPhoneAlt className="iconz phone"/>
        <span className="tooltip">8530388815</span>
      </a>
    </div>
  );
};


export default Movingicon