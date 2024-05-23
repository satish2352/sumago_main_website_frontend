import React from 'react'
import Hero from '../components/Hero'
import QuestionCards from '../components/QuestionCards'
import Numbers from '../components/Numbers'
import WhoWeAre from '../components/WhoWeAre'
import WhySumago from '../components/WhySumago'
import Services from '../components/Services'
import GetaQuote from '../components/GetaQuote'
import TechnologiesServiced from '../components/TechnologiesServiced'
import ContactButton from '../components/ContactButton'
import WhoWeAre2 from '../components/WhoWeAre2'
import Testimonials from '../components/Testimonials'

const Home = () => {
    return (
        <>
            <Hero />
            <QuestionCards />
            <Numbers />
            <WhoWeAre />
            <WhySumago />
            <Services />
            {/* <Testimonials/> */}
            <GetaQuote />
            <TechnologiesServiced/>
            <ContactButton/>
            <WhoWeAre2/>
        </>
    )
}

export default Home
