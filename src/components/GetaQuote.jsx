import React, { useState } from 'react';
import '../assets/css/GetaQuote.css';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from 'react'
const GetaQuote = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [service, setService] = useState("")
    const [other, setOther] = useState("")
    const [address, setAddress] = useState("")
    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState({});
    const captchaRef = useRef(null);
    const [isCaptchaVerified, setCaptchaVerified] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onChange = (value) => {
        setCaptchaVerified(true);
        console.log(value);
    }
    
    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!comment.trim()) {
            errors.comment = 'comment is required';
            isValid = false;
        }
        if (!address.trim()) {
            errors.address = 'address is required';
            isValid = false;
        }
        if (!service.trim()) {
            errors.service = 'Service is required';
            isValid = false;
        }
        if (!other.trim()) {
            errors.other = 'other service is required';
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
            errors.email = 'Email Id is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
            isValid = false;
        }

        if (!isCaptchaVerified) {
            errors.captcha = 'please complete the recaptcha before submitting.';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };
    const SubmitData = (e) => {
        e.preventDefault();
        let newData = {
            name: name, email: email, phone: phone, service: service, other_service: other, address: address, comment: comment
        }
        if (validateForm()) {
            axios.post("/quotes/create", newData).then((resp) => {
                console.log("resp", resp)
                setName("");
                setEmail("");
                setPhone("");
                setService("");
                setOther("");
                setAddress("");
                setComment("");
                handleClose()
            }).catch((err) => {
                console.log("err", err);
            })
        }
    }

    // const clearFields = () => {
    //     setName("")
    //     setEmail("")
    //     setPhone("")
    //     setService("")
    //     setOther("")
    //     setAddress("")
    //     setComment("")
    // }
    return (
        <>
            <div className='getaquote-section container'>
                <Row>
                    <Col lg={4} md={6} sm={12} className='column-1'>
                        <div className="elementor-column elementor-top-column elementor-element elementor-element-fec6395  "
                            data-id="fec6395" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated d-flex  align-content-center">
                                <div className="elementor-element elementor-element-91f6e29 elementor-widget elementor-widget-printpark_icon_box"
                                    data-id="91f6e29" data-element_type="widget"
                                    data-widget_type="printpark_icon_box.default">
                                    <div className="elementor-widget-container">
                                        <section className="info-section centred p-0 m-0">
                                            <div className="info-column">
                                                <div className="info-block-one">
                                                    <div className="inner-box te-icon-box">
                                                        <div>
                                                            <div className="icon-box te-icon">
                                                                <i className="flaticon-incoming-call"></i>
                                                            </div>
                                                            <p className="te-text">If you need help, don't look far,
                                                                <br />
                                                                call us today!
                                                            </p>
                                                            <h4 className="te-subtitle"><a
                                                                href="tel:+91 8530388815" className='ms-5 me-5 ps-1 pe-1'>+918530388815</a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='column-2'>
                        <div className="elementor-column elementor-top-column elementor-element elementor-element-a4fd0a5  "
                            data-id="a4fd0a5" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated d-flex  align-content-center">
                                <div className="elementor-element elementor-element-ca701f4 elementor-widget elementor-widget-printpark_icon_box"
                                    data-id="ca701f4" data-element_type="widget"
                                    data-widget_type="printpark_icon_box.default">
                                    <div className="elementor-widget-container">
                                        <section className="info-section centred p-0 m-0">
                                            <div className="info-column">
                                                <div className="info-block-one">
                                                    <div className="inner-box te-icon-box cardAtCenter" >
                                                        <div>
                                                            <div className="icon-box te-icon">
                                                                <i className="flaticon-map"></i>
                                                            </div>
                                                            <h6 className="te-subtitle">Cost-effective & long-term Custom Software solutions by committed professionals.</h6>
                                                            <br />
                                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                                                <p>
                                                                    <button type="button" className="theme-btn btn-two" onClick={handleShow}>
                                                                        GET A QUOTE
                                                                    </button>

                                                                    {/* Modal */}
                                                                    <Modal show={show} onHide={handleClose}>
                                                                        <Modal.Header closeButton>
                                                                            <Modal.Title>GET A QUOTE</Modal.Title>
                                                                        </Modal.Header>
                                                                        <Form onSubmit={SubmitData} name="myForm">
                                                                            <Modal.Body>
                                                                                <Form.Group>
                                                                                    <Form.Label>Name:</Form.Label>
                                                                                    <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                                                                    {errors.name && <span className="error text-danger">{errors.name}</span>}
                                                                                </Form.Group>
                                                                                <Form.Group>
                                                                                    <Form.Label>Phone No.:</Form.Label>
                                                                                    <Form.Control type="tel" placeholder="Phone no." value={phone} onChange={(e) => setPhone(e.target.value)} />
                                                                                    {errors.phone && <span className="error text-danger">{errors.phone}</span>}
                                                                                </Form.Group>
                                                                                <Form.Group>
                                                                                    <Form.Label>Email Id:</Form.Label>
                                                                                    <Form.Control type="email" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                                                    {errors.email && <span className="error text-danger">{errors.email}</span>}
                                                                                </Form.Group>
                                                                                <Form.Group>
                                                                                    <Form.Label>Type of Services:</Form.Label>
                                                                                    <Form.Control as="select" value={service} onChange={(e) => setService(e.target.value)}>
                                                                                        <option value="" disabled>Select Service</option>
                                                                                        <option value="Website Development">Website Development</option>
                                                                                        <option value="App Development">App Development</option>
                                                                                        <option value="Software Development">Software Development</option>
                                                                                        <option value="Digital Marketing">Digital Marketing</option>
                                                                                        <option value="Social Media">Social Media</option>
                                                                                        <option value="SEO">SEO</option>
                                                                                        <option value="Training/Internship">Training/Internship</option>
                                                                                        <option value="Start up Consultancy">Start up Consultancy</option>
                                                                                        <option value="#">Web Hosting</option>
                                                                                    </Form.Control>
                                                                                    {errors.service && <span className="error text-danger">{errors.service}</span>}
                                                                                </Form.Group>
                                                                                <Form.Group>
                                                                                    <Form.Label>Other Service:</Form.Label>
                                                                                    <Form.Control type="text" placeholder="Other Service" value={other} onChange={(e) => setOther(e.target.value)} />
                                                                                    {errors.other && <span className="error text-danger">{errors.other}</span>}
                                                                                </Form.Group>
                                                                                <Form.Group>
                                                                                    <Form.Label>Address:</Form.Label>
                                                                                    <Form.Control as="textarea" rows={4} placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                                                                    {errors.address && <span className="error text-danger">{errors.address}</span>}
                                                                                </Form.Group>
                                                                                <Form.Group>
                                                                                    <Form.Label>Any Comment:</Form.Label>
                                                                                    <Form.Control as="textarea" rows={4} placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                                                                                    {errors.comment && <span className="error text-danger">{errors.comment}</span>}
                                                                                </Form.Group>
                                                                                <div lg={11} className='mt-3'>
                                                                                    <ReCAPTCHA
                                                                                        ref={captchaRef}
                                                                                        sitekey={window.location.hostname == "localhost" ? "6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz" : "6LedW7IpAAAAALRXSgALrJKbJH1D7iaqc8HrMoAy"}
                                                                                        onChange={onChange}
                                                                                    />
                                                                                </div>
                                                                                {errors.captcha && <span className="error text-danger">{errors.captcha}</span>}
                                                                                {/* <div className="form-group mt-4">
                                                                                    <center>
                                                                                    </center>
                                                                                </div> */}
                                                                            </Modal.Body>
                                                                            <Modal.Footer>
                                                                                <Button variant="secondary" className='mx-1' type="button" onClick={handleClose}>Close</Button>
                                                                                <Button variant="success" className='mx-1' type="submit">Submit</Button>
                                                                            </Modal.Footer>
                                                                        </Form>
                                                                    </Modal>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='column-3'>
                        <div className="elementor-column elementor-top-column elementor-element elementor-element-c350336 "
                            data-id="c350336" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated  d-flex  align-content-center">
                                <div className="elementor-element elementor-element-e2b4564 elementor-widget elementor-widget-printpark_icon_box"
                                    data-id="e2b4564" data-element_type="widget"
                                    data-widget_type="printpark_icon_box.default">
                                    <div className="elementor-widget-container">
                                        <section className="info-section centred p-0 m-0">
                                            <div className="info-column">
                                                <div className="info-block-one">
                                                    <div className="inner-box te-icon-box">
                                                        <div>
                                                            <div className="icon-box te-icon">
                                                                <i className="flaticon-message"></i>
                                                            </div>
                                                            <p className="te-text">Do you have a project to work? <br />Send your details.</p>
                                                            <h4 className="te-subtitle"><a
                                                                href="mailto:info@sumagoinfotech.com">info@sumagoinfotech.com</a></h4>
                                                            {/* <h4 className="te-subtitle"><a
                                                            href="mailto:info@example.com">+91 7263084881</a></h4> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default GetaQuote;