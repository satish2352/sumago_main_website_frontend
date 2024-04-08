import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Header.css'
import '../assets/images/wp-content/plugins/elementor/assets/css/frontend-lite.min.css'
import '../assets/images/wp-content/themes/printpark/assets/css/style.css'
import '../assets/images/wp-content/themes/printpark/assets/css/bootstrap.css'
import '../assets/images/wp-content/themes/printpark/assets/css/flaticon.css'
import '../assets/images/wp-content/themes/printpark/assets/css/animate.css'
import '../assets/images/wp-content/themes/printpark/assets/css/color.css'
import '../assets/images/wp-content/themes/printpark/assets/css/custom.css'
import '../assets/images/wp-content/themes/printpark/assets/css/font-awesome-all.css'
import '../assets/images/wp-content/themes/printpark/assets/css/gutenberg.css'
import '../assets/images/wp-content/themes/printpark/assets/css/jquery.fancybox.min.css'
import '../assets/images/wp-content/themes/printpark/assets/css/nice-select.css'
import '../assets/images/wp-content/themes/printpark/assets/css/responsive.css'
import '../assets/images/wp-content/themes/printpark/assets/css/tut.css'
import '../assets/images/wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=8.3.1'
import '../assets/images/wp-content/plugins/printpark-plugin/redux-framework/redux-core/assets/css/extendify-utilities.css'
import '../assets/images/wp-content/plugins/woocommerce/assets/css/woocommerce.css'
import shape2 from '../assets/images/wp-content/themes/printpark/assets/images/shape/shape-2.png'
import sumago from '../assets/images/wp-content/uploads/2023/08/sumago.png'
import email from '../assets/images/wp-content/themes/printpark/assets/images/shape/email.png'
import sumagologo from '../assets/images/wp-content/uploads/2023/08/SUMAGO Logo.png'
import logo13 from '../assets/images/wp-content/uploads/2023/08/Logo1 3.png'
import sumagowhite from '../assets/images/wp-content/uploads/2023/08/SUMAGO White.png'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from 'react'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const captchaRef = useRef(null);
    const [isCaptchaVerified, setCaptchaVerified] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
                alert("form submitted successfully")
            }).catch((err) => {
                console.log("err", err);
            })
        }
    }

    return (
        <>
            <header className={`d-none d-lg-block main-header header-style-one ${scrolled ? 'scrolled' : ''}`}>

                <div class="xs-sidebar-group info-group info-sidebar">
                    <div class="xs-overlay xs-bg-black"></div>
                    <div class="xs-overlay xs-overlay-2 xs-bg-black"></div>
                    <div class="xs-overlay xs-overlay-3 xs-bg-black"></div>
                    <div class="xs-overlay xs-overlay-4 xs-bg-black"></div>
                    <div class="xs-overlay xs-overlay-5 xs-bg-black"></div>
                    <div class="xs-sidebar-widget">
                        <div class="sidebar-widget-container">
                            <div class="widget-heading">
                                <Link to={"/"} class="close-side-widget"><i class="fa fa-times"></i></Link>
                            </div>
                            <div class="sidebar-textwidget">
                                <div class="sidebar-info-contents">
                                    <div class="content-inner">
                                        <div class="logo1">
                                            <Link to="/" title="WordPress Printing"><img
                                                src={sumagologo} alt="logo" /></Link>
                                        </div>
                                        <div class="content-box">
                                            <h4>About Us</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                                veritatis et quasi</p>
                                            <p>Research oriented solutions for Data Science and Machine Learning business needs.
                                            </p> <a href="https://wp1.themevibrant.com/newwp/printpark/about-us-01/"
                                                class="theme-btn btn-one">About Us</a>
                                        </div>
                                        <div class="contact-info">
                                            <h4>Contact Info</h4>
                                            <ul>
                                                <li>Chicago 12, Melborne City, USA</li>
                                                <li><a href="tel:+91 7263084881">+91 7263084881</a></li>
                                                <li><a href="mailto:info@sumagoinfotech.com">info@example.cominfo@sumagoinfotech.com</a></li>
                                            </ul>
                                        </div>
                                        <ul class="social-box clearfix">

                                            <li>
                                                <a href="https://www.facebook.com/sumagoinfotech/"><i class="fab  fa-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://in.linkedin.com/company/sumago-infotech-pvt-ltd"><i class="fab  fa-linkedin"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/sumago_infotech"><i class="fab  fa-instagram"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/channel/UCoUCNHO1wXI92HnEmNtIkEg?view_as=subscriber"><i class="fab  fa-youtube"></i></a>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <header class="main-header header-style-one">
                    <div className="header-top">
                        <div className="outer-container d-sm-grid d-lg-flex d-md-flex">
                            <div className="text text-center col-sm-12 col-md-4 col-lg-3">
                                <div className='mt-1'>
                                    <i className="flaticon-incoming-call"></i> &nbsp;
                                    <span> Call Us</span> <strong>Now:</strong>
                                </div>
                                <ul className='list-unstyled d-flex justify-content-evenly mb-2'
                                >
                                    <li>
                                        <a href="tel:+91 902 828 8668"><strong>+91 902 828 8668,</strong></a>
                                    </li>
                                    <li>
                                        <a href="tel:+91 840 808 4888"><strong>+91 840 808 4888</strong></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-5 col-lg-5 d-grid justify-content-center ">
                                <figure className="logo" ><Link to="/" title="WordPress Printing"><img id="sumalogo" src={sumagologo} alt="logo" /></Link></figure>
                            </div>
                            <div className="text2 col-sm-12 col-md-3 col-lg-3">
                                <div className='right-box'>
                                    <Row style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '5px' }}>
                                        <Col lg={2} md={2} sm={2}>
                                        <i class="fas fa-envelope email-icon"></i>
                                        </Col>
                                        <Col lg={10} md={10} sm={10}>
                                            <a href="mailto:info@sumagoinfotech.com" style={{ color: 'black' }}>info@sumagoinfotech.com</a>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingLeft: '40px', paddingRight: '40px', paddingBottom: '5px' }}>
                                        <Col lg={2} md={2} sm={2}>
                                            <i className="flaticon-incoming-call" style={{ color: "black" }}></i>
                                        </Col>
                                        <Col lg={10} md={10} sm={10}>
                                            <a href="tel:+91 9890058156"><strong>+91 9890058156</strong></a>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-lower">
                        <div className="outer-container">
                            <div className="outer-box outer-box1">
                                <div className="left-column">
                                    <div className="logo-box">
                                        <div className="shape"
                                            style={{ backgroundImage: `url(${shape2})` }}>
                                        </div>
                                        <figure className="logo">
                                            <Link to="/" title="WordPress Printing">
                                                <img id="shapeimg" src={logo13} alt="" /></Link>
                                        </figure>

                                    </div>

                                    <div className="menu-area clearfix" style={{ marginLeft: "0px" }}>
                                        <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                            <i className="icon-bar"></i>
                                            <i className="icon-bar"></i>
                                            <i className="icon-bar"></i>
                                        </div>
                                        <nav className="main-menu navbar-expand-md navbar-light">
                                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                                <ul className="navigation clearfix navbar-nav1">
                                                    <li id="menu-item-54"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-54  menu-item <?php echo ($currentPage == 'index.php') ? 'active' : ''; ?>">
                                                        <Link title="Home" to="/"
                                                            data-toggle="dropdown1" className="hvr-underline-from-left1"
                                                            aria-expanded="false" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none' }} onclick={scrollToTop}>Home</Link>
                                                    </li>
                                                    <li id="menu-item-54"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-54">
                                                        <Link title="Our Solutions" to={`/solutions/${encodeURIComponent("Web Development")}`}
                                                            data-toggle="dropdown1" className="hvr-underline-from-left1"
                                                            aria-expanded="false" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none' }} onclick={scrollToTop}>Our Solutions</Link>
                                                    </li>
                                                    <li id="menu-item-82"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-82">
                                                        <Link title="Career" to="/career" data-toggle="dropdown1"
                                                            className="hvr-underline-from-left1" aria-expanded="false" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none' }} onclick={scrollToTop}>Career</Link>
                                                    </li>
                                                    <li id="menu-item-81"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-81">
                                                        <Link title="About" to="/about" data-toggle="dropdown1"
                                                            className="hvr-underline-from-left1" aria-expanded="false" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none' }} onclick={scrollToTop}>About us</Link>
                                                    </li>
                                                    <li id="menu-item-60"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60">
                                                        <Link title="Contact" to="/contact"
                                                            className="hvr-underline-from-left1" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none' }} onclick={scrollToTop}>Contact us</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div className="menu-right-content">
                                    <div className="btn-box">
                                        <Link to={"/contact"}
                                            className="theme-btn btn-one" style={{ textDecoration: 'none' }} onClick={handleShow}>Get a Quote</Link>
                                    </div>
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
                                                        sitekey="6Ld3e7QpAAAAAH7rseHrdwzF0VPZWtJ2ESOVrR_V"
                                                        // sitekey={window.location.hostname == "localhost" ? "6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz" : "6Ld3e7QpAAAAAH7rseHrdwzF0VPZWtJ2ESOVrR_V"}
                                                        onChange={onChange}
                                                    />
                                                </div>
                                                {errors.captcha && <span className="error text-danger">{errors.captcha}</span>}

                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" className='mx-1' type="button" onClick={handleClose}>Close</Button>
                                                <Button variant="success" className='mx-1' type="submit">Submit</Button>
                                            </Modal.Footer>
                                        </Form>
                                    </Modal>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="sticky-header">
                        <div class="outer-container">
                            <div class="outer-box">
                                <div class="left-column">
                                    <div class="logo-box">
                                        <figure class="logo" onClick={scrollToTop}><Link to="/" title="WordPress Printing">
                                            <img style={{ height: "40px", width: "300px" }} src={sumago} alt="logo" /></Link></figure>
                                    </div>
                                    <div class="menu-area clearfix">
                                        <nav class="main-menu clearfix">
                                            {/*Keep This Empty / Menu will come through Javascript*/}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="mobile-menu">
                    <div class="menu-backdrop"></div>
                    <div class="close-btn"><i class="fas fa-times"></i></div>

                    <nav class="menu-box">
                        <div class="nav-logo">
                            <Link to="/" title="WordPress Printing"><img src={sumagowhite}
                                alt="logo" /></Link>
                        </div>
                        <div class="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                        </div>
                        {/* <div class="contact-info">
                            <h4>Contact Info</h4>
                            <ul>
                                <li>Third Floor, Gajra Chambers, Mumbai - Agra National Hwy, Kamod Nagar, Nashik, Maharashtra 422009</li>
                                <li><a href="tel:+91 8530388815">+91 8530388815</a></li>
                                <li><a href="mailto:info@sumagoinfotech.com">info@sumagoinfotech.com</a></li>
                            </ul>
                        </div> */}
                        {/* <div class="social-links">
                            <ul class="clearfix">

                                <li>
                                    <a target="_blank" href="https://www.facebook.com/sumagoinfotech/"><i class="fab  fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://in.linkedin.com/company/sumago-infotech-pvt-ltd"><i class="fab  fa-linkedin"></i></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.instagram.com/sumago_infotech"><i class="fab  fa-instagram"></i></a>
                                </li>

                                <li>
                                    <a target="_blank" href="https://www.youtube.com/channel/UCoUCNHO1wXI92HnEmNtIkEg?view_as=subscriber"><i class="fab  fa-youtube"></i></a>
                                </li>


                            </ul>
                        </div> */}
                    </nav>
                </div>
            </header>
            {scrolled && (
                <header className={`header-style-two ${scrolled ? 'sticky' : ''}`}>
                    <div className="header-lower">
                        <div className="outer-container2">
                            <div className="outer-box outer-box1 d-flex justify-content-evenly ">

                                <Link to="/" title="WordPress Printing" className='d-flex align-items-center'>
                                    <img src={sumagologo} alt="" style={{ width: '400px', height: 'auto' }} onClick={scrollToTop} /></Link>

                                <div className="left-column">


                                    <div className="menu-area clearfix text-dark" style={{ marginLeft: "0px" }}>

                                        <nav className="main-menu navbar-expand-md navbar-light">
                                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                                <ul className="navigation clearfix navbar-nav1">
                                                    <li id="menu-item-54"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-54  menu-item <?php echo ($currentPage == 'index.php') ? 'active' : ''; ?>">
                                                        <Link title="Home" to="/"
                                                            data-toggle="dropdown1" className="hvr-underline-from-left1"
                                                            aria-expanded="false" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none', color: "black" }} onClick={scrollToTop}>Home</Link>

                                                    </li>
                                                    <li id="menu-item-54"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-54">
                                                        <Link title="Our Solutions" to={`/solutions/${encodeURIComponent("Web Development")}`}
                                                            data-toggle="dropdown1" className="hvr-underline-from-left1"
                                                            aria-expanded="false" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none', color: "black" }} onClick={scrollToTop}>Our Solutions</Link>

                                                    </li>



                                                    <li id="menu-item-82"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-82">
                                                        <Link title="Career" to="/career" data-toggle="dropdown1"
                                                            className="hvr-underline-from-left1" aria-expanded="false" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none', color: "black" }} onClick={scrollToTop}>Career</Link>

                                                    </li>
                                                    <li id="menu-item-81"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-81">
                                                        <Link title="About" to="/about" data-toggle="dropdown1"
                                                            className="hvr-underline-from-left1" aria-expanded="false" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none', color: "black" }} onClick={scrollToTop}>About us</Link>

                                                    </li>

                                                    <li id="menu-item-60"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60">
                                                        <Link title="Contact" to="/contact"
                                                            className="hvr-underline-from-left1" data-scroll
                                                            data-options="easing: easeOutQuart" style={{ textDecoration: 'none', color: "black" }} onClick={scrollToTop}>Contact us</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </header>
            )}
        </>
    )
}

export default Header