import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/WhySumago.css';
import shape5 from '../assets/images/wp-content/themes/printpark/assets/images/shape/shape-5.png';
import shape6 from '../assets/images/wp-content/themes/printpark/assets/images/shape/shape-6.png';

const WhySumago = () => {
    const [reasons, setReasons] = useState([]);

    useEffect(() => {
        axios.get('/whysumago/getwhysumago')
            .then((response) => {
                console.log('API response:', response.data); // Debug: Log the API response
                setReasons(response.data);
            })
            .catch((error) => {
                console.error('Error fetching reasons:', error);
            });
    }, []);

    return (
        <div className='whysumago-section container-fluid'>
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-79a7c18 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="79a7c18" data-element_type="section"
                data-settings='{"background_background":"gradient"}'>
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cedd9f4"
                        data-id="cedd9f4" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-61736ab elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="61736ab" data-element_type="section">
                                <div className="elementor-container elementor-column-gap-default">
                                    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-21e6266"
                                        data-id="21e6266" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div className="elementor-element elementor-element-6a584a3 elementor-widget elementor-widget-printpark_hero_title"
                                                data-id="6a584a3" data-element_type="widget"
                                                data-widget_type="printpark_hero_title.default">
                                                <div className="elementor-widget-container">
                                                    <div className="sec-title">
                                                        <h2 className="te-title printpark-size-default">WHY SUMAGO ?</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-a528319 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="a528319" data-element_type="section">
                                <div className="elementor-container elementor-column-gap-default">
                                    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b188ac1"
                                        data-id="b188ac1" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div className="elementor-element elementor-element-4affbfb elementor-widget elementor-widget-printpark_service_grid"
                                                data-id="4affbfb" data-element_type="widget"
                                                data-widget_type="printpark_service_grid.default">
                                                <div className="elementor-widget-container">
                                                    <section className="categories-section centred te-service p-0 m-0">
                                                        <div className="row clearfix justify-content-evenly ">
                                                            {reasons.map((reason, index) => (
                                                                <div key={index} className="col-lg-3 col-md-6 col-sm-12 categories-block">
                                                                    <div className="categories-block-one wow fadeInUp animated"
                                                                        data-wow-delay="00ms" data-wow-duration="1500ms">
                                                                        <div className="inner-box te-service-block">
                                                                            <div className="shape" style={{ backgroundImage: `url(${shape5})` }}></div>
                                                                            <div className="overlay-shape" style={{ backgroundImage: `url(${shape6})` }}></div>
                                                                            <div className="cardText">
                                                                                <h3><a className="ser-title">{reason.title}</a></h3>
                                                                                <p className="ser-text">{reason.text}</p>
                                                                            </div>
                                                                            <figure className="image-box"><img width="220" height="220"
                                                                                src={reason.img}
                                                                                className="attachment-printpark_220x220 size-printpark_220x220 wp-post-image"
                                                                                alt="" /></figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </section>
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
    );
};

export default WhySumago;
