import React, { useState } from "react";
import { Modal, Button, Form, Alert, Spinner, Container, Row,Col } from "react-bootstrap";
import axios from "axios"; // Import Axios

const GetAQuoteModal = ({ show, handleClose }) => {
    const [step, setStep] = useState(1);
    const [industry, setIndustry] = useState("");
    const [services, setServices] = useState([]);
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
            if (!email) newErrors.email = "Email is required.";
            if (!phone) newErrors.phone = "Phone number is required.";
            else if (phone.length !== 10) newErrors.phone = "Phone number must be exactly 10 digits.";
            if (!city) newErrors.city = "City is required.";
            if (!firm) newErrors.firm = "Firm name is required.";
            if (!address) newErrors.address = "Address is required.";
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
        setServices((prev) =>
            prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
        );
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // Allow only numbers
        if (value.length <= 10) {
            setPhone(value);
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
            const response = await axios.post("http://localhost:5000/quotes/create", formData, {
                headers: { "Content-Type": "application/json" }
            });

            setSuccess(true);
            setTimeout(() => handleClose(), 2000);
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
        <Modal show={show} onHide={handleClose} size="lg" centered style={{ borderRadius: "50px" }} aria-labelledby="contained-modal-title-vcenter"
>
            <Container className=" shadow-lg">
                <Row>
                    <Col lg={6}></Col>
                    <Col lg={6}>       <div style={{ backgroundColor: "#faf1ef" }}>
                        <Modal.Header closeButton>
                            <Modal.Title>Get a Quote</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            {error && <Alert variant="danger">{error}</Alert>}
                            {success && <Alert variant="success">Quote request submitted successfully!</Alert>}

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
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            {errors.name && <div className="text-danger">{errors.name}</div>}
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="pt-2 pb-1 ps-2">Email :</Form.Label>
                                            <Form.Control
                                                type="email"
                                                value={email}
                                                placeholder="Enter your email address"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            {errors.email && <div className="text-danger">{errors.email}</div>}
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="pt-2 pb-1 ps-2">Phone :</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={phone}
                                                placeholder="Enter 10-digit phone number"
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
                                                onChange={(e) => setCity(e.target.value)}
                                            />
                                            {errors.city && <div className="text-danger">{errors.city}</div>}
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="pt-2 pb-1 ps-2">Firm Name :</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={firm}
                                                placeholder="Enter your firm name"
                                                onChange={(e) => setFirm(e.target.value)}
                                            />
                                            {errors.firm && <div className="text-danger">{errors.firm}</div>}
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="pt-2 pb-1 ps-2">Address :</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={address}
                                                placeholder="Enter your firm address"
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                            {errors.address && <div className="text-danger">{errors.address}</div>}
                                        </Form.Group>



                                    </Form>
                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            {step > 1 && <Button variant="secondary" onClick={handleBack} disabled={loading}>Back</Button>}
                            {step < 3 && <Button variant="primary" onClick={handleNext} disabled={loading}>Next</Button>}
                            {step === 3 && (
                                <Button variant="success" onClick={handleSubmit} disabled={loading}>
                                    {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Submit"}
                                </Button>
                            )}
                        </Modal.Footer>
                    </div></Col>
                </Row>
            </Container>

        </Modal>
    );
};

export default GetAQuoteModal;
