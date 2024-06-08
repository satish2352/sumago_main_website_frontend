import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Hero.css';
import { Carousel } from 'react-bootstrap';
import awc from '../assets/images/wp-content/uploads/2023/08/newbg.png';
import awardbanner from '../assets/images/wp-content/uploads/2023/08/AWARD BANNER.png';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        axios.get("/homeslider/gethomeslider")
            .then((result) => {
                console.log("API response:", result.data); // Debug: Log the API response
                setData(result.data);
            })
            .catch((err) => {
                console.log("Error fetching data", err);
            });
    }, []);

    return (
        <div className='hero-section'>
            <div className='carousel-slide'>
                <Carousel pause={false} data-bs-theme="dark">
                    {data.map((item) => (
                        <Carousel.Item key={item.id} interval={5000}> {/* Ensure unique key */}
                            <div className="carousel-text">
                                <h1>{item.title}</h1>
                                <p>{item.text}</p>
                            </div>
                            <img src={item.img} alt='' className='carousel-image' />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div>
                    {isMobile ? (
                        <img src={awardbanner} alt="Award Winning Company" style={{ width: '100%' }} className='mt-3 mb-3' />
                    ) : (
                        <img src={awc} alt="Award Winning Company" className='mt-3 mb-3' />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hero;
