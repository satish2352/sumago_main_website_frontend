// src/components/FloatingIcons.js
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaYoutube, FaPhoneAlt } from 'react-icons/fa';
import './FloatingIcons.css';
import GoUp from './GoUp';
const Movingicon = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 600 && window.scrollY < (document.documentElement.scrollHeight - window.innerHeight - 550);
      setShowScrollButton(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="floating-icons">
   
      
   
      <a href="https://wa.me/918010385237" target='_blank' className="iconz whatsapp d-none d-lg-block" rel="noopener noreferrer">
        <FaWhatsapp className="iconz whatsapp" />
      </a>
      <a href="https://wa.me/918010385237" className="iconz whatsapp d-block d-lg-none" rel="noopener noreferrer">
        <FaWhatsapp className="iconz whatsapp" />
      </a>



      <a href={`tel:+91 8010385237`} className="iconz phone">
        <FaPhoneAlt className="iconz phone" />
        <span className="tooltip">8010385237</span>
      </a>
      <a href="">
       <button className='scroll-top' onClick={scrollToTop} style={{ opacity: showScrollButton ? '1' : '0', transition: 'opacity 0.3s ease-in-out', color: '#D73439', borderColor: '#D73439' }}>
          <i className="flaticon-arrow-up"></i>
        </button>
       </a>
    </div>
  );
};


export default Movingicon