import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import ImageCarousel from '../components/ImageCarousel'
import InterestsCarousel from '../components/InterestsCarousel'



const About = () => {
    return (
        <div className='aboutScreen'>
            <Header />
            <div className="carouselContainer">
                <ImageCarousel />
                <InterestsCarousel />
            </div>
            <AboutMe />
            <Footer />

        </div>
    )
}

export default About