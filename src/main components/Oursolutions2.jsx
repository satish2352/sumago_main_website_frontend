import React, { useState } from 'react';
import '../assets/css/Oursolutions.css'
import im from '../assets/images/wp-content/uploads/2023/08/thumbnail.png'
import im1 from '../assets/images/wp-content/uploads/2023/08/laptop.png'
import im2 from '../assets/images/wp-content/uploads/2023/08/imagesservice/AI.jpg'
import im3 from '../assets/images/wp-content/uploads/2023/08/imagesservice/BLOCKCHAIN.jpg'
import im4 from '../assets/images/wp-content/uploads/2023/08/imagesservice/IOT.jpg'
import im5 from '../assets/images/wp-content/uploads/2023/08/imagesservice/OUTSOURCING .jpg'
import im7 from '../assets/images/wp-content/uploads/2023/08/imagesservice/consulting.jpg'
import im8 from '../assets/images/wp-content/uploads/2023/08/imagesservice/dataanayltics.jpg'
import im10 from '../assets/images/wp-content/uploads/2023/08/imagesservice/itsolutioning.jpg'
import im11 from '../assets/images/wp-content/uploads/2023/08/imagesservice/1) websites.jpg'
import im12 from '../assets/images/wp-content/uploads/2023/08/imagesservice/2) application new.jpg'
import im13 from '../assets/images/wp-content/uploads/2023/08/imagesservice/3 )digital marketing.jpg'
import projmgmt from '../assets/images/wp-content/uploads/2023/08/imagesservice/management.jpg'
import resaug from '../assets/images/wp-content/uploads/2023/08/imagesservice/augmentation.jpg'
import shape38 from '../assets/images/wp-content/themes/printpark/assets/images/shape/shape-38.png'
import frame from '../assets/images/wp-content/themes/printpark/assets/images/shape/Frame.png'
import shape20 from '../assets/images/wp-content/themes/printpark/assets/images/shape/shape-20.png'
import downloadFile from "../assets/documents/business_profile.pdf"
import { Container, Row, Col, Button, Image, Modal, Form } from 'react-bootstrap';
import ContentThree from '../components/ContentThree';
import Contentfour from '../components/Contentfour';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from 'react'
const Oursolutions2 = (props) => {
    const data = [
        { id: 1, inmg: im11, title: 'Web Development', info: "Website and web application development, upkeep, and enhancement are all included in web development services. This includes developing the front-end and back-end components, creating the user interface and graphic components, and publishing the website to the internet. In order to guarantee that websites run successfully, these services also include hosting, security, and performance optimization. We create simple websites as well as intricate e-commerce platforms and web-based applications in collaboration with clients to satisfy their demands." },
        { id: 2, inmg: im12, title: 'Mobile Application', info: "The process of developing software applications for mobile devices, such as smartphones and tablets, is known as mobile application development. It includes testing, deployment, coding, and user interface design. Programming languages like Java, Swift, or Kotlin are used by developers, based on the platform they are targeting (iOS or Android). Testing and quality control are crucial to ensuring the software runs smoothly. To safeguard user data and privacy, security methods including data encryption and authentication are essential. Apps are usually released through app stores like Google Play or Apple's App Store after they have been developed" },
        { id: 3, inmg: im13, title: 'Digital Marketing', info: "Social media marketing uses platforms like Facebook, Instagram, and Twitter to buildbrand awareness and interact with customers. Email marketing involves sending targeted messages to subscribers to nurture leads and drive conversions. Pay-per-click (PPC)       advertising allows businesses to pay for their ads to appear at the top of search engine results or on social media.Digital marketing services provide businesses with the tools to reach a broaderaudience, build brand recognition, and measure the effectiveness of their onlinemarketing efforts" },
        { id: 4, inmg: im7, title: 'IT Consulting', info: "Information technology consulting, or IT consulting for short, is the practice of offering businesses and individuals professional consulting and direction on a range of topics related to technology and information systems. IT consultants provide their knowledge in fields such as software development, cybersecurity, infrastructure planning, technology strategy, and IT project management.Assessing an organization's current IT infrastructure, identifying areas for improvement, suggesting solutions, and assisting with their implementation are important components of IT consulting." },
        { id: 5, inmg: im10, title: 'IT Solutions', info: "IT solutions include the thoughtful planning, development, and use of technological solutions to match the unique requirements of an enterprise. It includes system integration to optimize operations, cybersecurity measures to safeguard digital assets, cloud services for scalable and affordable solutions, custom software development for customized applications, system integration to evaluate current infrastructure and plan future strategies, and continuous support for seamless IT management." },
        { id: 6, inmg: projmgmt, title: 'Project Management', info: "Project management is the discipline of planning, executing, and controlling projects efficiently. It often involves agile methodologies for adaptability, quality assurance to ensure deliverables meet predefined standards, and risk management to identify and mitigate potential project challenges, all aimed at ensuring project succes" },
        { id: 7, inmg: im8, title: 'Data Analytics', info: "Data analytics is the process of analyzing and investigating data to draw insightful conclusions. This comprises data warehousing for effective data storage, data governance to uphold data quality and compliance, predictive analytics to anticipate future outcomes, big data solutions to handle massive and complex datasets, and data analytics for identifying patterns and trends." },
        { id: 8, inmg: resaug, title: 'Resource Augmentation', info: "Prioritizing the needs and satisfaction of our customers, with prompt attention to their needs, providing practical and helpful responses, and going the extra mile to exceed their expectations." },
        { id: 9, inmg: im3, title: 'Blockchain', info: "Blockchain technology enables safe and transparent transactions by acting as a decentralized, unchangeable ledger. Services in this area include the creation and management of unique tokens and cryptocurrencies, the development of blockchain-based applications for a range of uses, and professional advice on implementing blockchain to improve trust and transparency in sectors such as finance, supply chains, and healthcare" },
        { id: 10, inmg: im2, title: 'Artificial Intelligence (AI)', info: "The creation of AI-powered applications with task automation and prediction capabilities is included in AI services. This includes computer vision for image analysis, natural language processing (NLP) for language understanding and processing, machine learning to train models for particular tasks, and AI consultancy to assist businesses in utilizing AI for productivity and data-driven decision-making." },
        { id: 11, inmg: im5, title: 'Outsourcing Engagement', info: "There are several ways that organizations can get specialized IT resources through outsourcing engagement. While offshore development uses expertise from abroad to create software, IT outsourcing entails assigning certain IT services to outside vendors. End-to-end IT infrastructure management is offered via managed services, while staff augmentation ensures flexible and affordable solutions by providing competent temporary workers in response to project requirements" },
        { id: 12, inmg: im4, title: 'IoT (Internet of Things)', ingo: ">IoT denotes the internet-based networking of physical objects and sensors that allows data to be collected and shared for a range of uses. This includes creating Internet of Things (IoT) solutions that link and interact with smart devices, fusing hardware and sensors, deriving insights from IoT-generated data analysis, putting security measures in place to safeguard IoT ecosystems, and providing advice on how to define IoT strategies and use IoT technology across sectors for improved productivity and data-driven decision-making." },
    ];
    const [activeTab, setActiveTab] = useState('Web Development');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const [show, setShow] = useState(false);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [service, setService] = useState("")
    const [other, setOther] = useState("")
    const [address, setAddress] = useState("")
    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const captchaRef = useRef(null);
    const [isCaptchaVerified, setCaptchaVerified] = useState(false);
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
        } else if (!/^[6-9]{1}[0-9]{9}$/.test(phone)) {
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
                alert("form submitted successfully")
            }).catch((err) => {
                console.log("err", err);
            })
        }
    }

    return (
        <div className='ourSolutions'>
            <section class="page-title centred">
                <div class="bg-layer"
                    style={{ backgroundImage: `url(${frame})`, backgroundSize: 'cover' }}>
                </div>
                <div class="pattern-layer"
                    style={{ backgroundImage: `url(${shape20})` }}></div>
                <div class="auto-container">
                    <div class="content-box">
                        <h1>Our Solutions</h1>
                        <ul class="bread-crumb clearfix">
                            <li class="breadcrumb-item"><Link to={"/"} style={{ textDecoration: 'none' }}>Home &nbsp;</Link></li>
                            <li class="breadcrumb-item">Our Solutions</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="service-details">
                <Container>
                    <Row>
                        <Col lg={4} md={12} sm={12}>
                            <div className="service-sidebar">
                                {/* Services Offered Widget */}
                                <div id="nav_menu-7" className="widget widget_nav_menu">
                                    <div className="widget-title">
                                        <h3>Services Offered</h3>
                                    </div>
                                    <div className="menu-service-menu-container">
                                        <ul id="menu-service-menu" className="menu">

                                            {data.map((service) => (
                                                <div
                                                    key={service.title}
                                                    className={`service-item d-flex`}
                                                >
                                                    <li className={`menu-item menu-item-type-post_type menu-item-object-service`}>
                                                        <Link to={`/solutions/${encodeURIComponent(service.title)}`} style={{ textDecoration: 'none' }}>{service.title}</Link>

                                                    </li>

                                                    <i className="bi bi-plus-circle ms-auto"></i>
                                                </div>
                                            ))}

                                        </ul>
                                    </div>
                                </div>

                                {/* Download Widget */}
                                <div id="printpark_download_box_widget-1" className="widget widget_printpark_download_box_widget">
                                    <div className="download-widget">
                                        <figure className="image-box">
                                            <img src={im} alt="" />
                                        </figure>
                                        <div className="content-box">
                                            <div className="text">
                                                <h4>Download </h4>
                                            </div>
                                            <div className="download-btn">
                                                <Button type="button">
                                                    <a href={downloadFile} target='_blank' download>
                                                        <i className="flaticon-file"></i>
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Banner Widget */}
                                <div id="printpark_banner-1" className="widget widget_printpark_banner">
                                    <div className="banner-widget">
                                        <div className="inner-box">
                                            <h3>Make your Website stand out from Competitors!</h3>
                                            <div className="image-box">
                                                {/* <div className="shape" style={{ backgroundImage: `url(${shape37})` }}></div> */}
                                                <figure className="image">
                                                    <img src={im1} alt="" />
                                                </figure>
                                            </div>
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
                                                                type="tel"
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
                                                            <Form.Control
                                                                as="select"
                                                                value={service}
                                                                onChange={(e) => setService(e.target.value)}
                                                                onBlur={() => {
                                                                    if (service.trim() && errors.service) {
                                                                        setErrors({ ...errors, service: '' });
                                                                    }
                                                                }}
                                                            >
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
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Other Service"
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

                                                        <Form.Group>
                                                            <Form.Label>Address:</Form.Label>
                                                            <Form.Control
                                                                as="textarea"
                                                                rows={4}
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
                                                            <Form.Label>Any Comment:</Form.Label>
                                                            <Form.Control
                                                                as="textarea"
                                                                rows={4}
                                                                placeholder="Comment"
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

                                                        <div lg={11} className='mt-3'>
                                                            <ReCAPTCHA
                                                                ref={captchaRef}
                                                                sitekey="6LencrQpAAAAAGj4_y7jELPNFBdDNe9RtQFndoEF"
                                                                // sitekey={window.location.hostname === "localhost" ? "6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz" : "6LencrQpAAAAAGj4_y7jELPNFBdDNe9RtQFndoEF"}
                                                                onChange={onChange}
                                                            />
                                                        </div>

                                                        {errors.captcha && <span className="error text-danger">{errors.captcha}</span>}
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                        <Button variant="success" type="submit">
                                                            Submit
                                                        </Button>
                                                    </Modal.Footer>
                                                </Form>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={12} sm={12} className="content-side content-side">
                            <div className="service-details-content pl-0">
                                {/* Content One */}
                                <div className="content-one">
                                    <div className="tab-content">



                                        <Col className="image-box">
                                            <Image
                                                fetchpriority="high"
                                                width={770}
                                                height={490}
                                                src={props.inmg}
                                                className="attachment-printpark_1170x490 size-printpark_1170x490 wp-post-image"
                                                alt=""
                                                decoding="async"
                                            />
                                        </Col>
                                        <Col className="text-box">
                                            <h2>{props.titles}</h2>
                                            <p>
                                                {props.info}
                                            </p>
                                        </Col>



                                    </div>

                                </div>

                                {/* Content Two */}
                                <div className="content-two">
                                    <Row className="clearfix">
                                        {[
                                            {
                                                title: 'Customer Focus',
                                                content:
                                                    'Prioritizing the needs and satisfaction of our customers, with prompt attention to their needs, providing practical and helpful responses, and going the extra mile to exceed their expectations.',
                                                icon: 'flaticon-double-check',
                                            },
                                            {
                                                title: 'Excellence',
                                                content:
                                                    'Striving for excellence, consistently delivering high-quality services, continuously improving processes, and seeking innovative solutions to enhance customer experiences.',
                                                icon: 'flaticon-double-check',
                                            },
                                            {
                                                title: 'Integrity',
                                                content:
                                                    'Ethical integrity and upholding high standards of work ethics that are essential for building trust and competence with customers.',
                                                icon: 'flaticon-double-check',
                                            },
                                            {
                                                title: 'Customer Advocacy',
                                                content:
                                                    "Emphasis on the company's dedication to proactively representing and promoting the best interests of our clients/customers.",
                                                icon: 'flaticon-double-check',
                                            },
                                        ].map((item, index) => (
                                            <Col key={index} lg={6} md={6} sm={12} className="single-column">
                                                <div className="single-item">
                                                    <div className="icon-box">
                                                        <div
                                                            className="shape"
                                                            style={{
                                                                backgroundImage: `url(${shape38})`
                                                            }}
                                                        ></div>
                                                        <div className="icon">
                                                            <i className={item.icon}></i>
                                                        </div>
                                                        <div className="overlay-icon">
                                                            <i className="flaticon-double-check-1"></i>
                                                        </div>
                                                    </div>
                                                    <div className="inner-box">
                                                        <h3>{item.title}</h3>
                                                        <p>{item.content}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>

                                {/* Content Three */}
                                <ContentThree />
                                {/* Content Four */}
                                <Contentfour />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};




export default Oursolutions2