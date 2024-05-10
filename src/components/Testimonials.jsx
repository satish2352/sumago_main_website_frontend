import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../assets/css/Testimonials.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from '../assets/images/wp-content/themes/printpark/assets/images/icons/quote-1.png'
import person1 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/1 MANASI A.png'
import person2 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/2 aniruddha  A.png'
import person3 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/20 pooja A.png'
import person4 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/19 chaitali A.png'
import person5 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/18 pratik A.png'
import person6 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/3 ASHWINI A.png'
import person7 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/16 chetana A.png'
import person8 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/15 bhagyashree A.png'
import person9 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/11 amit A.png'
import person10 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/12 ananad A.png'
import person11 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/9 sagar A.png'
import person12 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/8 siddhhi A.png'
import person13 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/7 sonali A.png'
import person14 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/6 aboli kapadnis A.png'
import person15 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/5 GANESH A.png'
import person16 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/4 VIREN A.png'
import person17 from '../assets/images/wp-content/uploads/2023/08/TESTIMONIALS/3 ASHWINI A.png'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick';


const Testimonials = () => {
    const slidedata = [
        {
            src: person1,
            designation: "Technical Specialist",
            name: "Aniruddha Navale",
            review: "You are doing great and I am proud that I have seen Sumago Infotech in its initail days and now a giant. More to come.&hellip;"


        },
        {
            src: person2,
            designation: "Technical Specialist",
            name: "Aniruddha Navale",
            review: "You are doing great and I am proud that I have seen Sumago Infotech in its initail days and now a giant. More to come.&hellip;"


        },
        {
            src: person3,
            designation: "Technical Specialist",
            name: "Aniruddha Navale",
            review: "You are doing great and I am proud that I have seen Sumago Infotech in its initail days and now a giant. More to come.&hellip;"


        },
        {
            src: person4,
            designation: "Technical Specialist",
            name: "Aniruddha Navale",
            review: "You are doing great and I am proud that I have seen Sumago Infotech in its initail days and now a giant. More to come.&hellip;"


        }
    ]

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("/testimonials/find").then((result) => {
            setData(result.data)
        }).catch((err) => {
            console.log("err", err);
        });
    }, [])

    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        // centerMode: true,
        autoplay: true,
        infinite: true,
        // centerPadding: "40px",
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        beforeChange: (current, next) => setCurrentSlide(next),
    };
    return (
        <div className="testimonial-section container-fluid">
            <Container>
                <Row>
                    <Col lg={5} md={5} sm={12}>
                        <div className="sec-title">
                            <h6 className="te-subtitle">Feedback</h6>
                            <h2 className="te-title printpark-size-default">Delighted to share Customer Reviews</h2>
                        </div>
                    </Col>
                    <Col lg={7} md={7} sm={12}>
                        <div className='slider-bg'>
                            <Slider {...settings}>
                                {data.map((item, id) => {
                                    return (
                                        <div className="testimonial-block-three">
                                            <div className="inner-box te-testimonial">
                                                <div className="quote-box"><img decoding="async"
                                                    src={quote}
                                                    alt="Awesome Image" /></div>
                                                <div className="rating-box">
                                                    <i class="bi bi-star-fill"></i><i
                                                        class="bi bi-star-fill"></i><i
                                                            class="bi bi-star-fill"></i><i
                                                                class="bi bi-star-fill"></i><i
                                                                    class="bi bi-star"></i>
                                                </div>
                                                <div className="author-box">
                                                    <figure className="author-thumb"><img loading="lazy"
                                                        decoding="async" width="50" height="50"
                                                        src={item.img}
                                                        className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                        alt="" /></figure>
                                                    <h3 className="te-title">{item.name}</h3>
                                                    <span className="designation te-designation">{item.designation}</span>
                                                </div>
                                                <p className="te-text" style={{ height: '8.7rem' }}>{item.review}&hellip;</p>
                                            </div>
                                        </div>
                                    )
                                })
                                }

                            </Slider>
                            <div className='testimonialSlideCount'>
                                <h1><span>{currentSlide + 1}</span>/ {data.length}</h1>
                            </div>
                        </div>
                    </Col >
                </Row >
            </Container >
        </div >
    )
}

export default Testimonials