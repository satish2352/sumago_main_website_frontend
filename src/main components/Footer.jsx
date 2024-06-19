import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useBlog } from '../Datacontext';
import IntersectImage from '../assets/images/wp-content/uploads/2023/08/Intersect.png';
import Rectangle from '../assets/images/wp-content/themes/printpark/assets/images/shape/Rectangle.png';
import footercard from '../assets/images/wp-content/themes/printpark/assets/images/shape/cricle.png';
import im from '../assets/images/wp-content/uploads/2023/08/wwww.png';
import '../assets/css/Footer.css';

const Footer = () => {
    const { blogs, solutions } = useBlog();

    // Mock services data for demonstration
    const services = [
        { title: 'Web Development' },
        { title: 'Mobile Application' },
        { title: 'Digital Marketing' },
        { title: 'IT Consulting' },
        { title: 'IT Solutions' },
        { title: 'Project Management' },
        { title: 'Data Analytics' },
        { title: 'Resource Augmentation' },
        { title: 'Blockchain' },
        { title: 'Artificial Intelligence (AI)' },
        { title: 'Outsourcing Engagement' },
        { title: 'IoT (Internet of Things)' },
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="main-footer container-fluid">
            <Container fluid>
                <div className="widget-section me-5 ms-5">
                    <Row className="clearfix">
                        <Col lg={2} md={12} sm={12} className="footer-column column1">
                            <div id="nav_menu-1" className="footer-widget single-footer-widget widget_nav_menu">
                                <div className="widget-title">
                                    <h3>Company</h3>
                                </div>
                                <div className="menu-company-menu-container">
                                    <ul id="menu-company-menu" className="menu p-2">
                                        <li className="menu-item">
                                            <Link to="/about" onClick={scrollToTop} style={{ textDecoration: 'none' }}>About Us</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/contact" onClick={scrollToTop} style={{ textDecoration: 'none' }}>Contact</Link>
                                        </li>
                                        {/* <li className="menu-item">
                                            <Link to="#" onClick={scrollToTop} style={{ textDecoration: 'none' }}>Projects</Link>
                                        </li> */}
                                        <li className="menu-item">
                                            <Link to="/about" onClick={scrollToTop} style={{ textDecoration: 'none' }}>Team</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} md={12} sm={12} className="footer-column column2">
                            <div id="nav_menu-2" className="footer-widget single-footer-widget widget_nav_menu">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <div className="menu-essentials-menu-container d-lg-flex d-md-flex">
                                    <ul className="menu p-2 services-column">
                                        {services.slice(0, 6).map((service, index) => (
                                            <li key={index} className="menu-item">
                                                <Link to={`/solutions/${encodeURIComponent(service.title.toLowerCase().replace(/\s+/g, '-'))}`} onClick={scrollToTop} style={{ textDecoration: 'none' }}>
                                                    {service.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="menu p-2 services-column">
                                        {services.slice(6, 12).map((service, index) => (
                                            <li key={index} className="menu-item">
                                                <Link to={`/solutions/${encodeURIComponent(service.title.toLowerCase().replace(/\s+/g, '-'))}`} onClick={scrollToTop} style={{ textDecoration: 'none' }}>
                                                    {service.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={12} sm={12} className="footer-column column3">
                            <div id="printpark_promotion-1" className="footer-widget single-footer-widget widget_printpark_promotion">
                                <div className="promotion-widget">
                                    <div className="inner-box" style={{ backgroundImage: `url(${Rectangle})` }}>
                                        <div className="shape" style={{ backgroundImage: `url(${IntersectImage})` }}></div>
                                        <div className="icon-box">
                                            <img style={{ height: '50px', width: '50px' }} src={footercard} alt="Footer Card" />
                                        </div>
                                        <h2>Everything<br />to Market Your Business.</h2>
                                        <Link to={`/solutions/${encodeURIComponent("digital-marketing")}`} onClick={scrollToTop} className="theme-btn" style={{ textDecoration: 'none' }}>Start Today</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="footer-top me-5 ms-5">
                    <div className="left-column">
                        <figure className="footer-logo">
                            <Link to="/" onClick={scrollToTop}>
                                <img style={{ height: '40px', width: '300px' }} src={im} alt="Awesome" />
                            </Link>
                        </figure>
                        <div className="copyright">
                            <p>Copyrights &copy; {new Date().getFullYear()} <Link to="/" onClick={scrollToTop} style={{ textDecoration: 'none' }}>Sumago.</Link> All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="right-column">
                        <ul className="social-links clearfix">
                            <li>
                                <h5>Follow On</h5>
                            </li>
                            <li>
                                <Row>
                                    <Col>
                                        <Link target="_blank" to="https://www.facebook.com/sumagoinfotech/"><i className="fab fa-facebook"></i></Link>
                                    </Col>
                                    <Col>
                                        <Link target="_blank" to="https://in.linkedin.com/company/sumago-infotech-pvt-ltd"><i className="fab fa-linkedin"></i></Link>
                                    </Col>
                                    <Col>
                                        <Link target="_blank" to="https://www.instagram.com/sumago_infotech"><i className="fab fa-instagram"></i></Link>
                                    </Col>
                                    <Col>
                                        <Link target="_blank" to="https://youtube.com/@SumagoInfotechPvtLtd?si=HBSAUjlRTR-8tTvE"><i className="fab fa-youtube"></i></Link>
                                    </Col>
                                </Row>
                            </li>
                            <li>
                                <button className='scroll-top' onClick={scrollToTop}>
                                    <i className="flaticon-arrow-up"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
