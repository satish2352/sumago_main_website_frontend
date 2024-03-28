import React from 'react'
import '../assets/css/WhySumago.css'
import img1 from '../assets/images/wp-content/uploads/2023/08/im/14.png'
import img2 from '../assets/images/wp-content/uploads/2023/08/im/98.png'
import img3 from '../assets/images/wp-content/uploads/2023/08/im/circle.png'
import img4 from '../assets/images/wp-content/uploads/2023/08/im/766.png'
import shape5 from '../assets/images/wp-content/themes/printpark/assets/images/shape/shape-5.png'
import shape6 from '../assets/images/wp-content/themes/printpark/assets/images/shape/shape-6.png'

const WhySumago = () => {
    return (
        <div className='whysumago-section container-fluid'>
            <section
                class="elementor-section elementor-top-section elementor-element elementor-element-79a7c18 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="79a7c18" data-element_type="section"
                data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                <div class="elementor-container elementor-column-gap-default">
                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cedd9f4"
                        data-id="cedd9f4" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <section
                                class="elementor-section elementor-inner-section elementor-element elementor-element-61736ab elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="61736ab" data-element_type="section">
                                <div class="elementor-container elementor-column-gap-default">
                                    <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-21e6266"
                                        data-id="21e6266" data-element_type="column">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-6a584a3 elementor-widget elementor-widget-printpark_hero_title"
                                                data-id="6a584a3" data-element_type="widget"
                                                data-widget_type="printpark_hero_title.default">
                                                <div class="elementor-widget-container">

                                                    <div class="sec-title">
                                                        {/* <h6 class="te-subtitle">Categories</h6> */}
                                                        <h2 class="te-title printpark-size-default">
                                                            WHY SUMAGO ?</h2>
                                                        {/* <p>There are many variations of passages of lorem but the
                                                            majority.</p> */}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                class="elementor-section elementor-inner-section elementor-element elementor-element-a528319 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="a528319" data-element_type="section">
                                <div class="elementor-container elementor-column-gap-default">
                                    <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b188ac1"
                                        data-id="b188ac1" data-element_type="column">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-4affbfb elementor-widget elementor-widget-printpark_service_grid"
                                                data-id="4affbfb" data-element_type="widget"
                                                data-widget_type="printpark_service_grid.default">
                                                <div class="elementor-widget-container">


                                                    {/* categories-section */}
                                                    <section class="categories-section centred te-service p-0 m-0">
                                                        <div class="row clearfix justify-content-evenly ">


                                                            <div class="col-lg-3 col-md-6 col-sm-12 categories-block">
                                                                <div class="categories-block-one wow fadeInUp animated"
                                                                    data-wow-delay="00ms" data-wow-duration="1500ms">
                                                                    <div class="inner-box te-service-block">
                                                                        <div class="shape" style={{ backgroundImage: `url(${shape5})` }}>
                                                                        </div>
                                                                        <div className="overlay-shape" style={{ backgroundImage: `url(${shape6})` }}>
                                                                        </div>
                                                                        <h3>
                                                                            <a class="ser-title"
                                                                            >Experience</a>
                                                                        </h3>
                                                                        <p class="ser-text">With years of experience in the
                                                                            industry, we've successfully delivered countless
                                                                            projects across various domains.</p>
                                                                        <figure class="image-box"><img width="220" height="220"
                                                                            src={img1}
                                                                            class="attachment-printpark_220x220 size-printpark_220x220 wp-post-image"
                                                                            alt="" /></figure>
                                                                        {/* <div class="link-box">
                                                                            <a class="te-btn"
                                                                                href="./service/banners/index.php">
                                                                                Yes Or NO
                                                                            </a>
                                                                        </div> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-3 col-md-6 col-sm-12 categories-block">
                                                                <div class="categories-block-one wow fadeInUp animated"
                                                                    data-wow-delay="00ms" data-wow-duration="1500ms">
                                                                    <div class="inner-box te-service-block">
                                                                        <div class="shape"
                                                                            style={{ backgroundImage: `url(${shape5})` }}>
                                                                        </div>
                                                                        <div class="overlay-shape"
                                                                            style={{ backgroundImage: `url(${shape6})` }}>
                                                                        </div>
                                                                        <h3><a class="ser-title"
                                                                        >Dedicated
                                                                            <br />
                                                                            Team</a>
                                                                        </h3>
                                                                        <p class="ser-text">A team of passionate and skilled
                                                                            professionals committed to providing top-notch IT
                                                                            solutions.</p>
                                                                        <figure class="image-box"><img width="220" height="220"
                                                                            src={img2}
                                                                            class="attachment-printpark_220x220 size-printpark_220x220 wp-post-image"
                                                                            alt="" /></figure>
                                                                        {/* <div class="link-box">
                                                                            <a class="te-btn"
                                                                                href="./service/booklets/index.php">
                                                                                Yes Or NO
                                                                            </a>
                                                                        </div> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-3 col-md-6 col-sm-12 categories-block">
                                                                <div class="categories-block-one wow fadeInUp animated"
                                                                    data-wow-delay="00ms" data-wow-duration="1500ms">
                                                                    <div class="inner-box te-service-block">
                                                                        <div class="shape"
                                                                            style={{ backgroundImage: `url(${shape5})` }}>
                                                                        </div>
                                                                        <div class="overlay-shape"
                                                                            style={{ backgroundImage: `url(${shape6})` }}>
                                                                        </div>
                                                                        <h3><a class="ser-title"
                                                                        >Client-Centric
                                                                            Approach</a></h3>
                                                                        <p class="ser-text">Your satisfaction is our priority.
                                                                            We work closely with you to understand your goals &
                                                                            challenges. </p>
                                                                        <figure class="image-box"><img width="220" height="220"
                                                                            src={img3}
                                                                            class="attachment-printpark_220x220 size-printpark_220x220 wp-post-image"
                                                                            alt="" /></figure>
                                                                        {/* <div class="link-box">
                                                                            <a class="te-btn"
                                                                                href="./service/business-cards/index.php">
                                                                                Yes Or NO
                                                                            </a>
                                                                        </div> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-3 col-md-6 col-sm-12 categories-block">
                                                                <div class="categories-block-one wow fadeInUp animated"
                                                                    data-wow-delay="00ms" data-wow-duration="1500ms">
                                                                    <div class="inner-box te-service-block">
                                                                        <div class="shape"
                                                                            style={{ backgroundImage: `url(${shape5})` }}>
                                                                        </div>
                                                                        <div class="overlay-shape"
                                                                            style={{ backgroundImage: `url(${shape6})` }}>
                                                                        </div>
                                                                        <h3><a class="ser-title"
                                                                        >Affordable
                                                                            Solutions</a>
                                                                        </h3>
                                                                        <p class="ser-text"> Cost-effective solutions without
                                                                            compromising on quality & competitive pricing make
                                                                            our services accessible to businesses of all sizes.
                                                                        </p>
                                                                        <figure class="image-box"><img width="220" height="220"
                                                                            src={img4}
                                                                            class="attachment-printpark_220x220 size-printpark_220x220 wp-post-image"
                                                                            alt="" /></figure>
                                                                        {/* <div class="link-box">
                                                                            <a class="te-btn"
                                                                                href="./service/calendars/index.php">
                                                                                Yes Or NO
                                                                            </a>
                                                                        </div> */}
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </section>
                                                    {/* categories-section end */}


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

export default WhySumago
