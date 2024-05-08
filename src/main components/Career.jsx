import React, { useState, useEffect, useRef } from 'react';
import Testimonials from '../components/Testimonials'
import { Link } from 'react-router-dom';
import img1 from '../assets/images/wp-content/themes/printpark/assets/images/shape/Frame.png';
import img22 from '../assets/images/wp-content/themes/printpark/assets/images/shape/shape-20.png';
import '../assets/css/career1.css';
import img from '../assets/images/wp-content/uploads/2023/08/TRAINING/2 h.png';
import img3 from '../assets/images/wp-content/uploads/2023/08/IMPLANT/1 v.png';
import img4 from '../assets/images/wp-content/uploads/2023/08/TRAINING/1v.png';
import img5 from '../assets/images/wp-content/uploads/2023/08/IMPLANT/3 H.png';
import img6 from '../assets/images/wp-content/uploads/2023/08/TRAINING/2 v.png';
import img8 from '../assets/images/wp-content/uploads/2023/08/IMPLANT/1 H.png'
import img7 from '../assets/images/wp-content/themes/printpark/assets/images/shape/shape-8.png';
import experience1 from '../assets/images/wp-content/uploads/2023/08/ICONS CAREERE PAGE/experience-1.png'
import location1 from '../assets/images/wp-content/uploads/2023/08/ICONS CAREERE PAGE/Location-1.png'
import BEimg from '../assets/images/wp-content/uploads/2023/08/ICONS CAREERE PAGE/3401411-200 r 3.png'
import experience from '../assets/images/wp-content/uploads/2023/08/ICONS CAREERE PAGE/experience.png'
import location from '../assets/images/wp-content/uploads/2023/08/ICONS CAREERE PAGE/Location.png'
import BEimg2 from '../assets/images/wp-content/uploads/2023/08/ICONS CAREERE PAGE/3401411-200 r 2.png'
import r1 from '../assets/images/wp-content/uploads/2023/08/ICONS CAREERE PAGE/download R 1.png'
import BEimg3 from '../assets/images/wp-content/uploads/2023/08/ICONS CAREERE PAGE/3401411-200 r 3.png'
import '../assets/images/wp-content/themes/printpark/assets/css/style.css'
import axios from 'axios';
import GoUp from '../components/GoUp';
import { Button, Form, Modal } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";

const Career = () => {
  const [imgData, setImgData] = useState([])
  const [internData, setInternData] = useState([])
  const [jobData, setJobData] = useState([])
  const [show, setShow] = useState(false);
  const [applicationType, setApplicationType] = useState("");
  const captchaRef = useRef(null);
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (application) => {
    setShow(true);
    setApplicationType(application)
  }
  const onChange = (value) => {
    // This function will be called when the ReCAPTCHA is completed.
    setCaptchaVerified(true);
    console.log(value);
  }
  console.log("applicationType", applicationType);
  useEffect(() => {
    axios.get("life_category/find").then((result) => {
      console.log("result", result);
      setImgData(result.data)
    }).catch((err) => {
      console.log("err", err);
    });
  }, [])

  useEffect(() => {
    axios.get("/jobs/find").then((result) => {
      console.log("result jobs", result);
      setJobData(result.data)
    }).catch((err) => {
      console.log("err", err);
    });
  }, [])

  useEffect(() => {
    axios.get("/internship/find").then((result) => {
      console.log("result", result);
      setInternData(result.data)
    }).catch((err) => {
      console.log("err", err);
    });
  }, [])

  const [activeTab, setActiveTab] = useState('all'); // Initial active tab state
  const [title, setTitle] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [confmEmail, setConfmEmail] = useState("")
  const [cv, setCV] = useState()
  const [cover_letter, setCover_letter] = useState()
  const [lifeCategoryData, setLifeCategoryData] = useState([])
  const [errors, setErrors] = useState({});
  console.log("lifeCategoryData", lifeCategoryData);
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!title.trim()) {
      errors.title = 'Title is required';
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

    if (!address.trim()) {
      errors.address = 'Address is required';
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = 'Email Id is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!confmEmail.trim()) {
      errors.confmEmail = 'Confirmation email Id is required';
      isValid = false;
    } else if (confmEmail.trim() !== email.trim()) {
      errors.confmEmail = 'Emails do not match';
      isValid = false;
    }

    if (!cv) {
      errors.cv = 'CV is required';
      isValid = false;
    }

    if (!cover_letter) {
      errors.cover_letter = 'Cover letter is required';
      isValid = false;
    }

    if (!isCaptchaVerified) {
      errors.captcha = 'please complete the recaptcha before submitting.';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
  const submitData = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = new FormData();
      formData.append("applicationType", applicationType)
      formData.append("title", title)
      formData.append("name", name)
      formData.append("phone", phone)
      formData.append("address", address)
      formData.append("email", email)
      formData.append("confmEmail", confmEmail)
      formData.append("cv", cv)
      formData.append("cover_letter", cover_letter)
      axios.post("applynow/create", formData, { headers: { "Content-Type": "multipart/form-data" } }).then((resp) => {
        console.log("resp", resp)
        setTitle("")
        setName("")
        setPhone("")
        setAddress("")
        setEmail("")
        setConfmEmail("")
        setCV("")
        setCover_letter("")
        setApplicationType("")
        handleClose()
        alert("Your information submitted we will connect with you shortly !!")
      }).catch((err) => {
        console.log("err", err);
      })
    }
  }
  const handleTabClick = (category) => {
    setActiveTab(category);
    console.log("category", category);
    if (category === "All Categories") {
      axios.get("/life_category_details/find_all").then((response) => {
        console.log("result", response.data);
        setLifeCategoryData(response.data)
        // Handle the response data here, such as updating state or rendering it on the UI
      }).catch((error) => {
        console.log("error", error);
        // Handle errors here
      })
    } else {
      axios.get("/life_category_details/find", {
        params: {
          category: category
        }
      }).then((response) => {
        console.log("result", response.data);
        setLifeCategoryData(response.data)
        // Handle the response data here, such as updating state or rendering it on the UI
      }).catch((error) => {
        console.log("error", error);
        // Handle errors here
      })
    }
  };

  const projects = [
    { category: 'garment-printing', image: img4 },
    { category: 'garment-printing', image: img6 },
    { category: 'litho_printing', image: img3 },
    { category: 'all', image: img8 },
    { category: 'litho_printing', image: img },
    { category: 'litho_printing', image: img5 },
  ];
  return (
    <>
      <div className="careersPage">
        <section className="page-title centred">
          <div className="bg-layer"
            style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover' }}>
          </div>
          <div className="pattern-layer"
            style={{ backgroundImage: `url(${img22})` }}></div>
          <div className="auto-container">
            <div className="content-box">
              <h1>Career</h1>
              <ul className="bread-crumb clearfix">
                <li className="breadcrumb-item"><Link to="/" style={{ textDecoration: 'none' }}>Home &nbsp;</Link></li>
                <li className="breadcrumb-item">Career</li>
              </ul>
            </div>
          </div>
        </section >


        <div data-elementor-type="wp-page" data-elementor-id="1802" className="elementor elementor-1802 mt-3">
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-a466899 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="a466899" data-element_type="section">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a8d0954"
                data-id="a8d0954" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-6a9fb82 elementor-widget elementor-widget-printpark_hero_title"
                    data-id="6a9fb82" data-element_type="widget" data-widget_type="printpark_hero_title.default">
                    <div className="elementor-widget-container">
                      <div className="sec-title mt-3">
                        <h6 className="te-subtitle">Opportunity for Growth</h6>
                        <h2 className="te-title printpark-size-default">
                          Life at Sumago
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e468a4f"
                data-id="e468a4f" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-e6fac7b elementor-widget elementor-widget-printpark_button"
                    data-id="e6fac7b" data-element_type="widget"
                    data-settings='{"btn_margin":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_margin_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_margin_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true}}'
                    data-widget_type="printpark_button.default">
                    <div className="elementor-widget-container">
                      <div className="yt-btn">
                        {/* <a href="#" className="theme-btn btn-one printpark-btn">More Projects</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-1310cac elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="1310cac" data-element_type="section">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2e2a809"
                data-id="2e2a809" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-1e4d48c elementor-widget elementor-widget-printpark_masonary_projects"
                    data-id="1e4d48c" data-element_type="widget"
                    data-settings='{"mixit_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"mixit_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"mixit_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"project_box_space":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"project_box_space_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"project_box_space_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"project_box_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"project_box_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"project_box_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true}}'
                    data-widget_type="printpark_masonary_projects.default">
                    <div className="elementor-widget-container">
                      <section className="project-section p-0 m-0">
                        <div className="sortable-masonry">
                          {/* Filter buttons */}
                          <div className="filters-box">
                            <div className="filters">
                              <ul className="filter-tabs filter-btns clearfix">
                                {
                                  imgData.map((item, id) => {
                                    return (
                                      <li
                                        className={activeTab === item.category ? 'active filter' : 'filter'}
                                        onClick={() => handleTabClick(item.category)}
                                      >
                                        {item.category}
                                      </li>
                                    )
                                  })
                                }
                                {/* <li
                                className={activeTab === 'all' ? 'active filter' : 'filter'}
                                onClick={() => handleTabClick('all')}
                              >
                                All Categories
                              </li> */}
                                {/* <li
                                className={activeTab === 'garment-printing' ? 'active filter' : 'filter'}
                                onClick={() => handleTabClick('garment-printing')}
                              >
                                Training
                              </li> */}
                                {/* <li
                                className={activeTab === 'litho_printing' ? 'active filter' : 'filter'}
                                onClick={() => handleTabClick('litho_printing')}
                              >
                                Implant
                              </li> */}
                              </ul>
                            </div>
                          </div>

                          {/* Project items */}
                          <div className="items-container row clearfix">
                            {lifeCategoryData
                              .filter((project) => activeTab === 'All Categories' || project.category.includes(activeTab))
                              .map((project, index) => (
                                <div
                                  key={index}
                                  className={`col-lg-4 col-md-6 col-sm-12 masonry-item small-column ${project.category}`}
                                >
                                  <div className="project-block-one">
                                    <div className="inner-box bn-project-box">
                                      <figure className="image-box">
                                        {/* <h1>{project.category}</h1> */}
                                        <img
                                          src={project.img}
                                          alt={project.category}
                                          onClick={() => handleTabClick(project.category)}
                                        />
                                      </figure>
                                      {/* Additional details or links can be added here */}
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/*pricing - section*/}
        <section className="pricing-section style-two">
          <div className="auto-container">
            <div className="tabs-box">
              <div className="row clearfix">
                <div className="content-box clearfix centred">
                  <div className="sec-title">
                    <h6 className="te-subtitle">Career Opportunities</h6>
                    <h2 className="te-title">Job Openings</h2>
                  </div>

                </div>

                <div className="tabs-content">
                  <div className="tab active-tab" id="tab-3">
                    <div className="row clearfix">
                      {
                        jobData.length === 0 ? <h5>Currently No Vacancy Available</h5> :
                          jobData.map((item, index) => {
                            return (
                              <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                <div className="pricing-block-one ">
                                  <div className="pricing-table te-tab" style={{ backgroundColor: index % 2 !== 0 ? '#f54c4c' : '', color: index % 2 !== 0 ? "white" : "" }} key={index}>
                                    <div className="table-header">
                                      <div className="shape"
                                        style={{ backgroundImage: `url(${img7})` }}>
                                      </div>
                                      <img src={r1} style={{ width: '80px', height: '90px' }} alt="images" />
                                      <h2 className="te-heading">
                                        <h3 className="te-pac">{item.designation}</h3>
                                      </h2>
                                      {/* <button type="button" className="theme-btn btn-two" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                      Apply Now
                                    </button> */}
                                      <Button type="button" className="theme-btn btn-two border-0" onClick={() => handleShow("Job")}>
                                        Apply Now
                                      </Button>

                                    </div>

                                    <div className="table-content te-list">
                                      <div className="card__header">
                                        <img className="card__thumb" src={index % 2 !== 0 ? experience : experience1} alt="" />
                                        <div className="card__header-text">
                                          <ul className="clearfix" style={{ fontWeight: '400' }}>
                                            <li>{item.opening}</li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="card__header">
                                        <img className="card__thumb" src={index % 2 !== 0 ? location : location1} alt="" />
                                        <div className="card__header-text">
                                          <ul className="clearfix" style={{ fontWeight: '400' }}>
                                            <li>{item.location}</li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="card__header">
                                        <img className="card__thumb" src={index % 2 !== 0 ? BEimg2 : BEimg} alt="" />
                                        <div className="card__header-text">
                                          <ul className="clearfix" style={{ fontWeight: '400' }}>
                                            <li>{item.qualification}</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            )
                          })
                      }

                      {/* <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                      <div className="pricing-block-one ">
                        <div className="pricing-table te-tab">
                          <div className="table-header">
                            <div className="shape"
                              style={{ backgroundImage: `url(${img7})` }}>
                            </div>
                            <img src={r1} style={{ width: '80px', height: '90px' }} alt="image" />
                            <h2 className="te-heading">
                              <h3 className="te-pac">MEAN DEVELOPER</h3>
                            </h2>
                            <button type="button" className="theme-btn btn-two" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              Apply Now
                            </button>

                          </div>

                          <div className="table-content te-list">
                            <div className="card__header">
                              <img className="card__thumb" src={experience1} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400' }}>
                                  <li>1</li>
                                </ul>
                              </div>
                            </div>
                            <div className="card__header">
                              <img className="card__thumb" src={location1} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400' }}>
                                  <li>Nashik</li>
                                </ul>
                              </div>
                            </div>
                            <div className="card__header">
                              <img className="card__thumb" src={BEimg} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400' }}>
                                  <li>BE</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div> */}
                      {/* <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                      <div className="pricing-block-one active-block">
                        <div className="pricing-table te-tab">
                          <div className="table-header">
                            <div className="shape"
                              style={{ backgroundImage: `url(${img7})` }}>
                            </div>
                            <img src={r1} style={{ width: '80px', height: '90px' }} alt="image" />
                            <h2 className="te-heading">
                              <h3 className="te-pac" style={{ color: '#f54c4c' }}>MEAN DEVELOPER</h3>
                            </h2>
                            <button type="button" className="theme-btn btn-two" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              Apply Now
                            </button>

                          </div>
                          <div className="table-content te-list">
                            <div className="card__header">
                              <img className="card__thumb" src={experience} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400', color: 'white' }}>
                                  <li>1</li>
                                </ul>
                              </div>
                            </div>
                            <div className="card__header">
                              <img className="card__thumb" src={location} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400', color: 'white' }}>
                                  <li>Nashik</li>
                                </ul>
                              </div>
                            </div>
                            <div className="card__header">
                              <img className="card__thumb" src={BEimg2} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400', color: 'white' }}>
                                  <li>BE</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                      {/* <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                      <div className="pricing-block-one ">
                        <div className="pricing-table te-tab">
                          <div className="table-header">
                            <div className="shape"
                              style={{ backgroundImage: `url(${img7})` }}>
                            </div>
                            <img src={r1} style={{ width: '80px', height: '90px' }} alt="image" />
                            <h2 className="te-heading">
                              <h3 className="te-pac">MEAN DEVELOPER</h3>
                              </h2>
                            <button type="button" className="theme-btn btn-two" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              Apply Now
                            </button>

                          </div>

                          <div className="table-content te-list">
                            <div className="card__header">
                              <img className="card__thumb" src={experience1} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400' }}>
                                  <li>1</li>
                                </ul>
                              </div>
                            </div>
                            <div className="card__header">
                              <img className="card__thumb" src={location1} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400' }}>
                                  <li>Nashik</li>
                                </ul>
                              </div>
                            </div>
                            <div className="card__header">
                              <img className="card__thumb" src={BEimg3} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400' }}>
                                  <li>BE</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div> */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*pricing - section end*/}

      {/*Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apply Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitData} name="myForm" encType="multipart/form-data">
            <Form.Group controlId="formTitle">
              <Form.Label>Title:</Form.Label>
              <Form.Control type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              {errors.title && <span className="error text-danger">{errors.title}</span>}
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              {errors.name && <span className="error text-danger">{errors.name}</span>}
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Mobile Number:</Form.Label>
              <Form.Control type="tel" placeholder="Mobile no." value={phone} onChange={(e) => setPhone(e.target.value)} />
              {errors.phone && <span className="error text-danger">{errors.phone}</span>}
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address:</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
              {errors.address && <span className="error text-danger">{errors.address}</span>}
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email ID:</Form.Label>
              <Form.Control type="email" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <span className="error text-danger">{errors.email}</span>}
            </Form.Group>
            <Form.Group controlId="formConfmEmail">
              <Form.Label>Confirm Email ID:</Form.Label>
              <Form.Control type="email" placeholder="Confirm Email Id" value={confmEmail} onChange={(e) => setConfmEmail(e.target.value)} />
              {errors.confmEmail && <span className="error text-danger">{errors.confmEmail}</span>}
            </Form.Group>
            <Form.Group controlId="formCoverLetter">
              <Form.Label>Cover Letter:</Form.Label>
              <Form.Control type="file" accept=".pdf" onChange={(e) => setCover_letter(e.target.files[0])} />
              {errors.coverLetter && <span className="error text-danger">{errors.coverLetter}</span>}
            </Form.Group>
            <Form.Group controlId="formCV">
              <Form.Label>Upload CV:</Form.Label>
              <Form.Control type="file" accept=".pdf" onChange={(e) => setCV(e.target.files[0])} />
              {errors.cv && <span className="error text-danger">{errors.cv}</span>}
            </Form.Group>
            <div lg={11} className='mt-3'>
              <ReCAPTCHA
                ref={captchaRef}
                //test key
                // sitekey="6LdOus0pAAAAADdOMM08sSgGToiefhBsU80Y7UJA"
                // server key
                // sitekey="6Ld3e7QpAAAAAH7rseHrdwzF0VPZWtJ2ESOVrR_V"
                sitekey="6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz"
                // sitekey={window.location.hostname == "localhost" ? "6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz" : "6Ld3e7QpAAAAAH7rseHrdwzF0VPZWtJ2ESOVrR_V"}
                onChange={onChange}
              />
            </div>
            {errors.captcha && <span className="error text-danger">{errors.captcha}</span>}
            <div className="form-group text-center mt-4">
              <Button variant="secondary" className='mx-1' onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" className='mx-1' type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      {/* <section className="pricing-section style-two">
        <div className="auto-container">
          <div className="tabs-box">
            <div className="row clearfix">
              <div className="content-box clearfix centred">
                <div className="sec-title">
                  <h6 className="te-subtitle">Career Opportunities</h6>
                  <h2 className="te-title">Internship Openings</h2>
                </div>
              </div>
              {errors.captcha && <span className="error text-danger">{errors.captcha}</span>}
              <div className="form-group text-center mt-4">
                <Button variant="secondary" className='mx-1' onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" className='mx-1' type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal> */}
        <section className="pricing-section style-two">
          <div className="auto-container">
            <div className="tabs-box">
              <div className="row clearfix">
                <div className="content-box clearfix centred">
                  <div className="sec-title">
                    <h6 className="te-subtitle">Career Opportunities</h6>
                    <h2 className="te-title">Internship Openings</h2>
                  </div>
                </div>

                <div className="tabs-content">
                  <div className="tab active-tab" id="tab-3">
                    <div className="row clearfix">
                      {
                        internData.length == 0 ? <h5>Currently No Vacancy Available</h5> :
                          internData.map((item, index) => {
                            return (
                              <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                <div className="pricing-block-one ">
                                  <div className="pricing-table te-tab" style={{ backgroundColor: index % 2 !== 0 ? '#f54c4c' : '', color: index % 2 !== 0 ? "white" : "" }} key={index}>
                                    <div className="table-header">
                                      <div className="shape"
                                        style={{ backgroundImage: `url(${img7})` }}>
                                      </div>
                                      <img src={r1} style={{ width: '80px', height: '90px' }} alt="images" />
                                      <h2 className="te-heading">
                                        <h3 className="te-pac" >{item.designation}</h3>
                                      </h2>
                                      <Button type='button' className='theme-btn btn-two border-0' onClick={() => handleShow("Internship")}>
                                        Apply Now
                                      </Button>

                                    </div>

                                    <div className="table-content te-list">
                                      <div className="card__header">
                                        <img className="card__thumb" src={index % 2 !== 0 ? experience : experience1} alt="" />
                                        <div className="card__header-text">
                                          <ul className="clearfix" style={{ fontWeight: '400' }}>
                                            <li>{item.opening}</li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="card__header">
                                        <img className="card__thumb" src={index % 2 !== 0 ? location : location1} alt="" />
                                        <div className="card__header-text">
                                          <ul className="clearfix" style={{ fontWeight: '400' }}>
                                            <li>{item.location}</li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="card__header">
                                        <img className="card__thumb" src={index % 2 !== 0 ? BEimg2 : BEimg} alt="" />
                                        <div className="card__header-text">
                                          <ul className="clearfix" style={{ fontWeight: '400' }}>
                                            <li>{item.qualification}</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            )
                          })
                      }
                      {/* <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                      <div className="pricing-block-one ">
                        <div className="pricing-table te-tab">
                          <div className="table-header">
                            <div className="shape"
                              style={{ backgroundImage: `url(${img7})` }}>
                            </div>
                            <img src={r1} style={{ width: '80px', height: '90px' }} alt="image" />
                            <h2 className="te-heading">
                              <h3 className="te-pac">MEAN DEVELOPER</h3>
                              </h2>
                            <button type="button" className="theme-btn btn-two" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              Apply Now
                            </button>

                          </div>

                          <div className="table-content te-list">
                            <div className="card__header">
                              <img className="card__thumb" src={experience1} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400' }}>
                                  <li>1</li>
                                </ul>
                              </div>
                            </div>
                            <div className="card__header">
                              <img className="card__thumb" src={location1} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400' }}>
                                  <li>Nashik</li>
                                </ul>
                              </div>
                            </div>
                            <div className="card__header">
                              <img className="card__thumb" src={BEimg} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400' }}>
                                  <li>BE</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div> */}
                      {/* <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                      <div className="pricing-block-one active-block">
                        <div className="pricing-table te-tab">
                          <div className="table-header">
                            <div className="shape"
                              style={{ backgroundImage: `url(${img7})` }}>
                            </div>
                            <img src={r1} style={{ width: '80px', height: '90px' }} alt="image" />
                            <h2 className="te-heading">
                              <h3 className="te-pac" style={{ color: '#f54c4c' }}>MEAN DEVELOPER</h3>
                              </h2>
                            <button type="button" className="theme-btn btn-two" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              Apply Now
                            </button>

                          </div>
                          <div className="table-content te-list">
                            <div className="card__header">
                              <img className="card__thumb" src={experience} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400', color: 'white' }}>
                                  <li>1</li>
                                </ul>
                              </div>
                            </div>
                            <div className="card__header">
                              <img className="card__thumb" src={location} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400', color: 'white' }}>
                                  <li>Nashik</li>
                                </ul>
                              </div>
                            </div>
                            <div className="card__header">
                              <img className="card__thumb" src={BEimg2} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400', color: 'white' }}>
                                  <li>BE</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                      {/* <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                      <div className="pricing-block-one ">
                        <div className="pricing-table te-tab">
                          <div className="table-header">
                            <div className="shape"
                              style={{ backgroundImage: `url(${img7})` }}>
                            </div>
                            <img src={r1} style={{ width: '80px', height: '90px' }} alt="image" />
                            <h2 className="te-heading">
                              <h3 className="te-pac">MEAN DEVELOPER</h3>
                             </h2>
                            <button type="button" className="theme-btn btn-two" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              Apply Now
                            </button>

                          </div>

                          <div className="table-content te-list">
                            <div className="card__header">
                              <img className="card__thumb" src={experience1} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400' }}>
                                  <li>1</li>
                                </ul>
                              </div>
                            </div>
                            <div className="card__header">
                              <img className="card__thumb" src={location1} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400' }}>
                                  <li>Nashik</li>
                                </ul>
                              </div>
                            </div>
                            <div className="card__header">
                              <img className="card__thumb" src={BEimg3} alt="" />
                              <div className="card__header-text">
                                <ul className="clearfix" style={{ fontWeight: '400' }}>
                                  <li>BE</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div> */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <Testimonials /> */}
      </div>
    </>
  )
}

export default Career