import React from 'react'
import { Col, Row, Carousel } from 'react-bootstrap';
import '../assets/css/ContentThree.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/images/wp-content/uploads/2023/08/slides/Rectangle1.png'
import img2 from '../assets/images/wp-content/uploads/2023/08/slides/Rectangle3.png'
import img3 from '../assets/images/wp-content/uploads/2023/08/slides/Rectangle4.png'
import img4 from '../assets/images/wp-content/uploads/2023/08/slides/Rectangle5.png'
import img5 from '../assets/images/wp-content/uploads/2023/08/slides/Rectangle2.png'
const ContentThree = () => {
  const abc = [
    {
      title: 'Exceptional Expertise',
      content:
        'Our pool of IT professionals is handpicked and comprised of experts with a wealth of experience in various domains. When you hire from us, you\'re getting access to the most skilled and knowledgeable individuals in the field.',
      images: [
        img1,
        'https://wp1.themevibrant.com/newwp/printpark/wp-content/uploads/2023/08/service-8-300x300.jpg',
      ],
    },
    {
      title: 'Versatility',
      content:
        'We offer a diverse range of IT professionals, spanning from software developers and data scientists to cybersecurity experts and project managers. No matter your specific needs, we have the right talent to drive your projects forward.',
      images: [
        img2,
        'https://wp1.themevibrant.com/newwp/printpark/wp-content/uploads/2023/08/service-7-300x300.jpg',
      ],
    },
    {
      title: 'Customized Solutions',
      content:
        'Your unique project deserves a tailored approach. We work closely with you to understand your objectives and requirements, and then match you with the professionals who possess the exact skills and experience necessary to achieve your goals.',
      images: [
        img3,
        'https://wp1.themevibrant.com/newwp/printpark/wp-content/uploads/2023/08/service-7-300x300.jpg',
      ],
    },
    {
      title: 'Scalability',
      content:
        'Whether you need a single developer or an entire team, we can scale our services to meet your project\'s scope and size. As your needs change, we\'re ready to adapt.',
      images: [
        img4,
        'https://wp1.themevibrant.com/newwp/printpark/wp-content/uploads/2023/08/service-7-300x300.jpg',
      ],
    },
    {
      title: 'Timely Delivery',
      content:
        'Our professionals are committed to delivering projects on time, ensuring that you stay on track and ahead of your competition.',
      images: [
        img5,
        'https://wp1.themevibrant.com/newwp/printpark/wp-content/uploads/2023/08/service-7-300x300.jpg',
      ],
    },
  ]
  return (
    <div>
      <div className="content-three">
        <div className="text-box">
          <h2>Why Hire from Sumago</h2>
          <p>
            When it comes to securing the top talent in the IT industry, we understand that you have many choices. Here's why choosing to hire from us is your best decision.
          </p>
        </div>
        <Carousel data-bs-theme="dark">
          {abc.map((item, index) => (
            <Carousel.Item key={index} className='carouselHeightForMobile'>
              <Row className="clearfix customCarouselStyling">
                <Col lg={6} md={6} sm={12} className="image-column">
                  <div className="image-box">
                    <figure className="image image-1">
                      <img src={item.images[0]} alt="" width="330" height="330" className="alignnone size-medium wp-image-322" style={{ position: 'absolute', zIndex: '1', borderRadius: '40px' }} />
                    </figure>
                    <figure className="image image-2">
                      <img src={item.images[1]} alt="" width="330" height="330" className="alignnone size-medium wp-image-323" style={{ position: 'relative', zIndex: '0', top: '4px', transform: 'rotate(6deg)' }} />
                    </figure>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} className="content-column">
                  <div className="content-box">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default ContentThree
