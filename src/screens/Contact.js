import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Zoom from 'react-reveal/Zoom';
import Jello from 'react-reveal/Jello';
import ContactForm from '../forms/ContactForm';
import Particles from '../components/ParticlesContainer';


const Contact = () => {
    return (
        <div className='contactScreen'>
            <Header />
            <Zoom bottom>
                <h1 id="contactMeTitle"> Contact Me Today!</h1>
            </Zoom>
            <div className='contact-form-container'>
                <div className='contact-form-container-particles'>
                    <Particles />
                </div>
                <div className='contact-form-container-info'>
                    <Jello>
                        <ContactForm />
                    </Jello>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact