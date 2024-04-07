import React, { useEffect } from 'react'
import g6 from "../assets/newaniamtion/Group 6.png"
import g13 from "../assets/newaniamtion/Group 13.png"
// import g12 from "../assets/newaniamtion/Group 12 (2).png"
import secondNRED from "../assets/newaniamtion/2nNRED.png"
import sumago_white from "../assets/newaniamtion/sumago_white-removebg-preview.png"
import scope_logo from "../assets/newaniamtion/SCOPE FINAL LOGO Black new 1.png"
import oneRED from "../assets/newaniamtion/1nRED 1 (3).png"
import white_log from "../assets/newaniamtion/SCOPE_white-removebg-preview.png"
import download from "../assets/newaniamtion/download.png"
import "../assets/css/Starter.css"
import $ from 'jquery'; //
const StatrterPage = () => {
    useEffect(() => {
        $('.sf-wrap')
            .mouseenter(function () {
                $(this).addClass('hover');
            })
            .mouseleave(function () {
                $(this).removeClass('hover');
            })
            .hover(function (event) {
                if (event.target.nodeName !== 'A') {
                    $(this).toggleClass('active');
                }
            });
    }, []);
    return (
        <>
            <div>
                <section id="section-feature" class="container-fluid d-lg-block  d-md-block d-none ">
                    <img src={g6} class=" img-fluid" alt="" />
                    <div class="row justify-content-around ">

                        <li id="sf-innovation" class="col up">
                            <a href="https://www.sumagoinfotech.com/index1.php" target="_blank">

                                <div class="sf-wrap">
                                    <div class="sf-mdl-left">
                                        <div class="sf-icon">
                                            <div class=" d-flex justify-content-center">
                                                <div class="round d-grid ">
                                                    <img src={g13} class=" logo img-fluid d-flex justify-content-center"
                                                        alt="" />
                                                    <div class=" d-flex justify-content-center">
                                                        <img src={secondNRED} class="img-fluid w-75 icons " alt="" />

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="sf-mdl-right">
                                        <div class="sf-icon">
                                            <div class=" d-flex justify-content-center">
                                                <div class="round d-grid ">
                                                    <img src={g13} class=" logo img-fluid d-flex justify-content-center"
                                                        alt="" />
                                                    <div class=" d-flex justify-content-center">
                                                        <img src={secondNRED} class="img-fluid w-75 icons " alt="" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sf-mdl-left-full">
                                        <div class="sf-icon">
                                            <div class=" d-flex justify-content-center">
                                                <img src={sumago_white} class="img-fluid " alt="" />

                                            </div>
                                        </div>

                                    </div>
                                    <div class="sf-mdl-right-full">
                                        <div class="sf-icon">
                                            <div class=" d-flex justify-content-center">
                                                <img src={{ sumago_white }} class="img-fluid  " alt="" />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </a>

                        </li>


                        <li id="sf-opportunity" class="col up">
                            <a href="https://website.sumagotraining.in/" target="_blank">

                                <div class="sf-wrap">
                                    <div class="sf-mdl-left  ">
                                        <div class="sf-icon d-flex  justify-content-center ">
                                            <div class="round d-grid ">
                                                <img src={scope_logo}
                                                    class="ms-4 w-75 logo img-fluid d-flex scope justify-content-center" alt="" />
                                                <div class=" d-flex justify-content-center">
                                                    <img src={oneRED} class="img-fluid ico2 icons " alt="" />

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="sf-mdl-right">
                                        <div class="sf-icon d-flex  justify-content-center ">
                                            <div class="round d-grid ">
                                                <img src={scope_logo}
                                                    class="ms-4 w-75 logo img-fluid d-flex scope justify-content-center" alt="" />
                                                <div class=" d-flex justify-content-center">
                                                    <img src={oneRED} class="img-fluid ico2 icons " alt="" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sf-mdl-left-full">
                                        <div class="sf-icon">
                                            <div class=" d-flex justify-content-center">
                                                <img src={white_log} class="img-fluid mt-3 w-75 " alt="" />

                                            </div>
                                        </div>

                                    </div>
                                    <div class="sf-mdl-right-full">
                                        <div class="sf-icon">
                                            <div class=" d-flex justify-content-center">
                                                <img src={white_log} class="img-fluid mt-3 w-75" alt="" />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </a>

                        </li>
                    </div>
                </section >
                <section id="section-feature" class="container-fluid largephone d-none ">
                    {/* <img src={g12} class="col-6 img-fluid" alt="" /> */}

                    <div style={{ height: "530px" }} class="row justify-content-around">
                        <li id="sf-innovation" class=" ups">
                            <a href="https://www.sumagoinfotech.com/index1.php" target="_blank">
                                <div class="sf-wrap">
                                    <div class="sf-mdl-left ok">
                                        <div class="sf-icon">
                                            <div class=" d-flex align-items-center mt-2">
                                                <img src={g13}
                                                    class=" logo img-fluid d-flex align-items-center justify-content-center" alt="" />

                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ right: "13px !important" }} class="sf-mdl-right ok3">
                                        <div class="sf-icon">
                                            <div class=" d-flex justify-content-center mt-2">
                                                <img src={g13} class=" logo img-fluid d-flex justify-content-center"
                                                    alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sf-mdl-left-full ok">
                                        <div class="sf-icon">
                                            <div class=" d-flex justify-content-center">
                                                <img src={sumago_white} class="img-fluid  mt- " alt="" />

                                            </div>
                                        </div>

                                    </div>
                                    <div class="sf-mdl-right-full ok2">
                                        <div class="sf-icon">
                                            <div class=" d-flex justify-content-center">
                                                <img src={sumago_white} class="img-fluid  mt- " alt="" />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </a>
                        </li>


                        <li id="sf-opportunity" class="col-md-3 col-sm-6 col-xs-12 ups tft mt-5">
                            <a href="https://website.sumagotraining.in/" target="_blank">
                                <div class="sf-wrap">
                                    <div class="sf-mdl-left  ok">
                                        <div class="sf-icon d-flex  justify-content-center ">
                                            <img src={scope_logo}
                                                class=" w-75  logo img-fluid d-flex scope justify-content-center mt-3" alt="" />

                                        </div>
                                    </div>
                                    <div style={{ right: "13px !important" }} class="sf-mdl-right ok2">
                                        <div class="sf-icon d-flex  justify-content-center ">
                                            <img src={scope_logo}
                                                class=" w-75 logo img-fluid d-flex scope justify-content-center mt-3" alt="" />
                                        </div>
                                    </div>

                                    <div class="sf-mdl-left-full ok">
                                        <div class="sf-icon">
                                            <div class=" d-flex justify-content-center">
                                                <img src={white_log} class="img-fluid ico2 w-75" alt="" />

                                            </div>
                                        </div>

                                    </div>
                                    <div class="sf-mdl-right-full ok2">
                                        <div class="sf-icon">
                                            <div class=" d-flex justify-content-center">
                                                <img src={white_log} class="img-fluid ico2 w-75 " alt="" />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </a>
                        </li>
                    </div>
                </section >
                <section id="section-feature" class="container-fluid phone mx-0">

                    {/* <img src={g12} class="col-7 img-fluid" alt="" /> */}

                    <div style={{ height: "530px" }} class="row justify-content-around">
                        <li id="sf-innovation" class=" ups">
                            <a href="https://www.sumagoinfotech.com/index1.php" target="_blank">
                                <div class="sf-wrap">
                                    <div class="sf-mdl-left ok">
                                        <div class="sf-icon">
                                            <div class=" d-flex align-items-center mt-2">
                                                <img src={g13}
                                                    class=" logo img-fluid d-flex align-items-center justify-content-center" alt="" />

                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ right: "13px !important" }} class="sf-mdl-right ok3">
                                        <div class="sf-icon">
                                            <div class=" d-flex justify-content-center mt-2">
                                                <img src={g13} class=" logo img-fluid d-flex justify-content-center"
                                                    alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sf-mdl-left-full ok">
                                        <div class="sf-icon">
                                            <div class=" d-flex justify-content-center">
                                                <img src={sumago_white} class="img-fluid  mt- " alt="" />

                                            </div>
                                        </div>

                                    </div>
                                    <div class="sf-mdl-right-full ok2">
                                        <div class="sf-icon">
                                            <div class=" d-flex justify-content-center">
                                                <img src={sumago_white} class="img-fluid  mt- " alt="" />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </a>
                        </li>


                        <li id="sf-opportunity" class="col-md-3 col-sm-6 col-xs-12 ups mt-5">
                            <a href="https://website.sumagotraining.in/" target="_blank">
                                <div class="sf-wrap">
                                    <div class="sf-mdl-left  ok">
                                        <div class="sf-icon d-flex  justify-content-center ">
                                            <img src={scope_logo}
                                                class=" w-75  logo img-fluid d-flex scope justify-content-center mt-3" alt="" />

                                        </div>
                                    </div>
                                    <div style={{ right: "13px !important" }} class="sf-mdl-right ok2">
                                        <div class="sf-icon d-flex  justify-content-center ">
                                            <img src={scope_logo}
                                                class=" w-75 logo img-fluid d-flex scope justify-content-center mt-3" alt="" />
                                        </div>
                                    </div>

                                    <div class="sf-mdl-left-full ok">
                                        <div class="sf-icon">
                                            <div class=" d-flex justify-content-center">
                                                <img src={white_log} class="img-fluid ico2 w-75" alt="" />

                                            </div>
                                        </div>

                                    </div>
                                    <div class="sf-mdl-right-full ok2">
                                        <div class="sf-icon">
                                            <div class=" d-flex justify-content-center">
                                                <img src={white_log} class="img-fluid ico2 w-75 " alt="" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </a>
                        </li>
                    </div>
                </section>
            </div >
            <div style={{ textAlign: "start" }} class="container-fluid ftr ">
                <div className='my-2'>
                    <h2>Our offices </h2>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 my-1">
                        <div style={{ height: "90%" }} class="card p-3 my-3 bg-transparent text-white crd border-1">
                            <h6 class="text-uppercase fw-bold mx-3"><img src={download} width="25" />&nbsp;&nbsp;&nbsp;CORPORATE OFFICE</h6>
                            <br />
                            <div class="contact-info">
                                <div class="contact-item homek d-flex">
                                    <div class=" mx-3 mt-2"> <i class="fas fa-home mb-5"></i> </div>
                                    <p class="mt-2 mb-0">
                                        Third Floor, Gajra Chambers, Mumbai - Agra National Hwy, Kamod Nagar, Indira Nagar, Nashik, Maharashtra 422009
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
                                        <a href="tel:+918530388815" class="text-white">+91 8530388815</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 my-1">
                        <div style={{ height: "90%" }} class="card p-3 my-3 bg-transparent text-white crd border-1">
                            <h6 class="text-uppercase fw-bold mx-2"><img src={download} width="25" />&nbsp;&nbsp;&nbsp;NASHIK OFFICE</h6>
                            <br />
                            <div class="contact-info">
                                <div class="contact-item homek d-flex">
                                    <div class=" mx-3 mt-2"> <i class="fas fa-home mb-5"></i> </div>
                                    <p class="mt-2 mb-0">
                                        The Avenue, Fourth Floor, Behind Prakash Petrol Pump, Govind Nagar, Nashik, Maharashtra 422009
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
                    <div class="col-lg-4 col-sm-6 my-1">
                        <div style={{ height: "90%" }} class="card p-3 my-3 bg-transparent text-white crd border-1">
                            <h6 class="text-uppercase fw-bold mx-2"><img src={download} width="25" />&nbsp;&nbsp;&nbsp;PUNE OFFICE</h6>
                            <br />
                            <div class="contact-info">
                                <div class="contact-item homek d-flex">
                                    <div class=" mx-3 mt-2"> <i class="fas fa-home mb-5"></i> </div>
                                    <p class="mt-2 mb-0">
                                        Third Floor, Kakade Center Port, University Rd, near E-Square, Premnagar, Shivajinagar, Pune, Maharashtra 411016
                                    </p>
                                </div>
                                <div class="contact-item d-flex" >
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
                </div>
                <div class="row pb-4">
                    <div class="col-12 text-center">
                        <span class="font-weight-medium font-12 ">
                            &copy; 2023, Made by Sumago Infotech with
                            <i class="fa-solid fa-heart"></i>

                            From Nashik
                        </span>
                    </div>
                </div>

                <a href="https://api.whatsapp.com/send?phone= +91  8530388815&amp;" target="_blank" class="whatsapp-btn">
                    <i class="bi bi-whatsapp"></i>
                </a >
            </div>
        </>




    )
}

export default StatrterPage