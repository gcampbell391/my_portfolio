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

const Projects = () => {
    return (
        <div>
            <Header />
            <div id='projectsHeaderImageContainer'>
                <img src={require('../images/projectsHeader.svg')} id='projectsHeaderImage' alt='projects' />
            </div>
            <CurretNumbers />
            <hr width='80%' />
            <InterdimensionalFightersProject />
            <hr width='80%' />
            <DGAAProject />
            <hr width='80%' />
            <Market365Project />
            <hr width='80%' />
            <WhatsTheWeatherProject />
            <hr width='80%' />
            <ChitChatterProject />
            <hr width='80%' />
            <GuessTheNumberProject />
            <hr width='80%' />
            <TradeCityProject />
            <hr width='80%' />
            <OneMoreRepProject />
            <Footer />
        </div>
    )
}


export default Projects