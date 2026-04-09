import React, { useEffect, useState } from "react";
import "./EntryPage.css"; // Import CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap
import { FaHome, FaEnvelope, FaPhone } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import group41 from "../assets/images/Group 41.png"
import group16 from "../assets/images/Group 16 (3).png"
import group33 from "../assets/images/Group 33.png"
import group34 from "../assets/images/Group 34.png"
import india from "../assets/images/india.png"
import { useNavigate } from "react-router-dom";
const EntryPage = () => {
    const navigate = useNavigate()
    const [dates, setDate] = useState("")
    useEffect(() => {
        let date = new Date();
        let currentYear = date.getFullYear();
        setDate(currentYear);

    }, [])
    return (
        <section className="headSection">

            <section class="background-img d-flex align-items-center">
                <div class="container-fluid mt-md-5">
                    <div class="row p-3">
                        <div class="col-md-3 position-relative  d-none d-lg-block">
                            <img src={group41} class="w-75 ms-md-4 img-fluid " alt="sumagoInfotech" />
                        </div>

                        <div class="col-lg-4 col-md-6 d-block">
                            <div class="content-box">
                                <img src={group33} onClick={() => navigate("/home")} alt="Sumago Infotech" class="w-100" style={{ cursor: "pointer" }} />
                                <h4 class="mt-3 fs-3"><strong>Transforming Businesses </strong> <span class=""
                                    style={{ fontSize: "1.7rem ", fontWeight: 200 }}>with Next-Gen IT Solutions</span></h4>
                                <p style={{ fontSize: "14px" }}>Sumago Infotech delivers expert Web & App Development, Digital Marketing, IoT, and more - helping businesses innovate and grow.</p>
                                <ul class="list-group list-group-flush bg-transparent">
                                    <li class="list-group-item bg-transparent" style={{ fontWeight: 500 }}>UI / UX DESIGN</li>
                                    <li class="list-group-item bg-transparent" style={{ fontWeight: 500 }}>WEBSITE DESIGN</li>
                                    <li class="list-group-item bg-transparent" style={{ fontWeight: 500 }}>MOBILE APPLICATION</li>
                                    <li class="list-group-item bg-transparent" style={{ fontWeight: 500 }}>DIGITAL MARKETING</li>
                                    <li class="list-group-item btn text-danger me-auto my-2 fw-bold" onClick={() => navigate("/home")}>READ
                                        MORE &nbsp;<img src={group16} alt="" /> </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="content-box">
                                <img src={group34} onClick={() => window.open("https://scope.org.in/")} alt="Sumago Infotech" class="w-100" style={{ cursor: "pointer" }} />
                                <h4 class="mt-3 fs-3"><strong>Empower Your Future </strong> <span class=""
                                    style={{ fontSize: "1.7rem", fontWeight: 200 }}>with Industry-Relevant Skills</span></h4>
                                <p style={{ fontSize: "14px" }}>With SCOPE, master in-demand skills like Full Stack Development, Data Science, and more with hands-on, industry-driven training!</p>
                                <ul class="list-group list-group-flush bg-transparent">
                                    <li class="list-group-item text-uppercase bg-transparent" style={{ fontWeight: 500 }}>FULL
                                        STACK IN ANGULAR / REACT / JAVA</li>
                                    <li class="list-group-item text-uppercase bg-transparent" style={{ fontWeight: 500 }}>PYTHON
                                        PROGRAMMING</li>
                                    <li class="list-group-item text-uppercase bg-transparent" style={{ fontWeight: 500 }}>MOBILE
                                        APPLICATION</li>
                                    <li class="list-group-item text-uppercase bg-transparent" style={{ fontWeight: 500 }}>DATA
                                        SCIENCE / AI / ML</li>
                                    <li class="list-group-item btn me-auto my-2 fw-bold"><a
                                        href="https://scope.org.in/" target="_blank"
                                        class="text-danger text-decoration-none">READ MORE &nbsp;<img
                                            src={group16} alt="" /> </a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ textAlign: "start" }} className="px-4 pt-3  container-fluid ftr">
                <div className='my-2'>
                    <h2>Our offices </h2>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-5 my-1">
                        <div style={{ height: "90%" }} class="card p-3 my-3 bg-transparent text-white crd border-1">
                            <h6 class="text-uppercase fw-bold mx-2"><img src={india}
                                width="25" />&nbsp;&nbsp;&nbsp;Corporate OFFICE</h6>
                            <br />
                            <div class="contact-info">
                                <div class="contact-item homek d-flex">
                                    <div class=" mx-3 mt-2"> <i class="fas fa-home mb-5"></i> </div>
                                    <p class="mt-2 mb-0 text-white">
                                        The Avenue, Six Floor, Behind Prakash Petrol Pump, Govind Nagar, Nashik, Maharashtra
                                        422009.
                                    </p>
                                </div>
                                <div class="contact-item d-flex" style={{ paddingTop: "5px" }}>
                                    <div class=" mx-3 mt-2"> <i class="fas fa-envelope"></i></div>
                                    <p class="mt-2 mb-0">
                                        <a href="mailto:info@sumagoinfotech.com" class="text-white">info@sumagoinfotech.com</a>
                                    </p>
                                </div>
                                <div class="contact-item d-flex">
                                    <div class=" mx-3 mt-2"> <i class="fas fa-phone"></i></div>
                                    <p class="mt-2 mb-0">
                                        <a href="tel:+918408084888" class="text-white">+91 8408084888</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-5 my-1">
                        <div style={{ height: "90%" }} class="card p-3 my-3 bg-transparent text-white crd border-1">
                            <h6 class="text-uppercase fw-bold mx-2"><img src={india}
                                width="25" />&nbsp;&nbsp;&nbsp;Nashik BRANCH OFFICE</h6>
                            <br />
                            <div class="contact-info">
                                <div class="contact-item homek d-flex">
                                    <div class=" mx-3 mt-2"> <i class="fas fa-home mb-5"></i> </div>
                                    <p class="mt-2 mb-0 text-white">
                                        D-24, Near KIA Workshop , NICE Area, Satpur, Nashik, Maharashtra 422007
                                    </p>
                                </div>
                                <div class="contact-item d-flex" style={{ paddingTop: "5px" }}>
                                    <div class=" mx-3 mt-2"> <i class="fas fa-envelope"></i></div>
                                    <p class="mt-2 mb-0">
                                        <a href="mailto:info@sumagoinfotech.com" class="text-white">info@sumagoinfotech.com</a>
                                    </p>
                                </div>
                                <div class="contact-item d-flex">
                                    <div class=" mx-3 mt-2"> <i class="fas fa-phone"></i></div>
                                    <p class="mt-2 mb-0">
                                        <a href="tel:+918530388815" class="text-white">+91  8530388815</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-5 my-1">
                        <div style={{ height: "90%" }} class="card p-3 my-3 bg-transparent text-white crd border-1">
                            <h6 class="text-uppercase fw-bold mx-2"><img src={india}
                                width="25" />&nbsp;&nbsp;&nbsp;PUNE BRANCH OFFICE</h6>
                            <br />
                            <div class="contact-info">
                                <div class="contact-item homek d-flex">
                                    <div class=" mx-3 mt-2"> <i class="fas fa-home mb-5"></i> </div>
                                    <p class="mt-2 mb-0 text-white">
                                        Third Floor, Kakade Center Port, University Rd, near E-Square, Premnagar, Shivajinagar,
                                        Pune, Maharashtra 411016
                                    </p>
                                </div>
                                <div class="contact-item d-flex">
                                    <div class=" mx-3 mt-2"> <i class="fas fa-envelope"></i></div>
                                    <p class="mt-2 mb-0">
                                        <a href="mailto:info@sumagoinfotech.com" class="text-white">info@sumagoinfotech.com</a>
                                    </p>
                                </div>
                                <div class="contact-item d-flex">
                                    <div class=" mx-3 mt-2"> <i class="fas fa-phone"></i></div>
                                    <p class="mt-2 mb-0">
                                        <a href="tel:+917263084881" class="text-white">+91 7263084881</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row pb-4">
                        <div class="col-12 text-center">

                            <span>
                                © {dates} All Rights Reserved By : <b>Sumago Infotech Pvt. Ltd.</b>
                            </span>
                        </div>
                    </div>
                </div>

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />

                <div class="floating_btn">
                    <a class="whatsapp-btn" target="_blank"
                        href="https://api.whatsapp.com/send?phone=+918530388815 &text=Hello">
                        <div class="contact_icon">
                            <i class="bi bi-whatsapp"></i>
                        </div>
                    </a>
                </div>

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />

                <div class="floating_btn">
                    <a class="whatsapp-btn1" target="_blank"
                        href="https://api.whatsapp.com/send?phone=+918010385237 &text=Hello">
                        <div class="contact_icon">
                            <i class="bi bi-whatsapp"></i>
                        </div>
                    </a>
                </div>
            </div>
        </section>

    );
};

export default EntryPage;
