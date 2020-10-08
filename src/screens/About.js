import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import ImageCarousel from '../components/ImageCarousel'
import InterestsCarousel from '../components/InterestsCarousel'
import Interests from '../components/Interests'



const About = () => {
    return (
        <div className='aboutScreen'>
            <Header />
            <div className="carouselContainer">
                <ImageCarousel />
                <InterestsCarousel />
            </div>
            <AboutMe />
            <Interests />
            <Footer />

        </div>
    )
}

export default About