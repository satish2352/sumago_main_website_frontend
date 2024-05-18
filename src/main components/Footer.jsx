import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import im from '../assets/images/wp-content/uploads/2023/08/wwww.png'
import IntersectImage from '../assets/images/wp-content/uploads/2023/08/Intersect.png';
import Rectangle from '../assets/images/wp-content/themes/printpark/assets/images/shape/Rectangle.png'
import footercard from '../assets/images/wp-content/themes/printpark/assets/images/shape/cricle.png'
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css'
const Footer = () => {
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
            behavior: 'smooth'
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
                                        <li id="menu-item-1270"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1270">
                                            <Link to="/about" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                                                About Us
                                            </Link>
                                        </li>
                                        <li id="menu-item-1265"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1265">
                                            <Link to="/contact" style={{ textDecoration: 'none' }} onClick={scrollToTop}>Contact</Link>
                                        </li>
                                        <li id="menu-item-1266"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1266">
                                            <Link to="#" style={{ textDecoration: 'none' }} onClick={scrollToTop}>Projects</Link>
                                        </li>
                                        <li id="menu-item-1267"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1267">
                                            <Link to="/about" style={{ textDecoration: 'none' }} onClick={scrollToTop}>Team</Link>
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
                                    <ul id="menu-essentials-menu" className="menu p-2">
                                        <li id="menu-item-1271"
                                            className="menu-item menu-item-type-post_type menu-item-object-service menu-item-1271">
                                            <Link onClick={scrollToTop} to={`/solutions/${encodeURIComponent("web-development")}`} style={{ textDecoration: 'none' }}>Web Development</Link>

                                        </li>
                                        <li id="menu-item-1272"
                                            className="menu-item menu-item-type-post_type menu-item-object-service menu-item-1272">
                                            <Link onClick={scrollToTop} to={`/solutions/${encodeURIComponent("mobile-application")}`} style={{ textDecoration: 'none' }}>Mobile Application</Link>
                                        </li>
                                        <li id="menu-item-1273"
                                            className="menu-item menu-item-type-post_type menu-item-object-service menu-item-1273">
                                            <Link onClick={scrollToTop} to={`/solutions/${encodeURIComponent("digital-marketing")}`} style={{ textDecoration: 'none' }}>Digital Marketing</Link>
                                        </li>
                                        <li id="menu-item-1274"
                                            className="menu-item menu-item-type-post_type menu-item-object-service menu-item-1274">
                                            <Link onClick={scrollToTop} to={`/solutions/${encodeURIComponent("iT-consulting")}`} style={{ textDecoration: 'none' }}>IT Consulting</Link>
                                        </li>
                                        <li id="menu-item-1275"
                                            className="menu-item menu-item-type-post_type menu-item-object-service menu-item-1275">
                                            <Link onClick={scrollToTop} to={`/solutions/${encodeURIComponent("it-solutions")}`} style={{ textDecoration: 'none' }}>IT Solutions</Link>
                                        </li>
                                        <li id="menu-item-1276"
                                            className="menu-item menu-item-type-post_type menu-item-object-service menu-item-1276">
                                            <Link onClick={scrollToTop} to={`/solutions/${encodeURIComponent("DataAnalytics")}`} style={{ textDecoration: 'none' }}>Data Analytics</Link>
                                        </li>
                                    </ul>
                                    <ul id="menu-company-menu" className="menu p-2">
                                    <li id="menu-item-1265"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1265">
                                            <Link onClick={scrollToTop} to={`/solutions/${encodeURIComponent("project-management")}`} style={{ textDecoration: 'none' }}>Project Management</Link>
                                        </li>
                                        <li id="menu-item-1265"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1265">
                                            <Link onClick={scrollToTop} to={`/solutions/${encodeURIComponent("ResourceAugmentation")}`} style={{ textDecoration: 'none' }}>Resource Augmentation</Link>
                                        </li>
                                        <li id="menu-item-1266"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1266">
                                            <Link onClick={scrollToTop} to={`/solutions/${encodeURIComponent("blockchain")}`} style={{ textDecoration: 'none' }}>Blockchain</Link>
                                        </li>
                                        <li id="menu-item-1267"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1267">
                                            <Link onClick={scrollToTop} to={`/solutions/${encodeURIComponent("artificial-intelligence(ai)")}`} style={{ textDecoration: 'none' }}>Artificial Intelligence</Link>
                                        </li>
                                        <li id="menu-item-1268"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1268">
                                            <Link onClick={scrollToTop} to={`/solutions/${encodeURIComponent("outsourcing-engagement")}`} style={{ textDecoration: 'none' }}>Outsourcing Engagement</Link>
                                        </li>
                                        <li id="menu-item-1269"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1269">
                                            <Link onClick={scrollToTop} to={`/solutions/${encodeURIComponent("iot(internetofihings)")}`} style={{ textDecoration: 'none' }}>IOT</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={12} sm={12} className="footer-column column3">
                            <div id="printpark_promotion-1" className="footer-widget single-footer-widget widget_printpark_promotion">
                                <div className="promotion-widget">
                                    <div className="inner-box" style={{ backgroundImage: `url(${Rectangle})` }}>
                                        <div className="shape" style={{ backgroundImage: `url(${IntersectImage})` }}>
                                        </div>
                                        <div className="icon-box">
                                            <img style={{ height: '50px', width: '50px' }} src={footercard} alt="Footer Card" />
                                        </div>
                                        <h2>Everything<br />to Market Your Business.</h2>
                                        <Link onClick={scrollToTop} to={`/solutions/${encodeURIComponent("DigitalMarketing")}`} className="theme-btn" style={{ textDecoration: 'none' }}>Start Today</Link>
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
                            <p>Copyrights &copy; {new Date().getFullYear()} <Link to="/" style={{ textDecoration: 'none' }} onClick={scrollToTop}>Sumago.</Link> All Rights Reserved.</p>
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
