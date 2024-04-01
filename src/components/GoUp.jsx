import React, { useState, useEffect } from 'react';

const GoUp = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const shouldShow = window.scrollY > 600 && window.scrollY < (document.documentElement.scrollHeight - window.innerHeight - 550);
            setShowScrollButton(shouldShow);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="footer-top" style={{ zIndex: '10000', position:'fixed', right:'0px', bottom:'0px' }}>
            <div className='right-columns'>
                <ul className='social-links clearfix'>
                    <li>
                        <button className='scroll-top' onClick={scrollToTop} style={{ opacity: showScrollButton ? '1' : '0', transition: 'opacity 0.3s ease-in-out', color:'#D73439', borderColor:'#D73439' }}>
                            <i className="flaticon-arrow-up"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default GoUp;