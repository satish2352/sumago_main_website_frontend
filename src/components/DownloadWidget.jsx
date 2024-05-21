import React, { useState, useRef } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import downloadFile from "../assets/documents/business_profile.pdf";
import im from '../assets/images/wp-content/uploads/2023/08/thumbnail.png';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const DownloadWidget = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const captchaRef = useRef(null);
    const [isCaptchaVerified, setCaptchaVerified] = useState(false);

    const onChange = (value) => {
        setCaptchaVerified(true);
        console.log(value);
    };

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        location: ''
    });

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        resetForm();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
        setError('');  // Clear error message when user starts typing again
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('https://sumagodemo.com/broucherDownload/createBroucherDownloadRecord', formData);
                console.log('API Response:', response.data);

                // Trigger the file download
                const link = document.createElement('a');
                link.href = downloadFile;
                link.setAttribute('download', 'file.pdf'); // Specify the file name
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);

                alert("Downloaded successfully");
                handleClose();
            } catch (error) {
                console.error('Error:', error);
                // Handle error, show a message to the user, etc.
                setError('Mobile number is already registered');
            }
        }
    };

    const validateForm = () => {
        let valid = true;
        if (formData.fullname.trim() === '') {
            setError('Full Name is required');
            valid = false;
        } else if (formData.email.trim() === '' || !/\S+@\S+\.\S+/.test(formData.email)) {
            setError('Valid Email is required');
            valid = false;
        } else if (formData.phone.trim() === '' || !/^\d{10}$/.test(formData.phone)) {
            setError('Phone number must be exactly 10 digits');
            valid = false;
        } else if (formData.location.trim() === '') {
            setError('Location is required');
            valid = false;
        } else if (!isCaptchaVerified) {
            setError('Please complete the reCAPTCHA before submitting.');
            valid = false;
        }
        return valid;
    };

    const resetForm = () => {
        setFormData({
            fullname: '',
            email: '',
            phone: '',
            location: ''
        });
        setError('');
        setCaptchaVerified(false);
        if (captchaRef.current) {
            captchaRef.current.reset();
        }
    };

    return (
        <div className="widget widget_printpark_download_box_widget">
            <div className="download-widget">
                <figure className="image-box">
                    <img src={im} alt="" />
                </figure>
                <div className="content-box">
                    <div className="text">
                        <h4>Download</h4>
                    </div>
                    <div className="download-btn">
                        <Button type="button" onClick={handleShow}>
                            <i className="flaticon-file"></i>
                        </Button>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Please fill the form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formFullname">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formLocation">
                            <Form.Label>Select Location</Form.Label>
                            <Form.Control
                                as="select"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Location</option>
                                <option value="Pune">Pune</option>
                                <option value="Nashik">Nashik</option>
                            </Form.Control>
                        </Form.Group>
                        <ReCAPTCHA
                            ref={captchaRef}
                            // sitekey="6LdOus0pAAAAADdOMM08sSgGToiefhBsU80Y7UJA"
                            sitekey="6Ld3e7QpAAAAAH7rseHrdwzF0VPZWtJ2ESOVrR_V"
                          onChange={onChange}
                        />
                        {error && <p className="text-danger">{error}</p>}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default DownloadWidget;
