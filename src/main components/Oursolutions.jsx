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

import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import ContentThree from '../components/ContentThree';
import Contentfour from '../components/Contentfour';
import { Link } from 'react-router-dom';

const Oursolutions = () => {
    const services = [
        { title: 'Web Development' },
        { title: 'Mobile Application' },
        { title: 'Digital Marketing' },
        { title: 'IT Consulting' },
        { title: 'IT Solutions' },
        { title: 'Project Management' },
        { title: 'Data Analytics' },
        { title: 'Resource Augmentation' },
        { title: 'Blockchain' },
        { title: 'Artificial Intelligence (AI)' },
        { title: 'Outsourcing Engagement' },
        { title: 'IoT (Internet of Things)' },
    ];
    const data = [
        { inmg: im11, title: 'Web Development', info: "Website and web application development, upkeep, and enhancement are all included in web development services. This includes developing the front-end and back-end components, creating the user interface and graphic components, and publishing the website to the internet. In order to guarantee that websites run successfully, these services also include hosting, security, and performance optimization. We create simple websites as well as intricate e-commerce platforms and web-based applications in collaboration with clients to satisfy their demands." },
        { inmg: im12, title: 'Mobile Application', info: "The process of developing software applications for mobile devices, such as smartphones and tablets, is known as mobile application development. It includes testing, deployment, coding, and user interface design. Programming languages like Java, Swift, or Kotlin are used by developers, based on the platform they are targeting (iOS or Android). Testing and quality control are crucial to ensuring the software runs smoothly. To safeguard user data and privacy, security methods including data encryption and authentication are essential. Apps are usually released through app stores like Google Play or Apple's App Store after they have been developed" },
        { inmg: im13, title: 'Digital Marketing', info: "Social media marketing uses platforms like Facebook, Instagram, and Twitter to buildbrand awareness and interact with customers. Email marketing involves sending targeted messages to subscribers to nurture leads and drive conversions. Pay-per-click (PPC)       advertising allows businesses to pay for their ads to appear at the top of search engine results or on social media.Digital marketing services provide businesses with the tools to reach a broaderaudience, build brand recognition, and measure the effectiveness of their onlinemarketing efforts" },
        { inmg: im7, title: 'IT Consulting', info: "Information technology consulting, or IT consulting for short, is the practice of offering businesses and individuals professional consulting and direction on a range of topics related to technology and information systems. IT consultants provide their knowledge in fields such as software development, cybersecurity, infrastructure planning, technology strategy, and IT project management.Assessing an organization's current IT infrastructure, identifying areas for improvement, suggesting solutions, and assisting with their implementation are important components of IT consulting." },
        { inmg: im10, title: 'IT Solutions', info: "IT solutions include the thoughtful planning, development, and use of technological solutions to match the unique requirements of an enterprise. It includes system integration to optimize operations, cybersecurity measures to safeguard digital assets, cloud services for scalable and affordable solutions, custom software development for customized applications, system integration to evaluate current infrastructure and plan future strategies, and continuous support for seamless IT management." },
        { inmg: projmgmt, title: 'Project Management', info: "Project management is the discipline of planning, executing, and controlling projects efficiently. It often involves agile methodologies for adaptability, quality assurance to ensure deliverables meet predefined standards, and risk management to identify and mitigate potential project challenges, all aimed at ensuring project succes" },
        { inmg: im8, title: 'Data Analytics', info: "Data analytics is the process of analyzing and investigating data to draw insightful conclusions. This comprises data warehousing for effective data storage, data governance to uphold data quality and compliance, predictive analytics to anticipate future outcomes, big data solutions to handle massive and complex datasets, and data analytics for identifying patterns and trends." },
        { inmg: resaug, title: 'Resource Augmentation', info: "Prioritizing the needs and satisfaction of our customers, with prompt attention to their needs, providing practical and helpful responses, and going the extra mile to exceed their expectations." },
        { inmg: im3, title: 'Blockchain', info: "Blockchain technology enables safe and transparent transactions by acting as a decentralized, unchangeable ledger. Services in this area include the creation and management of unique tokens and cryptocurrencies, the development of blockchain-based applications for a range of uses, and professional advice on implementing blockchain to improve trust and transparency in sectors such as finance, supply chains, and healthcare" },
        { inmg: im2, title: 'Artificial Intelligence (AI)', info: "The creation of AI-powered applications with task automation and prediction capabilities is included in AI services. This includes computer vision for image analysis, natural language processing (NLP) for language understanding and processing, machine learning to train models for particular tasks, and AI consultancy to assist businesses in utilizing AI for productivity and data-driven decision-making." },
        { inmg: im5, title: 'Outsourcing Engagement', info: "There are several ways that organizations can get specialized IT resources through outsourcing engagement. While offshore development uses expertise from abroad to create software, IT outsourcing entails assigning certain IT services to outside vendors. End-to-end IT infrastructure management is offered via managed services, while staff augmentation ensures flexible and affordable solutions by providing competent temporary workers in response to project requirements" },
        { inmg: im4, title: 'IoT (Internet of Things)', ingo: ">IoT denotes the internet-based networking of physical objects and sensors that allows data to be collected and shared for a range of uses. This includes creating Internet of Things (IoT) solutions that link and interact with smart devices, fusing hardware and sensors, deriving insights from IoT-generated data analysis, putting security measures in place to safeguard IoT ecosystems, and providing advice on how to define IoT strategies and use IoT technology across sectors for improved productivity and data-driven decision-making." },
    ];
    const [activeTab, setActiveTab] = useState('Web Development');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div>
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
                            <li class="breadcrumb-item"><Link to={"/"} style={{textDecoration: 'none'}}>Home &nbsp;</Link></li>
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
                                            <div className="tab-buttons">
                                                {services.map((service) => (
                                                    <div
                                                        key={service.title}
                                                        className={`service-item d-flex ${activeTab === service.title ? 'selected' : ''}`}
                                                        onClick={() => handleTabClick(service.title)}
                                                    >
                                                        <li className={`menu-item menu-item-type-post_type menu-item-object-service`}>
                                                            {service.title}
                                                        </li>
                                                        <i className="bi bi-plus-circle ms-auto"></i>
                                                    </div>
                                                ))}
                                            </div>
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
                                                    <a href="./wp-content/uploads/2023/08/Final Business Profile.pdf" download>
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
                                            <button type="button" className="theme-btn btn-two" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                GET A QUOTE
                                            </button>
                                            {/* Modal */}
                                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">GET A QUOTE</h4>
                                                            <button type="button" className="close" data-bs-dismiss="modal">X</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <form method="post" name="myForm">
                                                                <div style={{ textAlign: "left" }} className="form-group">
                                                                    <label>Name :</label>
                                                                    <input className="form-control" type="text" name="fname" onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '').replace(/(\..*)\./g, '$1')} placeholder="Name" required="" />
                                                                </div>
                                                                <div style={{ textAlign: "left" }} className="form-group">
                                                                    <label>Contact :</label>
                                                                    <input className="form-control" type="tel" name="contact" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')} maxLength="10" minLength="10" pattern="[7-9]{1}[0-9]{9}" placeholder="Mobile no" required="" />
                                                                </div>
                                                                <div style={{ textAlign: "left" }} className="form-group">
                                                                    <label>Email :</label>
                                                                    <input className="form-control" type="email" name="email" pattern="^(([-\w\d]+)(\.[-\w\d]+)@([-\w\d]+)(\.[-\w\d]+)(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$" placeholder="Email" required="" />
                                                                </div>
                                                                <div style={{ textAlign: "left" }} className="form-group">
                                                                    <label>Type of Services :</label>
                                                                    <select name="service" className="form-control" required="">
                                                                        <option value="">Select Service</option>
                                                                        <option value="Website Development">Website Development</option>
                                                                        <option value="App Development">App Development</option>
                                                                        <option value="Software Development">Software Development</option>
                                                                        <option value="Digital Marketing">Digital Marketing</option>
                                                                        <option value="Social Media">Social Media</option>
                                                                        <option value="SEO">SEO</option>
                                                                        <option value="Training/Internship">Training/Internship</option>
                                                                        <option value="Start up Consultancy">Start up Consultancy</option>
                                                                        <option value="#">Web Hosting</option>
                                                                    </select>
                                                                </div>
                                                                <div style={{ textAlign: "left" }} className="form-group">
                                                                    <label>Other :</label>
                                                                    <input className="form-control" type="text" name="other" onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '').replace(/(\..*)\./g, '$1')} placeholder="Other Service" />
                                                                </div>
                                                                <div style={{ textAlign: "left" }} className="form-group">
                                                                    <label>Address / City :</label>
                                                                    <textarea className="form-control" rows="4" cols="10" name="address" placeholder="Address / City"></textarea>
                                                                </div>
                                                                <div style={{ textAlign: "left" }} className="form-group">
                                                                    <label>Any Comment :</label>
                                                                    <textarea className="form-control" rows="4" cols="10" name="comment" placeholder="Comment"></textarea>
                                                                </div>
                                                                <div style={{ textAlign: "left" }} className="form-group mt-4">
                                                                    <center>
                                                                        <input className="btn btn-success btn-lg" type="submit" id="quoteReq" name="submit" value="Submit" />
                                                                        <input className="btn btn-danger btn-lg" type="reset" name="btn_reset" value="Clear" />
                                                                    </center>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                        {
                                            data.map((a) => {
                                                return (<>
                                                    {activeTab === a.title && <div>


                                                        <Col className="image-box">
                                                            <Image
                                                                fetchpriority="high"
                                                                width={770}
                                                                height={490}
                                                                src={a.inmg}
                                                                className="attachment-printpark_1170x490 size-printpark_1170x490 wp-post-image"
                                                                alt=""
                                                                decoding="async"
                                                            />
                                                        </Col>
                                                        <Col className="text-box">
                                                            <h2>{a.title}</h2>
                                                            <p>
                                                                {a.info}
                                                            </p>
                                                        </Col>
                                                        <br>
                                                        </br>
                                                        <p></p></div>}
                                                </>

                                                )
                                            })
                                        }


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




export default Oursolutions