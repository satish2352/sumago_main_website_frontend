import React, { useState, useEffect } from 'react';
import '../assets/css/Services.css'
import axios from 'axios';

import { Col, Container, Row } from 'react-bootstrap'
import shape1 from '../assets/images/wp-content/themes/printpark/assets/images/shape/shape-36.png'
import shape2 from '../assets/images/wp-content/themes/printpark/assets/images/shape/back.png'
import img1 from '../assets/images/wp-content/themes/printpark/assets/images/shape/hospital.png'
import img2 from '../assets/images/wp-content/themes/printpark/assets/images/shape/travel.png'
import img3 from '../assets/images/wp-content/themes/printpark/assets/images/shape/finance.png'
import img4 from '../assets/images/wp-content/themes/printpark/assets/images/shape/e commerce.png'
import img5 from '../assets/images/wp-content/themes/printpark/assets/images/shape/manufacturing.png'
import img6 from '../assets/images/wp-content/themes/printpark/assets/images/shape/education.png'
import img7 from '../assets/images/wp-content/themes/printpark/assets/images/shape/government.png'
import img8 from '../assets/images/wp-content/themes/printpark/assets/images/shape/retail.png'
import img9 from '../assets/images/wp-content/themes/printpark/assets/images/shape/logistic.png'


const Services = () => {
    const [sectors, setSectors] = useState([]);

    useEffect(() => {
      axios.get('/sector/getsectors')
        .then(response => {
          setSectors(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the sectors!", error);
        });
    }, []);
    const cardsCol1 = [
        {
            title: 'Healthcare',
            img: img1,
        },
        {
            title: 'Travel and Hospitality',
            img: img2,
        },
        {
            title: 'Finance and Banking',
            img: img3,
        },
        {
            title: 'E-commerce',
            img: img4,
        },
        {
            title: 'Manufactoring',
            img: img5,
        },
        {
            title: 'Education',
            img: img6,
        },
        {
            title: 'Government',
            img: img7,
        },
        {
            title: 'Retail',
            img: img8,
        },
        {
            title: 'Logistics',
            img: img9,
        }
    ]
    
    return (
        <div className='services-section container-fluid'>
            <Container>
                <div className="services-text">
                    <div class="sec-title">
                        <h6 class="te-subtitle">Who We Are</h6>
                        <h2 class="te-title printpark-size-default">Sectors that we offer Services for...</h2>
                    </div>
                </div>
                <Row className='mt-4'>
                    {
                        sectors.map((a) => (
                            <Col lg={4} md={6} sm={12} className='serviceCards'>
                                <div
                                    class="service-block te-service-block">
                                    <div class="service-block-one wow fadeInUp animated"
                                        data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div class="inner-box">
                                            <div class="overlay-shape"
                                                style={{ backgroundImage: `url(${shape1})` }}>
                                            </div>
                                            <div class="icon-box">

                                                <div class="shape"
                                                    style={{ backgroundImage: `url(${shape2})` }}>
                                                </div>
                                                <div class="">
                                                    <img src={a.img}
                                                        class="img-fluid" alt="" />
                                                </div>
                                            </div>
                                            <div class="link-btn"><a
                                            ><i class="bi bi-arrow-right"></i></a>
                                            </div>
                                            <h3><a class="ser-title"
                                            >{a.title}</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
                
            </Container>
        </div>
    )
}

export default Services
