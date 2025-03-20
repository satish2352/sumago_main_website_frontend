// src/components/FloatingIcons.js
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaYoutube, FaPhoneAlt } from 'react-icons/fa';
import './FloatingIcons.css';
import GoUp from './GoUp';
import GetAQuoteModal from './GetAQuoteModal';
const Movingicon = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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


    <>  <div className="floating-icons2 d-block d-lg-none">
      <button className="theme-btn btn-one rounded-pill glowing-btn vertical-text" onClick={handleShow}>
        Get a Quote
      </button>

      <style jsx>{`
    .glowing-btn {
        position: relative;
        display: inline-block;
        color: white;
        background-color: rgb(255, 34, 34);
       
        padding: 10px 20px;
        font-size: 12px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        text-decoration: none;
        box-shadow: 0 0 5px rgb(255, 34, 34), 0 0 5px #ff5722, 0 0 5px #ff5722;
        animation: blink 1s infinite alternate, glow 2s infinite;
    }

    .vertical-text {
        // writing-mode: vertical-rl; /* Rotates text vertically */
        text-orientation: upright;
    }

    @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0.6; }
        100% { opacity: 1; }
    }
`}</style></div>
      <div className="floating-icons">
        <GetAQuoteModal show={show} handleClose={handleClose} />


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
    </>
  );
};


export default Movingicon