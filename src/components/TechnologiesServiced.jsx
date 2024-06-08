import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/TechnologiesServiced.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap';
import Slider from "react-slick";

const TechnologiesServiced = () => {
    const [technologies, setTechnologies] = useState([]);

    useEffect(() => {
        axios.get('/hometechnologies/gethometechnologies')
            .then((response) => {
                setTechnologies(response.data);
            })
            .catch((error) => {
                console.error('Error fetching technologies:', error);
            });
    }, []);

    const settings = {
        className: "center",
        centerMode: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 5,
        speed: 500,
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    centerPadding: "40px"
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "30px"
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "20px"
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "10px"
                }
            }
        ]
    };

    return (
        <div className='technologies-section'>
            <Container fluid>
                <div className="top-text my-3">
                   <b><h2>Technologies Serviced</h2></b>
                </div>
                <div className="slider-container">
                    <Slider {...settings} style={{ color: "#ff0000" }}>
                        {technologies.map((technology, index) => (
                            <div key={index}>
                                <div className="img-container">
                                    <img src={technology.img} alt={technology.title} />
                                </div>
                                <div style={{ textAlign: 'center' }}><h4>{technology.title}</h4></div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    );
}

export default TechnologiesServiced;
