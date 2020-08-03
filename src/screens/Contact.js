import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SocialMediaNavBar from '../components/SocialMediaNavBar'

const Contact = () => {
    return (
        <div className='contactScreen'>
            <Header />
            <h1 id="contactMeTitle"> <a href="mailto:gcampbell391@gmail.com" id="contactLink">Contact Me Today!</a></h1>
            <SocialMediaNavBar />
            <div id='contactContainerSpacer'></div>
            <Footer />
        </div>
    )
}

export default Contact