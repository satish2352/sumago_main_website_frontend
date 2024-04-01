import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../assets/css/Numbers.css'
import { Col, Container, Row } from 'react-bootstrap'
import client from '../assets/images/wp-content/themes/printpark/assets/images/shape/client.png'
import award from '../assets/images/wp-content/themes/printpark/assets/images/shape/AWRAD.png'

const Numbers = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("/clientCount/create").then((result) => {
            console.log("result", result);
            setData(result.data)
        }).catch((err) => {
            console.log("err", err);
        });
    }, [])

    return (
        <div className="numbers-section container-fluid">
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-e03b2af elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="e03b2af" data-element_type="section"
                data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3aec9b9"
                        data-id="3aec9b9" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-9642a43 elementor-widget elementor-widget-printpark_number_box"
                                data-id="9642a43" data-element_type="widget"
                                data-settings="{&quot;btn_margin&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_margin_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_margin_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;btn_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true}}"
                                data-widget_type="printpark_number_box.default">
                                <div className="elementor-widget-container">

                                    <section className="funfact-section p-0 m-0">
                                        <div className="content-column">
                                            <div className="content-box cta-section">
                                                <div className="sec-title light">
                                                    <h6 className="te-subtitle">Numbers Speak! </h6>
                                                    <h2 className="te-title">Our Valuable Clients</h2>
                                                </div>
                                                <span className="big-text te-heading">numbers</span>
                                                <div className="text-box">
                                                    {/* <p className="te-text">There are many variations of passages of lorem
                                                ipsum available.</p> */}
                                                    <a className="theme-btn btn-one text-decoration-none">Start Your
                                                        Project</a>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6f48178"
                        data-id="6f48178" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-77d3fd1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="77d3fd1" data-element_type="section">
                                <div className="elementor-container elementor-column-gap-default">
                                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-abee258"
                                        data-id="abee258" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            {/* {
                                                data.map((item, id) => {
                                                    return (
                                                        <div className="elementor-element elementor-element-b21af8c elementor-widget elementor-widget-printpark_funfact_box"
                                                            data-id="b21af8c" data-element_type="widget"
                                                            data-widget_type="printpark_funfact_box.default">
                                                            <div className="elementor-widget-container">

                                                                <div className="funfact-block-one">
                                                                    <div className="inner-box town-funfact-section">
                                                                        <div className="count-outer count-box">
                                                                            <span className="count-text te-count" data-speed="1500"
                                                                                data-stop="780" style={{ color: '#0c0c0c' }}>{item.count}</span>
                                                                        </div>
                                                                        <p className="te-text mt-1">{item.title}</p>
                                                                        <div className="icon-box te-icon">
                                                                            <img src={item.icon} width="40" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            } */}
                                            <div className="elementor-element elementor-element-b21af8c elementor-widget elementor-widget-printpark_funfact_box"
                                                data-id="b21af8c" data-element_type="widget"
                                                data-widget_type="printpark_funfact_box.default">
                                                <div className="elementor-widget-container">

                                                    <div className="funfact-block-one">
                                                        <div className="inner-box town-funfact-section">
                                                            <div className="count-outer count-box">
                                                                <span className="count-text te-count" data-speed="1500"
                                                                    data-stop="780" style={{ color: '#0c0c0c' }}>780</span>
                                                            </div>
                                                            <p className="te-text mt-1">Satisfied Clients</p>
                                                            <div className="icon-box te-icon">
                                                                <img src={client} width="40" />
                                                                {/*<i className="flaticon-poster"></i>*/}
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="elementor-element elementor-element-c89885a elementor-widget elementor-widget-printpark_funfact_box"
                                                data-id="c89885a" data-element_type="widget"
                                                data-widget_type="printpark_funfact_box.default">
                                                <div className="elementor-widget-container">

                                                    <div className="funfact-block-one">
                                                        <div className="inner-box town-funfact-section">
                                                            <div className="count-outer count-box">
                                                                <span className="count-text te-count" data-speed="1500"
                                                                    data-stop="1850" style={{ color: '#F54C4C' }}>1850</span>
                                                            </div>
                                                            <p className="te-text mt-1">Projects Done</p>
                                                            <div className="icon-box te-icon">
                                                                <i className="flaticon-user"></i>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2d16222"
                                        data-id="2d16222" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div className="elementor-element elementor-element-c26c5c0 elementor-widget elementor-widget-printpark_funfact_box"
                                                data-id="c26c5c0" data-element_type="widget"
                                                data-widget_type="printpark_funfact_box.default">
                                                <div className="elementor-widget-container">

                                                    <div className="funfact-block-one customNumberTileStyling">
                                                        <div className="inner-box town-funfact-section">
                                                            <div className="count-outer count-box">
                                                                <span className="count-text te-count" data-speed="1500"
                                                                    data-stop="700">700</span><span
                                                                        className="symble te-symble"></span>
                                                            </div>
                                                            <p className="te-text">Cups of Coffee</p>
                                                            <div className="icon-box te-icon">
                                                                {/*<img src="./wp-content/themes/printpark/assets/images/shape/AWRAD.png" width="30">*/}
                                                                <i className="flaticon-cup-printing"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="elementor-element elementor-element-c26c5c0 elementor-widget elementor-widget-printpark_funfact_box funFactTabAdjustment75-1"
                                                data-id="c26c5c0" data-element_type="widget"
                                                data-widget_type="printpark_funfact_box.default">
                                                <div className="elementor-widget-container">

                                                    <div className="funfact-block-one customNumberTileStyling">
                                                        <div className="inner-box town-funfact-section">
                                                            <div className="count-outer count-box">
                                                                <span className="count-text te-count" data-speed="1500"
                                                                    data-stop="75">75</span><span
                                                                        className="symble te-symble"></span>
                                                            </div>
                                                            <p className="te-text">Awards Won</p>
                                                            <div className="icon-box te-icon">
                                                                <img src={award} width="30" />
                                                                {/*<i className="flaticon-user"></i>*/}
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2d16222 funFactTabAdjustment75-2"
                                        data-id="2d16222" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div className="elementor-element elementor-element-c26c5c0 elementor-widget elementor-widget-printpark_funfact_box"
                                                data-id="c26c5c0" data-element_type="widget"
                                                data-widget_type="printpark_funfact_box.default">
                                                <div className="elementor-widget-container">

                                                    <div className="funfact-block-one customNumberTileStyling">
                                                        <div className="inner-box town-funfact-section">
                                                            <div className="count-outer count-box">
                                                                <span className="count-text te-count" data-speed="1500"
                                                                    data-stop="75">75</span><span
                                                                        className="symble te-symble"></span>
                                                            </div>
                                                            <p className="te-text">Awards Won</p>
                                                            <div className="icon-box te-icon">
                                                                <img src={award} width="30" />
                                                                {/*<i className="flaticon-user"></i>*/}
                                                            </div>
                                                        </div>
                                                    </div>

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
        </div>
    )
}

export default Numbers
