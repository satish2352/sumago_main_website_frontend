import React from 'react';
import { Accordion } from 'react-bootstrap';
import '../assets/css/ContentFour.css';
const Contentfour = () => {
  const industries = [
    { title: 'Product Based', content: 'Streamlining product development and enhancing customer experiences through digital solutions.' },
    { title: 'E-commerce', content: 'Revolutionizing the fashion industry with innovative e-commerce platforms and data-driven insights.' },
    { title: 'Property', content: 'Transforming real estate management and transactions with cutting-edge technology and automation.' },
    { title: 'Education', content: 'Empowering educators and enriching learning experiences with personalized digital tools and platforms.' },
    { title: 'Healthcare', content: 'Advancing healthcare delivery and patient care with innovative IT solutions and data analytics.' },
    { title: 'Stock Market', content: 'Empowering financial professionals with data-driven insights and intelligent trading platforms.' },
    // { title: 'Software Companies', content: 'Accelerating software development and innovation through agile methodologies and DevOps practices.' },
  ];

  return (
    <div className="content-four">
      <div className="text-box">
        <h2>Industries Served</h2>
        <p>We offer our streamlined expertise of services across a range of different industries:</p>
      </div>
      <Accordion className="custom-accordion">
        {industries.map((industry, index) => (
          <Accordion.Item key={index} eventKey={index.toString()} className='accord-item'>
            <Accordion.Header className='acc-btn'>
              <div className="icon-box"></div>
              <h5>{industry.title}</h5>
            </Accordion.Header>
            <Accordion.Body className='acc-content'>
              {industry.content}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Contentfour;
