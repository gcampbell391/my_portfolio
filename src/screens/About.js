import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/core";
import Flash from 'react-reveal/Flash';
import Interests from '../components/Interests'



const override = css`
    display: block;
    margin: 0 auto;
`;


const About = () => {
    return (
        <div className='aboutScreen'>
            <Header />
            {/* <div className="carouselContainer">
                <ImageCarousel />
                <InterestsCarousel />
            </div> */}
            <Flash>
                <div className='aboutScreen-img-container'>
                    <PacmanLoader color={"#06d6a0"} loading={true} css={override} size={50} />
                </div>
            </Flash>
            <AboutMe />
            <Interests />
            <Footer />

        </div>
    )
}

export default About