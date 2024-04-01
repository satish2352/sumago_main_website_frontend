import React, { useState, useEffect } from 'react';
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

const Career = () => {
  const [imgData, setImgData] = useState([])
  useEffect(() => {
    axios.get("/life/find").then((result) => {
      console.log("result", result);
      setImgData(result.imgData)
    }).catch((err) => {
      console.log("err", err);
    });
  }, [])

  const [jobData, setJobData] = useState([])
  useEffect(() => {
    axios.get("/jobs/find").then((result) => {
      console.log("result", result);
      setJobData(result.jobData)
    }).catch((err) => {
      console.log("err", err);
    });
  }, [])

  const [internData, setInternData] = useState([])
  useEffect(() => {
    axios.get("/internship/find").then((result) => {
      console.log("result", result);
      setInternData(result.internData)
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
  console.log("cv", cv);
  console.log("cover_letter", cover_letter);
  const submitData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title)
    formData.append("name", name)
    formData.append("phone", phone)
    formData.append("address", address)
    formData.append("email", email)
    formData.append("confmEmail", confmEmail)
    formData.append("cv", cv)
    formData.append("cover_letter", cover_letter)
    axios.post("/career/apply", formData, { headers: { "Content-Type": "multipart/form-data" } }).then((resp) => {
      console.log("resp", resp)
      setTitle("")
      setName("")
      setPhone("")
      setAddress("")
      setEmail("")
      setConfmEmail("")
      setCV("")
      setCover_letter("")
    }).catch((err) => {
      console.log("err", err);
    })
  }
  const handleTabClick = (category) => {
    setActiveTab(category);
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
                              {/* {
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
                              } */}
                              <li
                                className={activeTab === 'all' ? 'active filter' : 'filter'}
                                onClick={() => handleTabClick('all')}
                              >
                                All Categories
                              </li>
                              <li
                                className={activeTab === 'garment-printing' ? 'active filter' : 'filter'}
                                onClick={() => handleTabClick('garment-printing')}
                              >
                                Training
                              </li>
                              <li
                                className={activeTab === 'litho_printing' ? 'active filter' : 'filter'}
                                onClick={() => handleTabClick('litho_printing')}
                              >
                                Implant
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Project items */}
                        <div className="items-container row clearfix">
                          {projects
                            .filter((project) => activeTab === 'all' || project.category.includes(activeTab))
                            .map((project, index) => (
                              <div
                                key={index}
                                className={`col-lg-4 col-md-6 col-sm-12 masonry-item small-column ${project.category}`}
                              >
                                <div className="project-block-one">
                                  <div className="inner-box bn-project-box">
                                    <figure className="image-box">
                                      <img
                                        src={project.image}
                                        alt={project.title}
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
                    {/* {
                      jobData.map((item, id) => {
                        return (
                          <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                            <div className="pricing-block-one ">
                              <div className="pricing-table te-tab">
                                <div className="table-header">
                                  <div className="shape"
                                    style={{ backgroundImage: `url(${img7})` }}>
                                  </div>
                                  <img src={r1} style={{ width: '80px', height: '90px' }} alt="image" />
                                  <h2 className="te-heading">
                                    <h3 className="te-pac">{item.designation}</h3>
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
                                        <li>{item.job_openings}</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="card__header">
                                    <img className="card__thumb" src={location1} alt="" />
                                    <div className="card__header-text">
                                      <ul className="clearfix" style={{ fontWeight: '400' }}>
                                        <li>{item.location}</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="card__header">
                                    <img className="card__thumb" src={BEimg} alt="" />
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
                    } */}
                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                      <div className="pricing-block-one ">
                        <div className="pricing-table te-tab">
                          <div className="table-header">
                            <div className="shape"
                              style={{ backgroundImage: `url(${img7})` }}>
                            </div>
                            <img src={r1} style={{ width: '80px', height: '90px' }} alt="image" />
                            <h2 className="te-heading">
                              <h3 className="te-pac">MEAN DEVELOPER</h3>
                              {/* <span className="symble">$</span> 549 <span className="text">/Mo</span> */}
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
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                      <div className="pricing-block-one active-block">
                        <div className="pricing-table te-tab">
                          <div className="table-header">
                            <div className="shape"
                              style={{ backgroundImage: `url(${img7})` }}>
                            </div>
                            <img src={r1} style={{ width: '80px', height: '90px' }} alt="image" />
                            <h2 className="te-heading">
                              <h3 className="te-pac" style={{ color: '#f54c4c' }}>MEAN DEVELOPER</h3>
                              {/* <span className="symble">$</span> 749 <span className="text">/ye</span> */}
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
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                      <div className="pricing-block-one ">
                        <div className="pricing-table te-tab">
                          <div className="table-header">
                            <div className="shape"
                              style={{ backgroundImage: `url(${img7})` }}>
                            </div>
                            <img src={r1} style={{ width: '80px', height: '90px' }} alt="image" />
                            <h2 className="te-heading">
                              <h3 className="te-pac">MEAN DEVELOPER</h3>
                              {/* <span className="symble">$</span> 549 <span className="text">/Mo</span> */}
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
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*pricing - section end*/}

      {/*Modal */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Apply Now</h4>
              <button type="button" className="close" data-bs-dismiss="modal">X</button>
            </div>
            <div className="modal-body">
              <form method="post" name="myForm" enctype="multipart/form-data" onSubmit={submitData}>
                <div className="form-group">
                  <label>Job Title :</label>
                  <input className="form-control" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Name" required />
                </div>
                <div className="form-group">
                  <label>Name :</label>
                  <input className="form-control" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                </div>
                <div className="form-group">
                  <label>Mobile Number :</label>
                  <input className="form-control" type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} maxlength="10" minlength="10" pattern="[7-9]{1}[0-9]{9}" placeholder="Mobile no." required />
                </div>
                <div className="form-group">
                  <label>Address :</label>
                  <textarea type="text" name="address" className="form-control" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required=""></textarea>
                </div>
                <div className="form-group">
                  <label>Email Address :</label>
                  <input className="form-control" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                </div>
                <div className="form-group">
                  <label>Confirm Email Address :</label>
                  <input className="form-control" type="email" name="confEmail" placeholder="Email" required value={confmEmail} onChange={(e) => setConfmEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Cover Letter :</label>
                  <div>
                    <input type="file" name="cover_letter" accept=".pdf" id="cover_letter" required onChange={(e) => setCover_letter(e.target.files[0])} />
                    <span id="file_error" className="inputError"></span>
                  </div>
                </div>
                <div className="form-group">
                  <label>Upload CV :</label>
                  <div>
                    <input type="file" name="cv" accept=".pdf" id="cv" required onChange={(e) => setCV(e.target.files[0])} />
                    <span id="file_error" className="inputError"></span>
                  </div>
                </div>

                {/* <div className="form-group">
                <input type="text" name="captcha1" id="captcha" className="form-control" placeholder="Enter Captcha" required="">
                  <img src="captcha.php">
                  </div> */}

                <div className="form-group text-center mt-4">

                  <button className="btn btn-success btn-lg" type="submit" name="btn_submit">Submit</button>
                  {/* <input className="btn btn-danger btn-lg" type="reset" name="btn_reset" value="Clear"> */}
                </div>
              </form>


            </div>
          </div>
        </div>
      </div>
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
                    {/* {
                      internData.map((item,id) => {
                        return (
                          <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                            <div className="pricing-block-one ">
                              <div className="pricing-table te-tab">
                                <div className="table-header">
                                  <div className="shape"
                                    style={{ backgroundImage: `url(${img7})` }}>
                                  </div>
                                  <img src={r1} style={{ width: '80px', height: '90px' }} alt="image" />
                                  <h2 className="te-heading">
                                    <h3 className="te-pac">{item.designation}</h3>
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
                                        <li>{item.intern_openings}</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="card__header">
                                    <img className="card__thumb" src={location1} alt="" />
                                    <div className="card__header-text">
                                      <ul className="clearfix" style={{ fontWeight: '400' }}>
                                        <li>{item.location}</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="card__header">
                                    <img className="card__thumb" src={BEimg} alt="" />
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
                    } */}
                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                      <div className="pricing-block-one ">
                        <div className="pricing-table te-tab">
                          <div className="table-header">
                            <div className="shape"
                              style={{ backgroundImage: `url(${img7})` }}>
                            </div>
                            <img src={r1} style={{ width: '80px', height: '90px' }} alt="image" />
                            <h2 className="te-heading">
                              <h3 className="te-pac">MEAN DEVELOPER</h3>
                              {/* <span className="symble">$</span> 549 <span className="text">/Mo</span> */}
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
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                      <div className="pricing-block-one active-block">
                        <div className="pricing-table te-tab">
                          <div className="table-header">
                            <div className="shape"
                              style={{ backgroundImage: `url(${img7})` }}>
                            </div>
                            <img src={r1} style={{ width: '80px', height: '90px' }} alt="image" />
                            <h2 className="te-heading">
                              <h3 className="te-pac" style={{ color: '#f54c4c' }}>MEAN DEVELOPER</h3>
                              {/* <span className="symble">$</span> 749 <span className="text">/ye</span> */}
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
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                      <div className="pricing-block-one ">
                        <div className="pricing-table te-tab">
                          <div className="table-header">
                            <div className="shape"
                              style={{ backgroundImage: `url(${img7})` }}>
                            </div>
                            <img src={r1} style={{ width: '80px', height: '90px' }} alt="image" />
                            <h2 className="te-heading">
                              <h3 className="te-pac">MEAN DEVELOPER</h3>
                              {/* <span className="symble">$</span> 549 <span className="text">/Mo</span> */}
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
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  )
}

export default Career