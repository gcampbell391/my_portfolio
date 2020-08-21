import React from 'react'
import Header from '../components/Header'
import CurretNumbers from '../components/CurrentNumbers'
import Footer from '../components/Footer'
import InterdimensionalFightersProject from '../components/InterdimensionalFightersProject'
import WhatsTheWeatherProject from '../components/WhatsTheWeatherProject'
import ChitChatterProject from '../components/ChitChatterProject'
import GuessTheNumberProject from '../components/GuessTheNumberProject'
import DGAAProject from '../components/DGAAProject'
import Market365Project from '../components/Market365Project'
import TradeCityProject from '../components/TradeCityProject'
import OneMoreRepProject from '../components/OneMoreRepProject'
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';



const Projects = () => {

    return (
        <div>
            <Header />
            <div id='projectsHeaderImageContainer'>
                <img src={require('../images/projectsHeader.svg')} id='projectsHeaderImage' alt='projects' />
            </div>
            <div className='projectScreen'>
                <Flash>
                    <CurretNumbers />
                </Flash>
                <hr width='80%' />
                <Fade bottom>
                    <InterdimensionalFightersProject />
                </Fade>
                <hr width='80%' />
                <Fade bottom>
                    <DGAAProject />
                </Fade>
                <hr width='80%' />
                <Fade bottom>
                    <Market365Project />
                </Fade>
                <hr width='80%' />
                <Fade bottom>
                    <WhatsTheWeatherProject />
                </Fade>
                <hr width='80%' />
                <Fade bottom>
                    <ChitChatterProject />
                </Fade>
                <hr width='80%' />
                <Fade bottom>
                    <GuessTheNumberProject />
                </Fade>
                <hr width='80%' />
                <Fade bottom>
                    <TradeCityProject />
                </Fade>
                <hr width='80%' />
                <Fade bottom>
                    <OneMoreRepProject />
                </Fade>
            </div>
            <Footer />
        </div>
    )
}


export default Projects