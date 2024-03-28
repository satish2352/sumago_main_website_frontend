import React, { useState } from 'react'
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
                                                src={person1}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Manasi Waghchoure</h3>
                                            <span className="designation te-designation">Senior Software Engineer</span>
                                        </div>
                                        <p className="te-text" style={{ height: '8.7rem' }}>I have learned many thing from Sumago Infotech here worth experiencing.&hellip;</p>
                                    </div>
                                </div>
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
                                                            class="bi bi-star-fill"></i>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img loading="lazy"
                                                decoding="async" width="50" height="50"
                                                src={person2}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Aniruddha Navale</h3>
                                            <span className="designation te-designation">Devops Engineer</span>
                                        </div>
                                        <p className="te-text" style={{ height: '8.7rem' }}>You are doing great and I am proud that I have seen Sumago Infotech in its initail days and now a giant. More to come.&hellip;</p>
                                    </div>
                                </div>
                                <div className="testimonial-block-three">
                                    <div className="inner-box te-testimonial">
                                        <div className="quote-box"><img decoding="async"
                                            src={quote}
                                            alt="Awesome Image" /></div>
                                        <div className="rating-box">
                                            <i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i
                                                    class="bi bi-star-fill"></i><i
                                                        class="bi bi-star"></i><i
                                                            class="bi bi-star"></i>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img loading="lazy"
                                                decoding="async" width="50" height="50"
                                                src={person3}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Pooja Suryawanshi</h3>
                                            <span className="designation te-designation">Technical Specialist</span>
                                        </div>
                                        <p className="te-text" style={{ height: '8.7rem' }}>Gorade sir is the best teacher is my educational life, from whom I learned my college lessons, and I am gratefull for his guidance and best wishes for future success.</p>
                                    </div>
                                </div>
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
                                                src={person4}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Chaitali Mahajan</h3>
                                            <span className="designation te-designation">Software Developer</span>
                                        </div>
                                        <p className="te-text" style={{ height: '8.7rem' }}>One of the best organisation I've worked with, had amazing training experience.</p>
                                    </div>
                                </div>
                                <div className="testimonial-block-three">
                                    <div className="inner-box te-testimonial">
                                        <div className="quote-box"><img decoding="async"
                                            src={quote}
                                            alt="Awesome Image" /></div>
                                        <div className="rating-box">
                                            <i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i
                                                    class="bi bi-star-fill"></i><i
                                                        class="bi bi-star"></i><i
                                                            class="bi bi-star"></i>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img loading="lazy"
                                                decoding="async" width="50" height="50"
                                                src={person5}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Pratik Patil</h3>
                                            <span className="designation te-designation">Associate Manager - Performance Marketing</span>
                                        </div>
                                        <p className="te-text" style={{ height: '6.9rem' }}>Greate workplace and environment to work.</p>
                                    </div>
                                </div>
                                <div className="testimonial-block-three">
                                    <div className="inner-box te-testimonial">
                                        <div className="quote-box"><img decoding="async"
                                            src={quote}
                                            alt="Awesome Image" /></div>
                                        <div className="rating-box">
                                            <i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i
                                                    class="bi bi-star-fill"></i><i
                                                        class="bi bi-star"></i><i
                                                            class="bi bi-star"></i>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img loading="lazy"
                                                decoding="async" width="50" height="50"
                                                src={person6}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Kshitija Kumbhar</h3>
                                            <span className="designation te-designation">Digital Sales & Marketing Specialist</span>
                                        </div>
                                        <p className="te-text" style={{ height: '8.7rem' }}>The author completed their first online internship with Sumago Infotech, which was transformative and inspiring due to the company's rapid evolution and skilled professionals.</p>
                                    </div>
                                </div>
                                <div className="testimonial-block-three">
                                    <div className="inner-box te-testimonial">
                                        <div className="quote-box"><img decoding="async"
                                            src={quote}
                                            alt="Awesome Image" /></div>
                                        <div className="rating-box">
                                            <i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i
                                                    class="bi bi-star-fill"></i><i
                                                        class="bi bi-star"></i><i
                                                            class="bi bi-star"></i>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img loading="lazy"
                                                decoding="async" width="50" height="50"
                                                src={person7}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Chetana Padmane</h3>
                                            <span className="designation te-designation">Consultant</span>
                                        </div>
                                        <p className="te-text" style={{ height: '8.7rem' }}>Nice place to learn technology for freshers.</p>
                                    </div>
                                </div>
                                <div className="testimonial-block-three">
                                    <div className="inner-box te-testimonial">
                                        <div className="quote-box"><img decoding="async"
                                            src={quote}
                                            alt="Awesome Image" /></div>
                                        <div className="rating-box">
                                            <i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i
                                                    class="bi bi-star-fill"></i><i
                                                        class="bi bi-star"></i><i
                                                            class="bi bi-star"></i>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img loading="lazy"
                                                decoding="async" width="50" height="50"
                                                src={person8}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Bhagyashree Bhatiya</h3>
                                            <span className="designation te-designation">Junior Software Developer</span>
                                        </div>
                                        <p className="te-text" style={{ height: '8.7rem' }}>Great Organisation Willing to work with Sumago Infotech.</p>
                                    </div>
                                </div>
                                <div className="testimonial-block-three">
                                    <div className="inner-box te-testimonial">
                                        <div className="quote-box"><img decoding="async"
                                            src={quote}
                                            alt="Awesome Image" /></div>
                                        <div className="rating-box">
                                            <i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i
                                                    class="bi bi-star-fill"></i><i
                                                        class="bi bi-star"></i><i
                                                            class="bi bi-star"></i>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img loading="lazy"
                                                decoding="async" width="50" height="50"
                                                src={person9}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Amit Gujarathi</h3>
                                            <span className="designation te-designation">Senior Analyst</span>
                                        </div>
                                        <p className="te-text" style={{ height: '8.7rem' }}>This Organisation was good experience of me. Such help for growth the skills</p>
                                    </div>
                                </div>
                                <div className="testimonial-block-three">
                                    <div className="inner-box te-testimonial">
                                        <div className="quote-box"><img decoding="async"
                                            src={quote}
                                            alt="Awesome Image" /></div>
                                        <div className="rating-box">
                                            <i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i
                                                    class="bi bi-star-fill"></i><i
                                                        class="bi bi-star"></i><i
                                                            class="bi bi-star"></i>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img loading="lazy"
                                                decoding="async" width="50" height="50"
                                                src={person10}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Anand Shukla</h3>
                                            <span className="designation te-designation">Self Employed as Business Officer</span>
                                        </div>
                                        <p className="te-text" style={{ height: '8.7rem' }}>This was the last Software company I worked for & it was nice working here, enjoyed and worked with good staff and leaders in an pleasant atmosphere</p>
                                    </div>
                                </div>
                                <div className="testimonial-block-three">
                                    <div className="inner-box te-testimonial">
                                        <div className="quote-box"><img decoding="async"
                                            src={quote}
                                            alt="Awesome Image" /></div>
                                        <div className="rating-box">
                                            <i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i
                                                    class="bi bi-star-fill"></i><i
                                                        class="bi bi-star"></i><i
                                                            class="bi bi-star"></i>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img loading="lazy"
                                                decoding="async" width="50" height="50"
                                                src={person11}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Sagar Shirsath</h3>
                                            <span className="designation te-designation">Team Leader</span>
                                        </div>
                                        <p className="te-text" style={{ height: '8.7rem' }}>Sumago Infotech is a best place for learning that I ever seen</p>
                                    </div>
                                </div>
                                <div className="testimonial-block-three">
                                    <div className="inner-box te-testimonial">
                                        <div className="quote-box"><img decoding="async"
                                            src={quote}
                                            alt="Awesome Image" /></div>
                                        <div className="rating-box">
                                            <i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i
                                                    class="bi bi-star-fill"></i><i
                                                        class="bi bi-star"></i><i
                                                            class="bi bi-star"></i>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img loading="lazy"
                                                decoding="async" width="50" height="50"
                                                src={person12}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Siddhi Suryawanshi</h3>
                                            <span className="designation te-designation">Software Engineer</span>
                                        </div>
                                        <p className="te-text" style={{ height: '8.7rem' }}>Sumago Infotech company offers a positive work culture and is a good platform for freshers, with an inspiring team that motivates them to achieve their goals.</p>
                                    </div>
                                </div>
                                <div className="testimonial-block-three">
                                    <div className="inner-box te-testimonial">
                                        <div className="quote-box"><img decoding="async"
                                            src={quote}
                                            alt="Awesome Image" /></div>
                                        <div className="rating-box">
                                            <i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i
                                                    class="bi bi-star-fill"></i><i
                                                        class="bi bi-star"></i><i
                                                            class="bi bi-star"></i>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img loading="lazy"
                                                decoding="async" width="50" height="50"
                                                src={person13}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Sonali Lohakare</h3>
                                            <span className="designation te-designation">Quality Analyst</span>
                                        </div>
                                        <p className="te-text" style={{ height: '8.7rem' }}>It's a great organisation, now it's growing but I think as per market they providing less packages to employees as I felt</p>
                                    </div>
                                </div>
                                <div className="testimonial-block-three">
                                    <div className="inner-box te-testimonial">
                                        <div className="quote-box"><img decoding="async"
                                            src={quote}
                                            alt="Awesome Image" /></div>
                                        <div className="rating-box">
                                            <i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i
                                                    class="bi bi-star-fill"></i><i
                                                        class="bi bi-star"></i><i
                                                            class="bi bi-star"></i>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img loading="lazy"
                                                decoding="async" width="50" height="50"
                                                src={person14}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Aboli Kapadnis</h3>
                                            <span className="designation te-designation">Data Analyst</span>
                                        </div>
                                        <p className="te-text" style={{ height: '8.7rem' }}>Sumago is a place where challenges, work, and help are readily available, with great leaders like Mr and Mrs. Gorade who prioritize personal care and motivation.</p>
                                    </div>
                                </div>
                                <div className="testimonial-block-three">
                                    <div className="inner-box te-testimonial">
                                        <div className="quote-box"><img decoding="async"
                                            src={quote}
                                            alt="Awesome Image" /></div>
                                        <div className="rating-box">
                                            <i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i
                                                    class="bi bi-star-fill"></i><i
                                                        class="bi bi-star"></i><i
                                                            class="bi bi-star"></i>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img loading="lazy"
                                                decoding="async" width="50" height="50"
                                                src={person15}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Ganesh Jadhav</h3>
                                            <span className="designation te-designation">Software Engineer</span>
                                        </div>
                                        <p className="te-text" style={{ height: '8.7rem' }}>Best place to learn</p>
                                    </div>
                                </div>
                                <div className="testimonial-block-three">
                                    <div className="inner-box te-testimonial">
                                        <div className="quote-box"><img decoding="async"
                                            src={quote}
                                            alt="Awesome Image" /></div>
                                        <div className="rating-box">
                                            <i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i
                                                    class="bi bi-star-fill"></i><i
                                                        class="bi bi-star"></i><i
                                                            class="bi bi-star"></i>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img loading="lazy"
                                                decoding="async" width="50" height="50"
                                                src={person16}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Viren Rathod</h3>
                                            <span className="designation te-designation">Application Consultant</span>
                                        </div>
                                        <p className="te-text" style={{ height: '8.7rem' }}>Best growing company</p>
                                    </div>
                                </div>
                                <div className="testimonial-block-three">
                                    <div className="inner-box te-testimonial">
                                        <div className="quote-box"><img decoding="async"
                                            src={quote}
                                            alt="Awesome Image" /></div>
                                        <div className="rating-box">
                                            <i class="bi bi-star-fill"></i><i
                                                class="bi bi-star-fill"></i><i
                                                    class="bi bi-star-fill"></i><i
                                                        class="bi bi-star"></i><i
                                                            class="bi bi-star"></i>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img loading="lazy"
                                                decoding="async" width="50" height="50"
                                                src={person17}
                                                className="attachment-printpark_50x50 size-printpark_50x50 wp-post-image"
                                                alt="" /></figure>
                                            <h3 className="te-title">Ashwini Gite</h3>
                                            <span className="designation te-designation">Graphic + UI Designer</span>
                                        </div>
                                        <p className="te-text" style={{ height: '8.7rem' }}>Sumago Infotech is dedicated to global leader ship in sourcing enhancing service</p>
                                    </div>
                                </div>
                            </Slider>
                            <div className='testimonialSlideCount'>
                                <h1><span>{currentSlide + 1}</span> /17</h1>
                            </div>
                        </div>
                    </Col >
                </Row >
            </Container >
        </div >
    )
}

export default Testimonials
