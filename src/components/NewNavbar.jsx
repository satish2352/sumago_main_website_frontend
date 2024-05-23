import React, { useState } from 'react';
import '../assets/css/NewNavbar.css';
import { Link } from 'react-router-dom';
import sumagologo from '../assets/images/wp-content/uploads/2023/08/SUMAGO Logo.png'
import sumagowhitenew from '../assets/images/SUMAGO White New.png'

const NewNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle('nav-open', !isNavOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="navbar d-flex d-lg-none">
      <div className="sumagoImageContainer">
        <Link to="/" className='d-flex align-items-center'>
          <img src={sumagologo} alt="" style={{ width: '300px', height: 'auto' }} /></Link>
      </div>
      <div className="nav-content">
        <div className={`hamburger-menu ${isNavOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`nav-links ${isNavOpen ? 'show' : ''}`}>
          <div className='d-flex slidInContent' style={{ width: '100%' }}>
            <img src={sumagowhitenew} alt="" style={{ width: '300px', height: 'auto' }} className='sumagoWhite' />
            <i className="bi bi-x ms-auto cancelNavbar" onClick={toggleNavbar}></i>
          </div>
          <ul>
            <li><Link to="/" onClick={() => { toggleNavbar(); scrollToTop(); }}>Home</Link></li>
            <li><Link to={`/solutions/${encodeURIComponent("web-development")}`} onClick={() => { toggleNavbar(); scrollToTop(); }}>Our Solutions</Link></li>
            <li><Link to="/about" onClick={() => { toggleNavbar(); scrollToTop(); }}>About</Link></li>
            <li><Link to="/career" onClick={() => { toggleNavbar(); scrollToTop(); }}>Career</Link></li>
            <li><Link to="/contact" onClick={() => { toggleNavbar(); scrollToTop(); }}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default NewNavbar;