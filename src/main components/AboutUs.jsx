import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Modal, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom'
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
import '../assets/images/wp-content/plugins/printpark-plugin/redux-framework/redux-core/assets/css/extendify-utilities.css'
import '../assets/images/wp-content/plugins/woocommerce/assets/css/woocommerce.css'
import value1 from '../assets/images/wp-content/uploads/2023/08/WHY SUMAGO/core_value1.png'
import value2 from '../assets/images/wp-content/uploads/2023/08/WHY SUMAGO/core value NEW RESIZED mobile view.png'
import vision from '../assets/images/wp-content/uploads/2023/08/vission.png'
import mission from '../assets/images/wp-content/uploads/2023/08/mission.png'
import sonaliG from '../assets/images/wp-content/uploads/2023/08/team/1sonali maam.png'
import sudhirG from '../assets/images/wp-content/uploads/2023/08/team/SUDHIR-removebg-preview.png'
import satishA from '../assets/images/wp-content/uploads/2023/08/team/satush_aurange-removebg-preview.png'
import satishM from '../assets/images/wp-content/uploads/2023/08/team/satish_marwat-removebg-preview.png'
import santoshG from '../assets/images/wp-content/uploads/2023/08/team/santosh-removebg-preview.png'
import amolP from '../assets/images/wp-content/uploads/2023/08/team/AMOL-removebg-preview.png'
import nilamB from '../assets/images/wp-content/uploads/2023/08/team/NILAM-removebg-preview.png'
import prasadP from '../assets/images/wp-content/uploads/2023/08/team/prasand-removebg-preview.png'
import ashwiniC from '../assets/images/wp-content/uploads/2023/08/team/ashwini-removebg-preview.png'
import swapnaliC from '../assets/images/wp-content/uploads/2023/08/team/swapnali-removebg-preview.png'
import chaitaliM from '../assets/images/wp-content/uploads/2023/08/team/chaitali-removebg-preview.png'
import asmitaP from '../assets/images/wp-content/uploads/2023/08/team/asmita-removebg-preview.png'
import pratikshaK from '../assets/images/wp-content/uploads/2023/08/team/PRATHIKSHA-removebg-preview.png'
import maheshM from '../assets/images/wp-content/uploads/2023/08/team/Mhesh-removebg-preview.png'
import savitaH from '../assets/images/wp-content/uploads/2023/08/team/savita-removebg-preview.png'
import vivekP from '../assets/images/wp-content/uploads/2023/08/team/VIKAS-removebg-preview.png'
import rupaliP from '../assets/images/wp-content/uploads/2023/08/team/RUPALI-removebg-preview.png'
import vikasW from '../assets/images/wp-content/uploads/2023/08/team/VIKAS WAGH.png'
import shubhamK from '../assets/images/wp-content/uploads/2023/08/team/SHUBHAM-removebg-preview.png'
import varshaR from '../assets/images/wp-content/uploads/2023/08/team/VARSHA-removebg-preview.png'
import payalP from '../assets/images/wp-content/uploads/2023/08/team/payal-removebg-preview.png'
import poojaD from '../assets/images/wp-content/uploads/2023/08/team/POOJA-removebg-preview.png'
import kajalG from '../assets/images/wp-content/uploads/2023/08/team/KAJAL-removebg-preview.png'
import vishG from '../assets/images/wp-content/uploads/2023/08/team/VISHVAAMBAR-removebg-preview.png'
import mohiniK from '../assets/images/wp-content/uploads/2023/08/team/MOHINI-removebg-preview.png'
import pratikshaM from '../assets/images/wp-content/uploads/2023/08/team/PRATHIKSHAAA-removebg-preview.png'
import ravindraK from '../assets/images/wp-content/uploads/2023/08/team/RAVINDRA-removebg-preview.png'
import yashG from '../assets/images/wp-content/uploads/2023/08/team/YASH-removebg-preview.png'
import diptiP from '../assets/images/wp-content/uploads/2023/08/team/DIPTI-removebg-preview.png'
import vrushaliV from '../assets/images/wp-content/uploads/2023/08/team/58dbfef0-c491-49d7-b29d-efd0380a287a-removebg-preview.png'
import rohiniG from '../assets/images/wp-content/uploads/2023/08/team/ROHINI-removebg-preview (1).png'
import dipaliJ from '../assets/images/wp-content/uploads/2023/08/team/dipsli_account-removebg-preview.png'
import aartiP from '../assets/images/wp-content/uploads/2023/08/team/ARTI-removebg-preview.png'
import anoopN from '../assets/images/wp-content/uploads/2023/08/team/anop-removebg-preview.png'
import dhanR from '../assets/images/wp-content/uploads/2023/08/team/313059851_1752860031741006_7922389626298263786_n-removebg-preview.png'
import shwetaJ from '../assets/images/wp-content/uploads/2023/08/team/SHWETA-removebg-preview.png'
import sarangiM from '../assets/images/wp-content/uploads/2023/08/team/SARANGI-removebg-preview.png'
import pradN from '../assets/images/wp-content/uploads/2023/08/team/PRADYUMAN-removebg-preview.png'
import shivamS from '../assets/images/wp-content/uploads/2023/08/team/SHIVAM-removebg-preview.png'
import kajal from '../assets/images/wp-content/uploads/2023/08/team/kajal-removebg-preview (1).png'
import snehalB from '../assets/images/wp-content/uploads/2023/08/team/snehal b.png'
import snehal from '../assets/images/wp-content/uploads/2023/08/team/snehal.png'
import harshal from '../assets/images/wp-content/uploads/2023/08/team/harshal.png'
import ashwini from '../assets/images/wp-content/uploads/2023/08/team/ashwini.png'
import deepjyoti from '../assets/images/wp-content/uploads/2023/08/team/deepjoyti.png'
import mangesh from '../assets/images/wp-content/uploads/2023/08/team/mangesh.png'
import saurabh from '../assets/images/wp-content/uploads/2023/08/team/saurabh kalal.jpg'
import b1 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/birthday/birthday (1).jpg'
import b2 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/birthday/birthday (6).jpg'
import b3 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/birthday/birthday (2).jpg'
import b4 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/birthday/birthday (9).jpg'
import b5 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/birthday/birthday (3).jpg'
import b6 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/birthday/birthday (4).jpg'
import d1 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/diwali/diwali (1).jpg'
import d2 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/diwali/diwali (2).jpg'
import d3 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/diwali/diwali (3).jpg'
import d4 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/diwali/diwali (4).jpg'
import d5 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/diwali/diwali (5).jpg'
import d6 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/diwali/diwali.jpg'
import d7 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/diwali/diwalI (6).png'
import d8 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/diwali/diwali 7.png'
import g1 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/ganpati/ganpati (1).png'
import g2 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/ganpati/ganpati (2).png'
import g3 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/ganpati/ganpati (3).png'
import g4 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/ganpati/ganpati (4).png'
import g5 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/ganpati/ganpati (5).png'
import g6 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/ganpati/ganpati 6.png'
import n1 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/navratri/navratri (1).png'
import n2 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/navratri/navratri (2).png'
import n3 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/navratri/navratri (3).png'
import n4 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/navratri/navratri (5).png'
import n5 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/navratri/navratri (6).png'
import n6 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/navratri/navratri (7).png'
import n7 from '../assets/images/wp-content/uploads/2023/08/fun @ sumago/navratri/navratri 9.png'
import a1 from '../assets/images/wp-content/uploads/2023/08/apperication/Frame 15 (6).jpg'
import a2 from '../assets/images/wp-content/uploads/2023/08/apperication/Frame 15.jpg'
import a3 from '../assets/images/wp-content/uploads/2023/08/apperication/Frame 15 (8).jpg'
import a4 from '../assets/images/wp-content/uploads/2023/08/apperication/Frame 15 (7).jpg'
import a5 from '../assets/images/wp-content/uploads/2023/08/apperication/Frame 15 (2).jpg'
import a6 from '../assets/images/wp-content/uploads/2023/08/apperication/poo.jpg'
import a7 from '../assets/images/wp-content/uploads/2023/08/apperication/Frame 15 (5).jpg'
import a8 from '../assets/images/wp-content/uploads/2023/08/apperication/Frame 15 (4).jpg'
import a9 from '../assets/images/wp-content/uploads/2023/08/apperication/Frame 15 (3).jpg'
import shape41 from '../assets/images/wp-content/uploads/2023/08/shape-41.png'
import aboutUs from '../assets/images/wp-content/uploads/2023/08/ABOUT US (5) (1).jpg'
import ct from '../assets/images/wp-content/uploads/2023/08/corporate traning.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import '../assets/css/AboutUs.css'

const AboutUs = () => {
    const anchorStyle = {
        a: {
            textDecoration: 'none',
        },
    };

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);



    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedImage(null);
    };
    const [team, setTeamData] = useState([]);
    const [mission1, setmission] = useState([]);
    const [visionData, setVisionData] = useState(null);
    const [misionData, setMisionData] = useState(null);
    const [appreciation, setAppreciation] = useState([]);
    const [activeTab, setActiveTab] = useState('All Categories'); // Initial active tab state
    const [lifeCategoryData, setLifeCategoryData] = useState([]);
    const [imgData, setImgData] = useState([]);

    useEffect(() => {
        axios.get("/aboutmission/find")
            .then(response => {
                setMisionData(response.data[0]);
            })
            .catch((err) => console.log("err", err));

        axios.get("aboutvission/getAllaboutvisionRecord")
            .then(response => {
                setVisionData(response.data[0]);
            })
            .catch((err) => console.log("err", err));

        axios.get("/team/getteam")
            .then((result) => setTeamData(result.data))
            .catch((err) => console.log("err", err));

        axios.get("/appreciation/getAppreciation")
            .then((result) => setAppreciation(result.data))
            .catch((err) => console.log("err", err));

        axios.get("/culture_category/getCultureCategoryRecord")
            .then((result) => setImgData(result.data))
            .catch((err) => console.log("err", err));

        // Load initial data for "All Categories"
        axios.get("/culture_category_details/getallCultureDetailsRecord")
            .then((response) => setLifeCategoryData(response.data))
            .catch((error) => console.log("error", error));
    }, []);

    const handleTabClick = (category) => {
        setActiveTab(category);
        if (category === "All Categories") {
            axios.get("/culture_category_details/getallCultureDetailsRecord")
                .then((response) => setLifeCategoryData(response.data))
                .catch((error) => console.log("error", error));
        } else {
            axios.get("/culture_category_details/getallCultureDetailsRecord", {
                params: { category }
            })
                .then((response) => setLifeCategoryData(response.data))
                .catch((error) => console.log("error", error));
        }

    };
    return (
        <>
            <div className="aboutus" style={anchorStyle}>
                <section className="desktopcorevalue">
                    <figure class="image"><a href="/about"><img src={value1} alt="Awesome" /></a></figure>

                    <div class="pattern-layer"
                        style={{ backgroundImage: `url(${value2})` }}></div>
                </section>

                <section className='tabAdjusment'>
                    <div className="container-fluid mobilecorevalue">
                        <div className="two-column  d-flex justify-content-center">
                            <figure className="image"><img src={value2} alt="Awesome" /></figure>
                        </div>
                    </div>
                </section>
                <Container fluid>
                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-deb1ecb elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="deb1ecb" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-84f6fd6"
                                data-id="84f6fd6" data-element_type="column">
                                <div className="vision-mission-container">
                                    <img decoding="async"
                                        src={visionData ? visionData.img : mission}

                                        alt="Awesome Image" />
                                </div>
                            </div>
                            <div className="elementor-column elementor-col-50 elementor-top-column mt-3 elementor-element elementor-element-620926c"
                                data-id="620926c" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div className="elementor-element elementor-element-d1bbd12  elementor-widget elementor-widget-printpark_hero_title"
                                        data-id="d1bbd12" data-element_type="widget"
                                        data-widget_type="printpark_hero_title.default">
                                        <div className="elementor-widget-container">

                                            <div className="sec-title">
                                                <h6 className="te-subtitle">Our</h6>
                                                <h2 className="te-title printpark-size-default">Vision</h2>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-989d152 elementor-widget elementor-widget-printpark_hero_title"
                                        data-id="989d152" data-element_type="widget"
                                        data-widget_type="printpark_hero_title.default">
                                        <div className="elementor-widget-container">

                                            <div className="sec-title">
                                                <div className="te-subtitle"></div>
                                                <div className="te-title"></div>
                                                <p id="viscont">{visionData ? visionData.title : ''}</p>

                                                {/* <p id="viscont">"We aspire to be the global sourcing choice of the global market and revolutionize the way service processes function. Our goal is to reach out to common people across the globe and make Information Technology a tool for the "Masses", as well as the "Classes". We strive to create innovative IT solutions and provide IT-enabled services to enthrall customers worldwide and build relationships based on Trust, Values, and Professionalism."</p> */}
                                            </div>

                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-946a8bd elementor-widget elementor-widget-printpark_author_box"
                                        data-id="946a8bd" data-element_type="widget"
                                        data-widget_type="printpark_author_box.default">
                                        <div className="elementor-widget-container">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-deb1ecb elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="deb1ecb" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-column order-md-2 elementor-col-50 elementor-top-column elementor-element elementor-element-84f6fd6"
                                data-id="84f6fd6" data-element_type="column">
                                <div className="vision-mission-container">
                                    <img decoding="async"
                                        src={misionData ? misionData.img : ''}
                                        alt="Awesome Image" />
                                </div>
                            </div>
                            <div className="elementor-column order-md-1 elementor-col-50 elementor-top-column elementor-element elementor-element-620926c"
                                data-id="620926c" data-element_type="column">
                                <div className="elementor-widget-wrap  elementor-element-populated">
                                    <div className="elementor-element elementor-element-d1bbd12 elementor-widget elementor-widget-printpark_hero_title"
                                        data-id="d1bbd12" data-element_type="widget"
                                        data-widget_type="printpark_hero_title.default">
                                        <div className="elementor-widget-container">

                                            <div className="sec-title">
                                                <h6 className="te-subtitle">Our</h6>
                                                <h2 className="te-title printpark-size-default"> Mission</h2>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-989d152 elementor-widget elementor-widget-printpark_hero_title"
                                        data-id="989d152" data-element_type="widget"
                                        data-widget_type="printpark_hero_title.default">
                                        <div className="elementor-widget-container">

                                            <div className="sec-title">
                                                <div className="te-subtitle"></div>
                                                <div className="te-title"></div>
                                                <p id="viscont">{misionData ? misionData.title : ''}</p>
                                                {/* <p id="viscont">"At Sumago Infotech, we strive with technology to provide the most effective and affordable services that fulfill our customers' needs and budgets. We provide customized websites and software solutions that suit our customers' company objectives. We always involve our customers in the entire process, starting from design right up to deployment, so that your ideas can be incorporated into our work."</p> */}
                                            </div>

                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-946a8bd elementor-widget elementor-widget-printpark_author_box"
                                        data-id="946a8bd" data-element_type="widget"
                                        data-widget_type="printpark_author_box.default">
                                        <div className="elementor-widget-container">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-ff6bc36 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="ff6bc36" data-element_type="section"
                        data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                        <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a69974f"
                                data-id="a69974f" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <section
                                        className="elementor-section elementor-inner-section elementor-element elementor-element-7f76a13 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="7f76a13" data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-ffd114b"
                                                data-id="ffd114b" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-246dfbb elementor-widget elementor-widget-printpark_hero_title"
                                                        data-id="246dfbb" data-element_type="widget"
                                                        data-widget_type="printpark_hero_title.default">
                                                        <div className="elementor-widget-container">

                                                            <div className="sec-title">
                                                                <h6 className="te-subtitle">Team members</h6>
                                                                <h2 className="te-title printpark-size-default">We Make Great
                                                                    Impressions</h2>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section
                                        className="elementor-section elementor-inner-section elementor-element elementor-element-fca3aaf elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="fca3aaf" data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3b9d0c9"
                                                data-id="3b9d0c9" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-422849d elementor-widget elementor-widget-printpark_team_grid"
                                                        data-id="422849d" data-element_type="widget"
                                                        data-settings="{&quot;team_box_space&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;team_box_space_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;team_box_space_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;team_box_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;team_box_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;team_box_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;icon_box_space&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;icon_box_space_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;icon_box_space_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;icon_box_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;icon_box_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;icon_box_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true}}"
                                                        data-widget_type="printpark_team_grid.default">
                                                        <div className="elementor-widget-container">

                                                            <section className="team-section centred p-0 m-0">
                                                                <div className="row clearfix">
                                                                    {
                                                                        team.map((a) => {
                                                                            return (

                                                                                <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                                                                    <div className="team-block-two">
                                                                                        <div className="inner-box te-team">
                                                                                            <figure className="image-box"><img fetchpriority="high"
                                                                                                decoding="async" width="358" height="440"
                                                                                                src={a.img}
                                                                                                className="attachment-printpark_370x440 size-printpark_370x440 wp-post-image"
                                                                                                alt="" /></figure>
                                                                                            <div className="text-box">
                                                                                                <h3 className="te-title">{a.name}</h3>
                                                                                            </div>
                                                                                            <div className="overlay-content">
                                                                                                <h3 className="te-title"><a>{a.name}</a></h3>
                                                                                                <span
                                                                                                    className="designation te-designation">{a.designation}</span>

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }





                                                                </div>
                                                            </section>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section
                                        className="elementor-section elementor-inner-section elementor-element elementor-element-63236de elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="63236de" data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-1e9b03a"
                                                data-id="1e9b03a" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-740c76a elementor-widget elementor-widget-printpark_button"
                                                        data-id="740c76a" data-element_type="widget"
                                                        data-settings="{&quot;btn_margin&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_margin_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_margin_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true}}"
                                                        data-widget_type="printpark_button.default">
                                                        <div className="elementor-widget-container">




                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="elementor-section elementor-top-section elementor-element elementor-element-a466899 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a466899" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a8d0954" data-id="a8d0954" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div className="elementor-element elementor-element-6a9fb82 elementor-widget elementor-widget-printpark_hero_title" data-id="6a9fb82" data-element_type="widget" data-widget_type="printpark_hero_title.default">
                                        <div className="elementor-widget-container">
                                            <div className="sec-title">
                                                <h6 className="te-subtitle">Fun at Sumago</h6>
                                                <h2 className="te-title printpark-size-default">Company Culture</h2>
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

              
                    {/* <section className="elementor-section elementor-top-section elementor-element elementor-element-1310cac elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1310cac" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2e2a809" data-id="2e2a809" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div className="elementor-widget-container">
                                        <section className="project-section p-0 m-0">
                                            <div className="sortable-masonry">
                                                <div className="filters-box">
                                                    <div className="filters">
                                                        <ul className="filter-tabs filter-btns clearfix">
                                                            {
                                                                <li
                                                                    className={activeCategory === 'all' ? 'active filter' : 'filter'}
                                                                    onClick={() => setActiveCategory('all')}
                                                                    data-role="button"
                                                                    data-filter=".all"
                                                                >
                                                                    All Categories
                                                                </li>
                                                            }
                                                            <li
                                                                className={activeCategory === 'all' ? 'active filter' : 'filter'}
                                                                onClick={() => setActiveCategory('all')}
                                                                data-role="button"
                                                                data-filter=".all"
                                                            >
                                                                All Categories
                                                            </li>
                                                            <li
                                                                className={activeCategory === 'garment-printing' ? 'active filter' : 'filter'}
                                                                onClick={() => setActiveCategory('garment-printing')}
                                                                data-role="button"
                                                                data-filter=".garment-printing"
                                                            >
                                                                Birthday
                                                            </li>
                                                            <li
                                                                className={activeCategory === 'litho_printing' ? 'active filter' : 'filter'}
                                                                onClick={() => setActiveCategory('litho_printing')}
                                                                data-role="button"
                                                                data-filter=".litho_printing"
                                                            >
                                                                Diwali
                                                            </li>
                                                            <li
                                                                className={activeCategory === 'Ganpati' ? 'active filter' : 'filter'}
                                                                onClick={() => setActiveCategory('Ganpati')}
                                                                data-role="button"
                                                                data-filter=".Ganpati"
                                                            >
                                                                Ganpati
                                                            </li>
                                                            <li
                                                                className={activeCategory === 'Navratri' ? 'active filter' : 'filter'}
                                                                onClick={() => setActiveCategory('Navratri')}
                                                                data-role="button"
                                                                data-filter=".Navratri"
                                                            >
                                                                Navratri
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="items-container row clearfix">
                                                    {filteredImages.map((image, index) => (
                                                        <div
                                                            key={index}
                                                            className={`col-lg-4 col-md-6 col-sm-12 masonry-item small-column all ${image.category}`}
                                                        >
                                                            <div className="project-block-one">
                                                                <div className="inner-box bn-project-box">
                                                                    <figure className="image-box">
                                                                        <img
                                                                            loading="lazy"
                                                                            decoding="async"
                                                                            width="370"
                                                                            height="auto"
                                                                            src={image.src}
                                                                            className="attachment-printpark_370x270 size-printpark_370x270 wp-post-image"
                                                                            alt=""
                                                                        />
                                                                    </figure>
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
                        </div >
                    </section > */}
                    <div data-elementor-type="wp-page" data-elementor-id="19" className="elementor elementor-19">
                        <section className="elementor-section elementor-top-section elementor-element elementor-element-2782308 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2782308" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-default">
                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e39c265" data-id="e39c265" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div className="elementor-element elementor-element-72f41f3 elementor-widget elementor-widget-printpark_blog_grid" data-id="72f41f3" data-element_type="widget" data-settings="{&quot;icon_box_space&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;icon_box_space_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;icon_box_space_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;icon_box_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;icon_box_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;icon_box_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true}}" data-widget_type="printpark_blog_grid.default">
                                            <div className="elementor-widget-container">


                                                <section
                                                    className="elementor-section elementor-top-section elementor-element elementor-element-a466899 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                    data-id="a466899" data-element_type="section">
                                                    <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a8d0954"
                                                            data-id="a8d0954" data-element_type="column">
                                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                                <div className="elementor-element elementor-element-6a9fb82 elementor-widget elementor-widget-printpark_hero_title"
                                                                    data-id="6a9fb82" data-element_type="widget"
                                                                    data-widget_type="printpark_hero_title.default">
                                                                    <div className="elementor-widget-container">

                                                                        <div className="sec-title">
                                                                            <h6 className="te-subtitle">Contributors to our Success !</h6>
                                                                            <h2 className="te-title printpark-size-default">Appreciations </h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                                <section className="news-section blog-grid">
                                                    <div className="row clearfix">
                                                        <p className="fs-5">We strongly believe in the recognition and appreciation of the people who put efforts behind the soaring success of Sumago Infotech! Their hard work and dedication deserve to be acknowledged and celebrated. At Sumago Infotech, we value our team members and strive to create a culture of gratitude and recognition.</p>


                                                        {
                                                            appreciation.map((a) => {
                                                                return (
                                                                    <>
                                                                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                                                            <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                                                                <div className="inner-box te-blog">
                                                                                    <div className="image-box">
                                                                                        <figure className="image">
                                                                                            <Link to="">
                                                                                                <img fetchpriority="high" decoding="async" width="350" height="240"
                                                                                                    src={a.img}
                                                                                                    className="attachment-printpark_350x270 size-printpark_350x270 wp-post-image" alt="" />
                                                                                            </Link></figure>
                                                                                        <div className="image-content">
                                                                                            <div className="post-info text-center">
                                                                                                <h6 className="te-category ">
                                                                                                    <Link to="" rel="category tag">{a.name} </Link>
                                                                                                </h6>  <span className="post-date te-meta">
                                                                                                    <i className="flaticon-asterisks"></i>{a.designation}</span>
                                                                                            </div>
                                                                                            <div className="share-box">

                                                                                            </div>
                                                                                        </div>


                                                                                    </div>
                                                                                </div>
                                                                            </div>


                                                                        </div>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </div>

                                                </section>
                                                <section
                                                    className="elementor-section elementor-top-section elementor-element elementor-element-a466899 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                    data-id="a466899" data-element_type="section">
                                                    <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-column elementor-col-60 elementor-top-column elementor-element elementor-element-a8d0954"
                                                            data-id="a8d0954" data-element_type="column">
                                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                                <div className="elementor-element elementor-element-6a9fb82 elementor-widget elementor-widget-printpark_hero_title"
                                                                    data-id="6a9fb82" data-element_type="widget"
                                                                    data-widget_type="printpark_hero_title.default">
                                                                    <div className="elementor-widget-container">

                                                                        <div className="sec-title">
                                                                            <h2 className="te-title printpark-size-default">Corporate Training 2023 </h2>

                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </section>
                                                <section className="project-details">
                                                    <div className="auto-container">
                                                        <div className="upper-text">
                                                            <h2></h2>
                                                        </div>
                                                        <p>There are so many factors that affect our performance on a day-to-day basis to which we might not necessarily pay heed to. These factors, if balanced properly, would result in optimum energy utilization and working capabilities. To improve this potential and have better time management strategies, a 2-day Corporate Training session was organized for the Sumago Team from Nashik and Pune.

                                                        </p>
                                                        <div className="two-column">
                                                            <div className="row align-items-center">
                                                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                                                    <div className="image-box">
                                                                        <div className="image-shape">
                                                                            <div className="shape-1"></div>
                                                                            <div className="shape-2">
                                                                                <img decoding="async" src={shape41} alt="" width="149" height="120" className="alignnone size-full wp-image-360" /></div>
                                                                        </div>
                                                                        <figure className="image"><img fetchpriority="high" decoding="async" src={aboutUs} alt="" width="539" height="393" className="alignnone size-medium wp-image-359" /></figure>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                                                    <div className="content-box">

                                                                        <p>It's crucial for a person to constantly adapt and improve both at work and in other areas of their lives. It's also seemingly important for them to have the proper work-life balance and, most importantly, to understand how to keep it.
                                                                            <br />
                                                                            <br /> The training session aimed to provide the team with practical tools and techniques to effectively manage their workload and prioritize tasks. Additionally, it focused on stress management and the importance of maintaining a healthy work-life balance to enhance overall productivity and well-being.
                                                                            <br /> <br />
                                                                            This training session was specially curated by company CGO, Sudhir Gorade to make sure that each and every person in the company benefits from it and has better strategies at hand to use for effective work and time management.
                                                                        </p>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="project-image">
                                                            <figure className="image mb-lg-5"><div className="lightbox-image" data-fancybox="gallery"><img src={ct} alt="Awesome Image" /></div></figure>
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
                </Container >
            </div >
        </>
    )
}

export default AboutUs
