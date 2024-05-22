import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Frame from '../assets/images/wp-content/themes/printpark/assets/images/shape/Frame.png';
import shape20 from '../assets/images/wp-content/themes/printpark/assets/images/shape/shape-20.png';
import { Col, Container, Row } from 'react-bootstrap';
import '../assets/css/Contact1.css'
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from 'react'

const Contact1 = () => {
    const [data, setData] = useState([])
    useEffect(() => {
            axios.get("/location/getlocationRecords").then((result) => {
                console.log("result", result);
                setData(result.data)
            }).catch((err) => {
                console.log("err", err);
            });
    }, [])

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [website, setWebsite] = useState("")
    const [message, setMessage] = useState("")
    const [errors, setErrors] = useState({});
    const captchaRef = useRef(null);
    const [isCaptchaVerified, setCaptchaVerified] = useState(false);
    const onChange = (value) => {
        setCaptchaVerified(true);
        console.log(value);
    }

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!website.trim()) {
            errors.website = 'Website name is required';
            isValid = false;
        }
        if (!message.trim()) {
            errors.message = 'Message is required';
            isValid = false;
        }

        if (!name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!phone.trim()) {
            errors.phone = 'Phone number is required';
            isValid = false;
        } else if (!/^[7-9]{1}[0-9]{9}$/.test(phone)) {
            errors.phone = 'Invalid phone number';
            isValid = false;
        }

        if (!email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
            isValid = false;
        }
        if (!isCaptchaVerified) {
            errors.captcha = 'Please complete the recaptcha before submitting.';
            isValid = false;
        }
        //   if (!isCaptchaVerified) {
        //     // setSubmitMessage("Please complete the ReCAPTCHA before submitting.");
        //     errors.captc = 'Please complete the ReCAPTCHA before submitting.';
        //     isValid = false;
        //     return;
        // }

        setErrors(errors);
        return isValid;
    };
    const SubmitData = (e) => {
        e.preventDefault();

        let newData = {
            name, email, phone, website, message
        }
        if (validateForm()) {
            axios.post("contact/records", newData, { headers: { "content-type": "application/json" } }).then((resp) => {
                console.log("resp", resp)
                setName("")
                setEmail("")
                setPhone("")
                setWebsite("")
                setMessage("")
                alert("Your information submitted we will connect with you shortly !!")
            }).catch((err) => {
                console.log("err", err);
            })
        }
    }
    return (
        <>
            <section className="page-title centred">
                <div className="bg-layer"
                    style={{ backgroundImage: `url(${Frame})`, backgroundSize: 'cover' }}>
                </div>
                <div className="pattern-layer"
                    style={{ backgroundImage: `url(${shape20})` }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Contact</h1>
                        <ul className="bread-crumb clearfix">
                            <li className="breadcrumb-item"><Link to="/" style={{ textDecoration: 'none' }}>Home &nbsp;</Link></li>
                            <li className="breadcrumb-item">Contact</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* page - title end*/}

            <div data-elementor-type="wp-page" data-elementor-id="32" className="elementor elementor-32">
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-ca357b3 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                    data-id="ca357b3" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-23e9cbe"
                            data-id="23e9cbe" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-ec20e2d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="ec20e2d" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b133147"
                                            data-id="b133147" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-25a4812 elementor-widget elementor-widget-printpark_hero_title"
                                                    data-id="25a4812" data-element_type="widget"
                                                    data-widget_type="printpark_hero_title.default">
                                                    <div className="elementor-widget-container">

                                                        <div className="sec-title d-flex justify-content-center align-items-center text-center">
                                                            <div classNameName='mt-3'>
                                                                <h6 className="te-subtitle">Let’s Work Together!</h6>
                                                                <h2 className="te-title printpark-size-default">
                                                                    Tell us what you are Looking for!</h2>
                                                                <p>We believe in building Trust and Relation first.</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-82ce556 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="82ce556" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-default">
                                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-ff14343"
                                            data-id="ff14343" data-element_type="column">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-3c03e93 elementor-widget elementor-widget-printpark_form"
                                                    data-id="3c03e93" data-element_type="widget"
                                                    data-settings="{&quot;form_spacing&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;form_spacing_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;form_spacing_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;form_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;form_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;form_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_margin&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_margin_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_margin_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true}}"
                                                    data-widget_type="printpark_form.default">
                                                    <div className="elementor-widget-container">
                                                        {/* contact-section */}
                                                        <section className="contact-section p-0 m-0">
                                                            <div className="form-inner">
                                                                <div className="default-form te-contact-form">

                                                                    <div className="wpcf7 no-js" id="wpcf7-f1246-p32-o1"
                                                                        lang="en-US" dir="ltr">
                                                                        <div className="screen-reader-response">
                                                                            <p role="status" aria-live="polite"
                                                                                aria-atomic="true"></p>
                                                                            <ul></ul>
                                                                        </div>
                                                                        <form
                                                                            action=""
                                                                            onSubmit={SubmitData}
                                                                            method="post" className="wpcf7-form init"
                                                                            aria-label="Contact form"
                                                                            novalidate="novalidate" data-status="init">
                                                                            <div style={{ display: 'none' }}>
                                                                                <input type="hidden" name="_wpcf7"
                                                                                    value="1246" />
                                                                                <input type="hidden" name="_wpcf7_version"
                                                                                    value="5.8.3" />
                                                                                <input type="hidden" name="_wpcf7_locale"
                                                                                    value="en_US" />
                                                                                <input type="hidden" name="_wpcf7_unit_tag"
                                                                                    value="wpcf7-f1246-p32-o1" />
                                                                                <input type="hidden"
                                                                                    name="_wpcf7_container_post" value="32" />
                                                                                <input type="hidden"
                                                                                    name="_wpcf7_posted_data_hash" value="" />
                                                                            </div>
                                                                            <div className="row clearfix">
                                                                                <div
                                                                                    className="col-lg-4 col-md-12 col-sm-12 form-group">
                                                                                    <div className="icon-box">
                                                                                        <p><i className="fas fa-user"></i>
                                                                                        </p>
                                                                                    </div>
                                                                                    <p><span className="wpcf7-form-control-wrap"
                                                                                        data-name="text-6"><input
                                                                                            size="40"
                                                                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                            aria-required="true"
                                                                                            aria-invalid="false"
                                                                                            placeholder="Name*"
                                                                                            value={name}
                                                                                            onChange={(e) => setName(e.target.value)}
                                                                                            type="text"
                                                                                            name="name" /></span>
                                                                                        {errors.name && <span className="error text-danger">{errors.name}</span>}
                                                                                    </p>
                                                                                </div>
                                                                                <div
                                                                                    className="col-lg-4 col-md-12 col-sm-12 form-group">
                                                                                    <div className="icon-box">
                                                                                        <p><i
                                                                                            className="fas fa-envelope-open"></i>
                                                                                        </p>
                                                                                    </div>
                                                                                    <p><span className="wpcf7-form-control-wrap"
                                                                                        data-name="email-115"><input
                                                                                            size="40"
                                                                                            className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                                                                            aria-required="true"
                                                                                            aria-invalid="false"
                                                                                            placeholder="Email Id*"
                                                                                            value={email}
                                                                                            onChange={(e) => setEmail(e.target.value)}
                                                                                            type="email"
                                                                                            name="email" /></span>
                                                                                        {errors.email && <span className="error text-danger">{errors.email}</span>}
                                                                                    </p>
                                                                                </div>
                                                                                <div
                                                                                    className="col-lg-4 col-md-12 col-sm-12 form-group">
                                                                                    <div className="icon-box">
                                                                                        <p><i className="fas fa-phone"></i>
                                                                                        </p>
                                                                                    </div>
                                                                                    <p><span className="wpcf7-form-control-wrap"
                                                                                        data-name="text-7"><input
                                                                                            size="40"
                                                                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                            aria-required="true"
                                                                                            aria-invalid="false"
                                                                                            placeholder="Phone*"
                                                                                            value={phone}
                                                                                            onChange={(e) => setPhone(e.target.value)}
                                                                                            type="number"
                                                                                            name="phone" required /></span>
                                                                                        {errors.phone && <span className="error text-danger">{errors.phone}</span>}
                                                                                    </p>
                                                                                </div>
                                                                                <div
                                                                                    className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                                                    <div className="icon-box">
                                                                                        <p><i className="fas fa-tv"></i>
                                                                                        </p>
                                                                                    </div>
                                                                                    <p><span className="wpcf7-form-control-wrap"
                                                                                        data-name="text-8"><input
                                                                                            size="40"
                                                                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                            aria-required="true"
                                                                                            aria-invalid="false"
                                                                                            placeholder="Website"
                                                                                            value={website}
                                                                                            onChange={(e) => setWebsite(e.target.value)}
                                                                                            type="text"
                                                                                            name="website" /></span>
                                                                                        {errors.website && <span className="error text-danger">{errors.website}</span>}
                                                                                    </p>
                                                                                </div>
                                                                                <div
                                                                                    className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                                                    <div className="icon-box">
                                                                                        <p><i
                                                                                            className="fa-sharp fas fa-text-width"></i>
                                                                                        </p>
                                                                                    </div>
                                                                                    <p><span className="wpcf7-form-control-wrap"
                                                                                        data-name="textarea-929"><textarea
                                                                                            cols="40" rows="10"
                                                                                            className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                                                            aria-required="true"
                                                                                            aria-invalid="false"
                                                                                            value={message}
                                                                                            onChange={(e) => setMessage(e.target.value)}
                                                                                            placeholder="Your Message..."
                                                                                            name="message"></textarea></span>
                                                                                        {errors.message && <span className="error text-danger ">{errors.message}</span>}
                                                                                    </p>
                                                                                </div>
                                                                                <div lg={11} className=' d-flex  justify-content-end my-3 '>
                                                                                    <ReCAPTCHA
                                                                                        ref={captchaRef}
                                                                                        //test key
                                                                                        // sitekey="6LdOus0pAAAAADdOMM08sSgGToiefhBsU80Y7UJA"
                                                                                        // server key
                                                                                        sitekey="6Ld3e7QpAAAAAH7rseHrdwzF0VPZWtJ2ESOVrR_V"
                                                                                        //local
                                                                                        // sitekey="6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz"
                                                                                        // sitekey={window.location.hostname == "localhost" ? "6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz" : "6Ld3e7QpAAAAAH7rseHrdwzF0VPZWtJ2ESOVrR_V"}
                                                                                        onChange={onChange}
                                                                                    />
                                                                                </div>
                                                                                {errors.captcha && <span className="error text-danger" style={{ fontWeight: "400" }}> {errors.captcha}</span>}
                                                                                <div
                                                                                    className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred className=' d-flex  justify-content-end '">
                                                                                    <button className="theme-btn btn-one"
                                                                                        type="submit"
                                                                                        name="submit"><span>Send
                                                                                            Your Message</span></button>

                                                                                </div>
                                                                            </div>
                                                                            <div className="wpcf7-response-output"
                                                                                aria-hidden="true"></div>
                                                                        </form>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        {/* contact-section end */}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
                <Container fluid>
                    <section
                        className="mt-lg-4 mb-lg-5 elementor-section elementor-top-section elementor-element elementor-element-1fdab63 elementor-section-boxed elementor-section-height-default elementor-section-height-default mb-3"
                        data-id="1fdab63" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-default">
                            <Row className='tabAdjustment'>
                                {
                                    data.length == 0 ? "" :
                                        data?.map((item, id) => {
                                            return (
                                                <Col lg={4} md={6} sm={12} className='column1'>
                                                    <div className="elementor-column elementor-top-column elementor-element elementor-element-a4fd0a5 "
                                                        data-id="a4fd0a5" data-element_type="column">
                                                        <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-ca701f4 elementor-widget elementor-widget-printpark_icon_box"
                                                                data-id="ca701f4" data-element_type="widget"
                                                                data-widget_type="printpark_icon_box.default">
                                                                <div className="elementor-widget-container">
                                                                    <section className="info-section centred p-0 m-0">
                                                                        <div className="info-column">
                                                                            <div className="info-block-one">
                                                                                <div className="inner-box te-icon-box cardHeight">
                                                                                    <div className="icon-box te-icon">
                                                                                        <i className="flaticon-map"></i>
                                                                                    </div>
                                                                                    <p className="te-text">Visit our office <br />9 am to 7 pm Monday to Friday.
                                                                                    </p>
                                                                                    <h4 className="te-subtitle">{item.address}
                                                                                    </h4>
                                                                                    <h6 className="text-lowercase"><a href="mailto:{item.email}" >{item.email}</a></h6>
                                                                                    <h6><a href={`tel:+91${item.contact}`}>+91 {item.contact}</a></h6>
                                                                                    <h6><a href={item.geolocation}
                                                                                        target="&quot;_blank&quot;" rel="&quot;nofollow&quot;"><i
                                                                                            className="flaticon-arrow-right"></i>View On Map</a></h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })
                                }
                                {/* <Col lg={4} md={6} sm={12} className='column1'>
                                    <div className="elementor-column elementor-top-column elementor-element elementor-element-a4fd0a5 "
                                        data-id="a4fd0a5" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div className="elementor-element elementor-element-ca701f4 elementor-widget elementor-widget-printpark_icon_box"
                                                data-id="ca701f4" data-element_type="widget"
                                                data-widget_type="printpark_icon_box.default">
                                                <div className="elementor-widget-container">
                                                    <section className="info-section centred p-0 m-0">
                                                        <div className="info-column">
                                                            <div className="info-block-one">
                                                                <div className="inner-box te-icon-box cardHeight">
                                                                    <div className="icon-box te-icon">
                                                                        <i className="flaticon-map"></i>
                                                                    </div>
                                                                    <p className="te-text">Visit our office <br />9 am to 6 pm Monday to Friday.
                                                                    </p>
                                                                    <h4 className="te-subtitle">Third Floor, Gajra Chambers, Mumbai - Agra National Hwy, Kamod Nagar, Indira Nagar, Nashik, Maharashtra 422009.
                                                                    </h4>
                                                                    <h6 className="text-lowercase"><a href="mailto:info@sumagoinfotech.com" >info@sumagoinfotech.com</a></h6>
                                                                    <h6><a href="tel:+918530388815">+91 8530388815</a></h6>
                                                                    <h6><a href="https://maps.app.goo.gl/FnzfAoExzBH4AwE39"
                                                                        target="&quot;_blank&quot;" rel="&quot;nofollow&quot;"><i
                                                                            className="flaticon-arrow-right"></i>View On Map</a></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={12} className='column2'>
                                    <div className="justify-content-center elementor-column elementor-top-column elementor-element elementor-element-a4fd0a5"
                                        data-id="a4fd0a5" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div className="elementor-element elementor-element-ca701f4 elementor-widget elementor-widget-printpark_icon_box"
                                                data-id="ca701f4" data-element_type="widget"
                                                data-widget_type="printpark_icon_box.default">
                                                <div className="elementor-widget-container">
                                                    <section className="info-section centred p-0 m-0">
                                                        <div className="info-column">
                                                            <div className="info-block-one">
                                                                <div className="inner-box te-icon-box cardHeight">
                                                                    <div className="icon-box te-icon">
                                                                        <i className="flaticon-map"></i>
                                                                    </div>
                                                                    <p className="te-text">Visit our office <br />9 am to 6 pm Monday to Friday.
                                                                    </p>
                                                                    <h4 className="te-subtitle">The Avenue, Fourth Floor, Behind Prakash Petrol Pump, Govind Nagar, Nashik, Maharashtra 422009.
                                                                    </h4>
                                                                    <h6 className="text-lowercase"><a href="mailto:info@sumagoinfotech.com">info@sumagoinfotech.com</a></h6>
                                                                    <h6><a href="tel:+918408084888">+91 8408084888</a></h6>
                                                                    <h6><a href="https://maps.app.goo.gl/KEyFqLC59pYGqcwy9"
                                                                        target="&quot;_blank&quot;" rel="&quot;nofollow&quot;"><i
                                                                            className="flaticon-arrow-right"></i>View On Map</a></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={12} className='column3'>
                                    <div className="elementor-column elementor-top-column elementor-element elementor-element-a4fd0a5"
                                        data-id="a4fd0a5" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div className="elementor-element elementor-element-ca701f4 elementor-widget elementor-widget-printpark_icon_box"
                                                data-id="ca701f4" data-element_type="widget"
                                                data-widget_type="printpark_icon_box.default">
                                                <div className="elementor-widget-container">
                                                    <section className="info-section centred p-0 m-0">
                                                        <div className="info-column">
                                                            <div className="info-block-one">
                                                                <div className="inner-box te-icon-box cardHeight cardAtCenter">
                                                                    <div className="icon-box te-icon">
                                                                        <i className="flaticon-map"></i>
                                                                    </div>
                                                                    <p className="te-text">Visit our office <br />9 am to 6 pm Monday to Friday.
                                                                    </p>
                                                                    <h4 className="te-subtitle">Third Floor, Kakade Center Port, University Rd, near E-Square, Premnagar, Shivajinagar, Pune, Maharashtra 411016.
                                                                    </h4>
                                                                    <h6 className="text-lowercase"><a href="mailto:info@sumagoinfotech.com" >info@sumagoinfotech.com</a></h6>
                                                                    <h6><a href="tel:+917263084881" >+91 7263084881</a></h6>
                                                                    <h6><a href="https://maps.app.goo.gl/SshnZN7UXz888vk59"
                                                                        target="&quot;_blank&quot;" rel="&quot;nofollow&quot;"><i
                                                                            className="flaticon-arrow-right"></i>View On Map</a></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col> */}
                            </Row>
                        </div>
                    </section >
                </Container>
            </div >
            <div className="clearfix"></div>
        </>
    )
}

export default Contact1
