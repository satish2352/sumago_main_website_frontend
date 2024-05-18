import React, { useEffect, useState } from 'react';
import '../assets/css/ContactButton.css';
import callbg from '../assets/images/wp-content/uploads/2023/08/call/1827.png';
import call from '../assets/images/wp-content/uploads/2023/08/call/contact.png';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const ContactButton = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleContactClick = (e) => {
        e.preventDefault();
        navigate('/contact');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Container fluid>
            <div className='contactbutton-section'>
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-9a1564a elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                    data-id="9a1564a" data-element_type="section"
                    data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                    <div className="elementor-container elementor-column-gap-no">
                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-633ebfb"
                            data-id="633ebfb" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated p-2"
                                style={{ backgroundImage: `url(${callbg})` }}>
                                <Row>
                                    <Col lg={7} md={12} sm={12}>
                                        <div className="d-grid text-center align-items-center justify-content-center mt-4">
                                            <h3>
                                                <b>
                                                    <a className="ser-title mt-4" style={{ color: 'black' }}>
                                                        Leverage our expertise to navigate complex IT<br />landscapes and overcome technical hurdles.
                                                    </a>
                                                </b>
                                            </h3>
                                            <div className="buttonContainer">
                                                <button 
                                                    style={{ width: '200px', borderRadius: '30px', marginLeft: '60px', marginTop: '10px' }} 
                                                    className="bg-white fw-bolder fs-4 p-2 m-4 d-flex justify-content-center align-items-center"
                                                    onClick={handleContactClick}
                                                >
                                                    <span style={{ textDecoration: 'none' }}>Contact us</span>
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5} md={12} sm={12}>
                                        <div className="text-center">
                                            <img decoding="async" style={{ width: '60%' }} src={call} alt="Awesome" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    );
};

export default ContactButton;
