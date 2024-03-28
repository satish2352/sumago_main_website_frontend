import React from 'react'
import '../assets/css/TechnologiesServiced.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import img1 from '../assets/images/wp-content/uploads/2023/08/LaravelNew.png'
import img2 from '../assets/images/wp-content/uploads/2023/08/ReactNew.png'
import img3 from '../assets/images/wp-content/uploads/2023/08/AngularNew.png'
import img4 from '../assets/images/wp-content/uploads/2023/08/BlockchainNew.png'
import img5 from '../assets/images/wp-content/uploads/2023/08/Data AnalystNew.png'
import img6 from '../assets/images/wp-content/uploads/2023/08/Data ScienceNew.png'

const TechnologiesServiced = () => {
    const settings = {
        className: "center",
        centerMode: true,
        autoplay: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        pauseOnHover: false,
        arrows: false,
        // nextArrow: <CustomNextArrow />,
        // prevArrow: <CustomPrevArrow />,
    };
    return (
        <div className='technologies-section'>
            <Container fluid>
                <div className="top-text">
                    <h2>Technologies Serviced</h2>
                </div>
                <div className="slider-container">
                    <Slider {...settings} style={{ color: "#ff0000" }}>
                        <div>
                            <div className="img-container">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="img-container">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="img-container">
                                <img src={img3} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="img-container">
                                <img src={img4} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="img-container">
                                <img src={img5} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="img-container">
                                <img src={img6} alt="" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

// const CustomNextArrow = (props) => {
//     return (
//         <div onClick={props.onClick} className='testimonialLeftArrow'>
//             <i class="bi bi-arrow-right-circle-fill"></i>
//         </div>
//     );
// };

// const CustomPrevArrow = (props) => {
//     return (
//         <div onClick={props.onClick} className='testimonialRightArrow'>
//             <i class="bi bi-arrow-left-circle-fill"></i>
//         </div>
//     );
// };

export default TechnologiesServiced