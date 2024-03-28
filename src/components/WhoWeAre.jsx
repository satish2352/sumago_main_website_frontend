import React from 'react'
import '../assets/css/WhoWeAre.css'
import { Row, Col } from 'react-bootstrap'
import img from '../assets/images/wp-content/uploads/2023/08/agg.jpg'
import icon1 from '../assets/images/wp-content/themes/printpark/assets/images/shape/custom SOFTWARE.png'
import icon2 from '../assets/images/wp-content/themes/printpark/assets/images/shape/MOBILE APPLICATION.png'
import icon3 from '../assets/images/wp-content/themes/printpark/assets/images/shape/WEB DEVE.png'
import icon4 from '../assets/images/wp-content/themes/printpark/assets/images/shape/DIGITAL MARKETING.png'
import icon5 from '../assets/images/wp-content/themes/printpark/assets/images/shape/SEO.png'
import icon6 from '../assets/images/wp-content/themes/printpark/assets/images/shape/BUSNIES AUTOMATION.png'
import icon7 from '../assets/images/wp-content/themes/printpark/assets/images/shape/WEB DEVE.png'
import { Link } from 'react-router-dom'

const WhoWeAre = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className='whoweare-section container-fluid'>
            <section
                class="elementor-section elementor-top-section elementor-element elementor-element-49f4cfd elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="49f4cfd" data-element_type="section">
                <div class="elementor-container elementor-column-gap-default">
                    <div class="elementor-column elementor-top-column elementor-element elementor-element-e7de592"
                        data-id="e7de592" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-fdcf695 elementor-widget elementor-widget-printpark_float_image"
                                data-id="fdcf695" data-element_type="widget" data-widget_type="printpark_float_image.default">
                                <div class="elementor-widget-container">
                                    <Row>
                                        <Col lg={6} md={6} sm={12}>
                                            <div className='imageContainer'>
                                                <img src={img}
                                                    alt="Awesome" />
                                            </div>
                                            <div className="tab3Show">
                                                <div class="elementor-element elementor-element-34370d5 elementor-widget elementor-widget-printpark_icon_box"
                                                    data-id="34370d5" data-element_type="widget" data-widget_type="printpark_icon_box.default">
                                                    <div class="elementor-widget-container">
                                                        <ul class="te-icon-box highlights-list clearfix">
                                                            <li class="te-icon">
                                                                <i><img src={icon5} width="25" /></i>
                                                                <a class="te-title" rel="&quot;nofollow&quot;">
                                                                    <span class="te-title">SEO Services</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-34370d5 elementor-widget elementor-widget-printpark_icon_box"
                                                    data-id="34370d5" data-element_type="widget" data-widget_type="printpark_icon_box.default">
                                                    <div class="elementor-widget-container">
                                                        <ul class="te-icon-box highlights-list clearfix">
                                                            <li class="te-icon">
                                                                <i><img src={icon6} width="25" /></i>
                                                                <a class="te-title" rel="&quot;nofollow&quot;">
                                                                    <span class="te-title">Business Automation Tools</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-34370d5 elementor-widget elementor-widget-printpark_icon_box"
                                                    data-id="34370d5" data-element_type="widget" data-widget_type="printpark_icon_box.default">
                                                    <div class="elementor-widget-container">
                                                        <ul class="te-icon-box highlights-list clearfix">
                                                            <li class="te-icon">
                                                                <i><img src={icon7} width="20" /></i>
                                                                <a class="te-title" rel="&quot;nofollow&quot;">
                                                                    <span class="te-title">AI and Machine Learning</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                            <div class="elementor-column elementor-top-column elementor-element elementor-element-7f816f0"
                                                data-id="7f816f0" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-b25f309 elementor-widget elementor-widget-printpark_hero_title"
                                                        data-id="b25f309" data-element_type="widget" data-widget_type="printpark_hero_title.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="sec-title">
                                                                <h6 class="te-subtitle">Who We Are</h6>
                                                                <h2 class="te-title printpark-size-default">Topnotch Solutions By Sumago</h2>
                                                                <p>At Sumago Infotech, we're committed to providing top-notch IT services that empower
                                                                    your business to thrive in the digital age. Our comprehensive range of services is
                                                                    designed to address the evolving needs of modern enterprises. Explore our core
                                                                    offerings:</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-27f845c elementor-widget elementor-widget-printpark_button"
                                                        data-id="27f845c" data-element_type="widget"
                                                        data-settings="{&quot;btn_margin&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_margin_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_margin_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true}}"
                                                        data-widget_type="printpark_button.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="yt-btn">
                                                                <Link to={"/about"} onClick={scrollToTop} class="theme-btn btn-one printpark-btn">More
                                                                    About Us</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-34370d5 elementor-widget elementor-widget-printpark_icon_box"
                                                        data-id="34370d5" data-element_type="widget" data-widget_type="printpark_icon_box.default">
                                                        <div class="elementor-widget-container">
                                                            <ul class="te-icon-box highlights-list clearfix">
                                                                <li class="te-icon">
                                                                    <i><img src={icon1} width="20" /></i>
                                                                    <a
                                                                        class="te-title"

                                                                        rel="&quot;nofollow&quot;">
                                                                        <span
                                                                            class="te-title">Custom Software Development</span>
                                                                    </a>
                                                                </li>
                                                            </ul>


                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-34370d5 elementor-widget elementor-widget-printpark_icon_box"
                                                        data-id="34370d5" data-element_type="widget" data-widget_type="printpark_icon_box.default">
                                                        <div class="elementor-widget-container">
                                                            <ul class="te-icon-box highlights-list clearfix">
                                                                <li class="te-icon">
                                                                    <i><img src={icon2} width="20" style={{ height: "29px" }} /></i> <a
                                                                        class="te-title"

                                                                        rel="&quot;nofollow&quot;"><span
                                                                            class="te-title">Mobile Application</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div class="elementor-element elementor-element-34370d5 elementor-widget elementor-widget-printpark_icon_box"
                                                        data-id="34370d5" data-element_type="widget" data-widget_type="printpark_icon_box.default">
                                                        <div class="elementor-widget-container">
                                                            <ul class="te-icon-box highlights-list clearfix">
                                                                <li class="te-icon">
                                                                    <i><img src={icon3} style={{ padding: '15px' }} /></i> <a class="te-title"
                                                                        rel="&quot;nofollow&quot;"><span
                                                                            class="te-title">Website Design and Development</span></a>
                                                                </li>
                                                            </ul>


                                                        </div>
                                                    </div>

                                                    <div class="elementor-element elementor-element-34370d5 elementor-widget elementor-widget-printpark_icon_box"
                                                        data-id="34370d5" data-element_type="widget" data-widget_type="printpark_icon_box.default">
                                                        <div class="elementor-widget-container">
                                                            <ul class="te-icon-box highlights-list clearfix">
                                                                <li class="te-icon">
                                                                    <i><img src={icon4} width="25" /></i>
                                                                    <a class="te-title" rel="&quot;nofollow&quot;">
                                                                        <span class="te-title">Digital Marketing</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="tab3Hide">
                                                        <div class="elementor-element elementor-element-34370d5 elementor-widget elementor-widget-printpark_icon_box"
                                                            data-id="34370d5" data-element_type="widget" data-widget_type="printpark_icon_box.default">
                                                            <div class="elementor-widget-container">
                                                                <ul class="te-icon-box highlights-list clearfix">
                                                                    <li class="te-icon">
                                                                        <i><img src={icon5} width="25" /></i>
                                                                        <a class="te-title" rel="&quot;nofollow&quot;">
                                                                            <span class="te-title">SEO Services</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="elementor-element elementor-element-34370d5 elementor-widget elementor-widget-printpark_icon_box"
                                                            data-id="34370d5" data-element_type="widget" data-widget_type="printpark_icon_box.default">
                                                            <div class="elementor-widget-container">
                                                                <ul class="te-icon-box highlights-list clearfix">
                                                                    <li class="te-icon">
                                                                        <i><img src={icon6} width="25" /></i>
                                                                        <a class="te-title" rel="&quot;nofollow&quot;">
                                                                            <span class="te-title">Business Automation Tools</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="elementor-element elementor-element-34370d5 elementor-widget elementor-widget-printpark_icon_box"
                                                            data-id="34370d5" data-element_type="widget" data-widget_type="printpark_icon_box.default">
                                                            <div class="elementor-widget-container">
                                                                <ul class="te-icon-box highlights-list clearfix">
                                                                    <li class="te-icon">
                                                                        <i><img src={icon7} width="20" /></i>
                                                                        <a class="te-title" rel="&quot;nofollow&quot;">
                                                                            <span class="te-title">AI and Machine Learning</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div >
                                                </div>
                                            </div >
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}

export default WhoWeAre
