import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img1 from '../assets/images/wp-content/uploads/2023/08/question/bug.jpg';
import img2 from '../assets/images/wp-content/uploads/2023/08/question/website loading  speed.jpg';
import img3 from '../assets/images/wp-content/uploads/2023/08/question/responsive.jpg';
import img4 from '../assets/images/wp-content/uploads/2023/08/question/l certifications1.jpg';
import '../assets/css/QuestionCards.css';

const QuestionCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('/homecards/gethomecards')
            .then((response) => {
                console.log('API response:', response.data); // Debug: Log the API response
                setCards(response.data);
            })
            .catch((error) => {
                console.error('Error fetching home cards:', error);
            });
    }, []);

    return (
        <div className='questionCards'>
            <section id="quebak"
                className="elementor-section elementor-inner-section elementor-element elementor-element-cb662a5 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="cb662a5" data-element_type="section">
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-714d960"
                        data-id="714d960" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-b7cc865 elementor-widget elementor-widget-printpark_blog_grid"
                                data-id="b7cc865" data-element_type="widget">
                                <div className="elementor-widget-container">
                                    <section className="news-section p-0 m-0">
                                        <div className="row clearfix pb-4">
                                            {cards.map((card, index) => (
                                                <div key={index} className="col-lg-3 col-md-6 col-sm-12 news-block">
                                                    <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms"
                                                        data-wow-duration="1500ms">
                                                        <div className="inner-box te-blog">
                                                            <div className="image-box">
                                                                <figure className="image">
                                                                    <a>
                                                                        <img
                                                                            loading="lazy" decoding="async" width="350" height="240"
                                                                            src={card.img}
                                                                            className="attachment-printpark_350x270 size-printpark_350x270 wp-post-image"
                                                                            alt="" />
                                                                    </a>
                                                                </figure>
                                                            </div>
                                                            <div className="lower-content">
                                                                <h3 className="te-title">
                                                                    <a>
                                                                        {card.title}
                                                                    </a>
                                                                </h3>
                                                            </div>
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
    );
};

export default QuestionCards;
