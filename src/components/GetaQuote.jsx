import React, { useState, useRef } from 'react';
import '../assets/css/GetaQuote.css';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const GetaQuote = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [other, setOther] = useState("");
    const [address, setAddress] = useState("");
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState({});
    const captchaRef = useRef(null);
    const [isCaptchaVerified, setCaptchaVerified] = useState(false);
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [storedPhone, setStoredPhone] = useState("8530388815");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onChange = (value) => {
        setCaptchaVerified(true);
        console.log(value);
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!comment.trim()) {
            errors.comment = 'Comment is required';
            isValid = false;
        }
        if (!address.trim()) {
            errors.address = 'Address is required';
            isValid = false;
        }
        if (!service.trim()) {
            errors.service = 'Service is required';
            isValid = false;
        }
        if (service === "Other Service" && !other.trim()) {
            errors.other = 'Other service is required';
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
            errors.captcha = 'Please complete the recaptcha before submitting.';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const SubmitData = async (e) => {
        e.preventDefault();
        let newData = {
            name: name,
            email: email,
            phone: phone,
            service: service,
            other_service: service === "Other Service" ? other : "NA",
            address: address,
            comment: comment
        };

        if (validateForm()) {
            try {
                const response = await axios.post('/quotes/create', newData);
                console.log('API Response:', response.data);
                setName("");
                setEmail("");
                setPhone("");
                setService("");
                setOther("");
                setAddress("");
                setComment("");
                handleClose();
                setErrors("")
                alert("Your information submitted. We will connect with you shortly!!");
            } catch (error) {
                console.error('Error:', error);
                console.error('Error Response:', error.response?.data);

                if (error.response && error.response.data && error.response.data.error) {
                    const errorMessage = error.response.data.error;
                    if (errorMessage === 'Email already exists') {
                        setError('Email is already registered');
                    } else if (errorMessage === 'Phone number already exists') {
                        setError('Mobile number is already registered');
                    } else {
                        setError('An unexpected error occurred');
                    }
                } else {
                    setError('An unexpected error occurred');
                }
            }
            axios.post("https://api.neodove.com/integration/custom/407cfcb7-1e05-4e5b-9421-3f50bcd5167f/leads", {
                name: name,
                mobile: phone,
                email: email,
                detail: service,
                detail: address
            });
        }
    };

    return (
        <>
            <div className='getaquote-section container mt-5'>
                <Row>
                    <Col lg={4} md={6} sm={12} className='column-1'>
                        <div className="elementor-column elementor-top-column elementor-element elementor-element-fec6395">
                            <div className="elementor-widget-wrap elementor-element-populated d-flex align-content-center">
                                <div className="elementor-element elementor-element-91f6e29 elementor-widget elementor-widget-printpark_icon_box">
                                    <div className="elementor-widget-container">
                                        <section className="info-section centred p-0 m-0">
                                            <div className="info-column">
                                                <div className="info-block-one">
                                                    <div className="inner-box te-icon-box">
                                                        <div>
                                                            <div className="icon-box te-icon">
                                                                <i className="flaticon-incoming-call"></i>
                                                            </div>
                                                            <p className="te-text">If you need help, don't look far,<br />call us today!</p>
                                                            <h4 className="te-subtitle">
                                                                <a href="tel:+91 8530388815" className='ms-5 me-5 ps-1 pe-1'>+91{storedPhone}</a>
                                                            </h4>
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
                        <div className="elementor-column elementor-top-column elementor-element elementor-element-a4fd0a5">
                            <div className="elementor-widget-wrap elementor-element-populated d-flex align-content-center">
                                <div className="elementor-element elementor-element-ca701f4 elementor-widget elementor-widget-printpark_icon_box">
                                    <div className="elementor-widget-container">
                                        <section className="info-section centred p-0 m-0">
                                            <div className="info-column">
                                                <div className="info-block-one">
                                                    <div className="inner-box te-icon-box cardAtCenter">
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
                                                                        <Form onSubmit={SubmitData}>
                                                                            <Modal.Body>
                                                                                <Form.Group>
                                                                                    <Form.Label>Name:</Form.Label>
                                                                                    <Form.Control
                                                                                        type="text"
                                                                                        placeholder="Name"
                                                                                        value={name}
                                                                                        onChange={(e) => setName(e.target.value)}
                                                                                        onBlur={() => {
                                                                                            if (name.trim() && errors.name) {
                                                                                                setErrors({ ...errors, name: '' });
                                                                                            }
                                                                                        }}
                                                                                    />
                                                                                    {errors.name && <span className="error text-danger">{errors.name}</span>}
                                                                                </Form.Group>
                                                                                <Form.Group>
                                                                                    <Form.Label>Phone No.:</Form.Label>
                                                                                    <Form.Control
                                                                                        type="number"
                                                                                        placeholder="Phone no."
                                                                                        value={phone}
                                                                                        onChange={(e) => setPhone(e.target.value)}
                                                                                        onBlur={() => {
                                                                                            if (phone.trim() && errors.phone) {
                                                                                                setErrors({ ...errors, phone: '' });
                                                                                            }
                                                                                        }}
                                                                                        maxLength={10} // Limit input to 10 characters
                                                                                    />
                                                                                    {errors.phone && <span className="error text-danger">{errors.phone}</span>}
                                                                                </Form.Group>
                                                                                <Form.Group>
                                                                                    <Form.Label>Email Id:</Form.Label>
                                                                                    <Form.Control
                                                                                        type="email"
                                                                                        placeholder="Email Id"
                                                                                        value={email}
                                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                                        onBlur={() => {
                                                                                            if (email.trim() && errors.email) {
                                                                                                setErrors({ ...errors, email: '' });
                                                                                            }
                                                                                        }}
                                                                                    />
                                                                                    {errors.email && <span className="error text-danger">{errors.email}</span>}
                                                                                </Form.Group>
                                                                                <Form.Group>
                                                                                    <Form.Label>Type of Services:</Form.Label>
                                                                                    <Form.Control as="select" value={service} onChange={(e) => setService(e.target.value)}>
                                                                                        <option value="" disabled>Select Service</option>
                                                                                        <option value="Website Development">Website Development</option>
                                                                                        <option value="App Development">App Development</option>
                                                                                        <option value="Custom Software Development">Custom Software Development</option>
                                                                                        <option value="Other Service">Other Service</option>
                                                                                    </Form.Control>
                                                                                    {errors.service && <span className="error text-danger">{errors.service}</span>}
                                                                                    {service === "Other Service" && (
                                                                                        <Form.Group className='mt-2'>
                                                                                            <Form.Control
                                                                                                type="text"
                                                                                                placeholder="Please specify the service"
                                                                                                value={other}
                                                                                                onChange={(e) => setOther(e.target.value)}
                                                                                                onBlur={() => {
                                                                                                    if (other.trim() && errors.other) {
                                                                                                        setErrors({ ...errors, other: '' });
                                                                                                    }
                                                                                                }}
                                                                                            />
                                                                                            {errors.other && <span className="error text-danger">{errors.other}</span>}
                                                                                        </Form.Group>
                                                                                    )}
                                                                                </Form.Group>
                                                                                <Form.Group>
                                                                                    <Form.Label>Address:</Form.Label>
                                                                                    <Form.Control
                                                                                        type="text"
                                                                                        placeholder="Address"
                                                                                        value={address}
                                                                                        onChange={(e) => setAddress(e.target.value)}
                                                                                        onBlur={() => {
                                                                                            if (address.trim() && errors.address) {
                                                                                                setErrors({ ...errors, address: '' });
                                                                                            }
                                                                                        }}
                                                                                    />
                                                                                    {errors.address && <span className="error text-danger">{errors.address}</span>}
                                                                                </Form.Group>
                                                                                <Form.Group>
                                                                                    <Form.Label>Comment:</Form.Label>
                                                                                    <Form.Control
                                                                                        as="textarea"
                                                                                        rows={4}
                                                                                        placeholder="Comments"
                                                                                        value={comment}
                                                                                        onChange={(e) => setComment(e.target.value)}
                                                                                        onBlur={() => {
                                                                                            if (comment.trim() && errors.comment) {
                                                                                                setErrors({ ...errors, comment: '' });
                                                                                            }
                                                                                        }}
                                                                                    />
                                                                                    {errors.comment && <span className="error text-danger">{errors.comment}</span>}
                                                                                </Form.Group>
                                                                                <Form.Group className="mt-3">
                                                                                    <ReCAPTCHA
                                                                                        sitekey="6Ld3e7QpAAAAAH7rseHrdwzF0VPZWtJ2ESOVrR_V"
                                                                                        onChange={onChange}
                                                                                        ref={captchaRef}
                                                                                    />
                                                                                    {errors.captcha && <span className="error text-danger">{errors.captcha}</span>}
                                                                                </Form.Group>
                                                                                <p className='error text-danger'>{error}</p>
                                                                            </Modal.Body>
                                                                            <Modal.Footer>
                                                                                <Button variant="secondary" onClick={handleClose}>
                                                                                    Close
                                                                                </Button>
                                                                                <Button variant="primary" type="submit">
                                                                                    Submit
                                                                                </Button>
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