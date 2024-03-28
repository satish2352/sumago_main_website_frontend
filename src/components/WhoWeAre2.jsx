import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import shape1 from '../assets/images/wp-content/themes/printpark/assets/images/shape/1.png';
import shape2 from '../assets/images/wp-content/themes/printpark/assets/images/shape/2.png';
import shape3 from '../assets/images/wp-content/themes/printpark/assets/images/shape/3.png';
import shape4 from '../assets/images/wp-content/themes/printpark/assets/images/shape/4.png';
import rightimg from '../assets/images/wp-content/uploads/2023/08/oooo.jpg';
import '../assets/css/WhoWeAre2.css';
import { Link } from 'react-router-dom';

const WhoWeAre2 = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className="whoweare2-section container-fluid">
            <Container>
                <Row>
                    <Col lg={6} className="elementor-top-column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-b25f309 elementor-widget elementor-widget-printpark_hero_title" data-id="b25f309" data-element_type="widget" data-widget_type="printpark_hero_title.default">
                                <div className="elementor-widget-container">
                                    <div className="sec-title">
                                        <h6 className="te-subtitle">Who We Are</h6>
                                        <h2 className="te-title printpark-size-default">Glimpses of Corporate Training 2023</h2>
                                        <p>A 2-day Corporate Training session was organized for the Sumago Infotech Team by CGO Sudhir Gorade</p>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-27f845c elementor-widget elementor-widget-printpark_button" data-id="27f845c" data-element_type="widget" data-settings="{&quot;btn_margin&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_margin_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_margin_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true}}" data-widget_type="printpark_button.default">
                                <div className="elementor-widget-container">
                                    <div className="yt-btn">
                                        <Link to={"/about"} onClick={scrollToTop} className="theme-btn btn-one printpark-btn">More About Us</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-34370d5 elementor-widget elementor-widget-printpark_icon_box" data-id="34370d5" data-element_type="widget" data-widget_type="printpark_icon_box.default">
                                <div className="elementor-widget-container">
                                    <ul className="te-icon-box highlights-list clearfix">
                                        <li className="te-icon">
                                            <i><img src={shape1} width="25" style={{ marginTop: '-11px' }} alt="Shape 1" /></i> <a className="te-title" rel="nofollow"><span className="te-title">Maintaining work-life balance</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-34370d5 elementor-widget elementor-widget-printpark_icon_box" data-id="34370d5" data-element_type="widget" data-widget_type="printpark_icon_box.default">
                                <div className="elementor-widget-container">
                                    <ul className="te-icon-box highlights-list clearfix">
                                        <li className="te-icon">
                                            <i><img src={shape2} width="25" style={{ marginTop: '-11px' }} alt="Shape 1" /></i> <a className="te-title" rel="nofollow"><span className="te-title">OPTIMUM ENERGY UTILIZATION AND WORKING CAPABILITIES</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-34370d5 elementor-widget elementor-widget-printpark_icon_box" data-id="34370d5" data-element_type="widget" data-widget_type="printpark_icon_box.default">
                                <div className="elementor-widget-container">
                                    <ul className="te-icon-box highlights-list clearfix">
                                        <li className="te-icon">
                                            <i><img src={shape3} width="25" style={{ marginTop: '-11px' }} alt="Shape 1" /></i> <a className="te-title" rel="nofollow"><span className="te-title">HAVE BETTER TIME MANAGEMENT STRATEGIES AT HAND</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-34370d5 elementor-widget elementor-widget-printpark_icon_box" data-id="34370d5" data-element_type="widget" data-widget_type="printpark_icon_box.default">
                                <div className="elementor-widget-container">
                                    <ul className="te-icon-box highlights-list clearfix">
                                        <li className="te-icon">
                                            <i><img src={shape4} width="25" style={{ marginTop: '-11px' }} alt="Shape 1" /></i> <a className="te-title" rel="nofollow"><span className="te-title">PRIORITIZATION OF WORK</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="elementor-top-column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-fdcf695 elementor-widget elementor-widget-printpark_float_image" data-id="fdcf695" data-element_type="widget" data-widget_type="printpark_float_image.default">
                                <div className="elementor-widget-container">
                                    <section className="about-section p-0 m-0">
                                        <figure className="image image-4"><img src={rightimg} alt="Awesome" /></figure>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhoWeAre2;