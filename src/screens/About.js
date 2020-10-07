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
                {/* <ImageCarousel />
                <InterestsCarousel /> */}
                <section id='my-profile-section'>
                    <h1 id='my-profile-section-header'>
                        <span>A</span>
                        <span>B</span>
                        <span>O</span>
                        <span>U</span>
                        <span>T</span>
                        <span>-</span>
                        <span>M</span>
                        <span>E</span>
                    </h1>
                    <div id='video-container'>
                        <video src={require('../videos/smoke.mp4')} autoPlay muted></video>
                    </div>
                </section>
            </div>
            <AboutMe />
            <Interests />
            <Footer />

        </div>
    )
}

export default About