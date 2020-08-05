import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Zoom from 'react-reveal/Zoom';

const Contact = () => {
    return (
        <div className='contactScreen'>
            <Header />
            <Zoom bottom>
                <h1 id="contactMeTitle"> <a href="mailto:gcampbell391@gmail.com" id="contactLink">Contact Me Today!</a></h1>
            </Zoom>
            <div id='contactContainerSpacer'></div>
            <Footer />
        </div>
    )
}

export default Contact