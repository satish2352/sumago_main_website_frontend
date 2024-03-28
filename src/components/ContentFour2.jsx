import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`accordion block ${isOpen ? 'open' : ''}`}>
      <div className="acc-btn" onClick={toggleAccordion}>
        <div className="icon-box"></div>
        <h5>{title}</h5>
      </div>
      <div className={`acc-content ${isOpen ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </li>
  );
};

const ContentFour2 = () => {
  return (
    <div>
      <div className="content-four">
        <div className="text-box">
          <h2>Industries Served</h2>
          <p>We offer our streamlined expertise of services across a range of different industries:</p>
        </div>
        <ul className="accordion-box">
          <AccordionItem title="Product Based" content="Streamlining product development and enhancing customer experiences through digital solutions." />
          <AccordionItem title="E-commerce" content="Revolutionizing the fashion industry with innovative e-commerce platforms and data-driven insights." />
          {/* Add more AccordionItem components for other industries */}
        </ul>
      </div>
    </div>
  );
};

export default ContentFour2;