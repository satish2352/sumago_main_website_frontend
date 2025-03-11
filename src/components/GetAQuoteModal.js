import React, { useState, useRef, useEffect } from "react";
import { Modal, Button, Form, Alert, Spinner, Container, Row, Col } from "react-bootstrap";
import axios from "axios"; // Import Axios
import "./getaquote.css";
import ReCAPTCHA from "react-google-recaptcha";

const GetAQuoteModal = ({ show, handleClose }) => {
    const [step, setStep] = useState(1);
    const [industry, setIndustry] = useState("");
    const [services, setServices] = useState(""); // Initialize as a string
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [firm, setFirm] = useState("");
    const [address, setAddress] = useState("");
    const [comment, setComment] = useState("");
    const [otherService, setOtherService] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [isCaptchaVerified, setCaptchaVerified] = useState(false);
    const captchaRef = useRef(null);
    const onChange = (value) => {
        // This function will be called when the ReCAPTCHA is completed.
        setCaptchaVerified(true);
        console.log(value);
    };
    // Validation states
    const [errors, setErrors] = useState({});

    const industries = ["Real Estate", "Manufacturing", "Education", "Healthcare", "Auto", "Other"];
    const serviceOptions = [
        "Website Development",
        "Digital Marketing",
        "Software Development",
        "Mobile Application Development",
        "Resource Augmentation",
        "IT Consulting",
        "Other"
    ];


    useEffect(() => {
        if (show) {
            // Reset form fields when modal is opened
            setStep(1);
            setIndustry("");
            setServices("");
            setName("");
            setEmail("");
            setPhone("");
            setCity("");
            setFirm("");
            setAddress("");
            setComment("");
            setOtherService("");
            setCaptchaVerified(false);
            setErrors({});
            setSuccess(false);
            setError("");

            if (captchaRef.current) {
                captchaRef.current.reset();
            }
        }
    }, [show]);
    const validateStep = () => {
        let newErrors = {};

        if (step === 1 && !industry) {
            newErrors.industry = "Please select an industry.";
        }

        if (step === 2 && services.length === 0) {
            newErrors.services = "Please select at least one service.";
        }

        if (step === 3) {
            if (!name) newErrors.name = "Name is required.";
            if (!email) {
                newErrors.email = "Email is required.";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                newErrors.email = "Invalid email format.";
            } if (!phone) newErrors.phone = "Phone number is required.";
            else if (phone.length !== 10) newErrors.phone = "Phone number must be exactly 10 digits.";
            if (!city) newErrors.city = "City is required.";
            if (!firm) newErrors.firm = "Firm name is required.";
            if (!address) newErrors.address = "Address is required.";
            if (!isCaptchaVerified) {
                newErrors.captcha = 'Please complete the reCAPTCHA before submitting.';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep()) {
            setErrors({});
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        setErrors({});
        setStep(step - 1);
    };

    const handleServiceChange = (service) => {
        setServices((prev) => {
            let serviceArray = prev ? prev.split(",") : []; // Convert string to array
            if (serviceArray.includes(service)) {
                serviceArray = serviceArray.filter((s) => s !== service); // Remove service
            } else {
                serviceArray.push(service); // Add service
            }
            return serviceArray.join(","); // Store as a single string
        });
    };



    const handlePhoneChange = (e) => {
        const value = e.target.value;
        const phonePattern = /^[6789]\d{0,9}$/; // Starts with 6,7,8,9 and allows up to 10 digits

        if (value === "" || phonePattern.test(value)) {
            setPhone(value);
            setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: "Phone number must start with 6, 7, 8, or 9 and be 10 digits long.",
            }));
        }
    };





    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateStep()) return;

        setLoading(true);
        setError("");  // Clear previous errors
        setSuccess(false);

        const formData = { industry, services, name, email, phone, city, firm, address, comment, other_service: otherService };

        try {
            const response = await axios.post("/quotes/create", formData, {
                headers: { "Content-Type": "application/json" }
            });
            // alert("Your information submitted. We will connect with you shortly!!");
            setStep(4)
            setSuccess(true);
            setIndustry("");
            setServices("");
            setName("");
            setEmail("");
            setPhone("");
            setCity("");
            setFirm("");
            setAddress("");
            setComment("");
            setOtherService("");
            setCaptchaVerified(false);
            if (captchaRef.current) {
                captchaRef.current.reset();
            }

            setTimeout(() => {
                handleClose();
            }, 3000);            setStep(4)

        } catch (err) {
            if (err.response) {
                console.error("Server Response:", err.response.data);

                // Check if it's a 409 error
                if (err.response.status === 409) {
                    setError("This email or phone number is already registered.");
                } else {
                    setError(err.response.data.message || "Something went wrong.");
                }
            } else if (err.request) {
                setError("No response from server. Please try again later.");
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };



    return (
        <Modal show={show} onHide={handleClose} size="lg" centered
        >

            <Container className="custom-modal-content px-0">

                <Modal.Header closeButton className="custom-modal-header">
                    <Modal.Title>Get a Quote</Modal.Title>
                </Modal.Header>
                <Modal.Body className="custom-modal-body" >

                    {step === 1 && (
                        <div>
                            <h5>Select Industry</h5>
                            <Form>
                                {industries.map((item) => (
                                    <Form.Check
                                        type="radio"
                                        label={item}
                                        key={item}
                                        name="industry"
                                        value={item}
                                        checked={industry === item}
                                        onChange={(e) => setIndustry(e.target.value)}
                                    />
                                ))}
                                {errors.industry && <div className="text-danger">{errors.industry}</div>}
                            </Form>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <h5>Select Service Requirement</h5>
                            <Form>
                                {serviceOptions.map((item) => (
                                    <Form.Check
                                        type="checkbox"
                                        label={item}
                                        key={item}
                                        value={item}
                                        checked={services.includes(item)}
                                        onChange={() => handleServiceChange(item)}
                                    />
                                ))}
                                {errors.services && <div className="text-danger">{errors.services}</div>}
                            </Form>
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <h5>Contact Details</h5>
                            <Form className="vgfg">
                                <Form.Group>
                                    <Form.Label className="pt-2 pb-1 ps-2">Name :</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={name}
                                        placeholder="Enter your full name"
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Allow only alphabets and spaces
                                            setName(value);
                                        }} />
                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="pt-2 pb-1 ps-2">Email Id :</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        placeholder="Enter your email id"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="pt-2 pb-1 ps-2">Mobile Number :</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={phone}
                                        placeholder="Enter 10-digit mobile number"
                                        onChange={handlePhoneChange}
                                    />
                                    {errors.phone && <div className="text-danger">{errors.phone}</div>}
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="pt-2 pb-1 ps-2">City :</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={city}
                                        placeholder="Enter your city"
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Allow only alphabets and spaces
                                            setCity(value);
                                        }} />

                                    {errors.city && <div className="text-danger">{errors.city}</div>}
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="pt-2 pb-1 ps-2">Firm Name :</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={firm}
                                        placeholder="Enter your firm name"
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Allow only alphabets and spaces
                                            setFirm(value);
                                        }} />
                                    {errors.firm && <div className="text-danger">{errors.firm}</div>}
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="pt-2 pb-1 ps-2">Address :</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={address}
                                        placeholder="Enter your firm address"
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Allow only alphabets and spaces
                                            setAddress(value);
                                        }} />
                                    {errors.address && <div className="text-danger">{errors.address}</div>}
                                </Form.Group>
                                <div lg={11} className='mt-3 d-grid justify-content-end'>
                                    <ReCAPTCHA
                                        ref={captchaRef}
                                        //test key
                                        // sitekey="6LdOus0pAAAAADdOMM08sSgGToiefhBsU80Y7UJA"
                                        // server key
                                        sitekey="6Ld3e7QpAAAAAH7rseHrdwzF0VPZWtJ2ESOVrR_V"
                                        //local key
                                        // sitekey="6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz"
                                        // sitekey={window.location.hostname == "localhost" ? "6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz" : "6Ld3e7QpAAAAAH7rseHrdwzF0VPZWtJ2ESOVrR_V"}
                                        onChange={onChange}
                                    />
                                    {errors.captcha && <span className="error text-danger">{errors.captcha}</span>}

                                </div>






                            </Form>
                        </div>
                    )}

                    {/* 🆕 Step 4: Success Message */}
                    {step === 4 && (
                        <div className="text-center">
                            <h4 className="text-success">🎉 Thank You!</h4>
                            <p>Your information has been submitted successfully. We will connect with you shortly.</p>
                        </div>
                    )}

                </Modal.Body>
                <Modal.Footer className="custom-modal-footer">
                    <div className="d-flex justify-content-end w-100">
                        {step > 1 && (
                            <Button variant="secondary" className="custom-button secondary me-2" onClick={handleBack} disabled={loading}>
                                Back
                            </Button>
                        )}
                        {step < 3 && (
                            <Button variant="primary" className="custom-button primary" onClick={handleNext} disabled={loading}>
                                Next
                            </Button>
                        )}
                        {step === 3 && (
                            <Button variant="success" className="custom-button primary" onClick={handleSubmit} disabled={loading}>
                                {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Submit"}
                            </Button>
                        )}
                        {step === 4 && (
                            <Button variant="primary" className="custom-button primary" onClick={handleClose}>
                                Close
                            </Button>
                        )}
                    </div>
                </Modal.Footer>


            </Container>


        </Modal>
    );
};

export default GetAQuoteModal;
