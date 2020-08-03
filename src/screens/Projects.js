import React from 'react'
import Header from '../components/Header'
import CurretNumbers from '../components/CurrentNumbers'
import Footer from '../components/Footer'
import { Icon } from 'semantic-ui-react'
import InterdimensionalFightersProject from '../components/InterdimensionalFightersProject'

const Projects = () => {
    return (
        <div>
            <Header />
            <div id='projectsHeaderImageContainer'>
                <img src={require('../images/projectsHeader.svg')} id='projectsHeaderImage' />
            </div>
            <CurretNumbers />
            <hr width='80%' />
            <InterdimensionalFightersProject />
            <hr width='80%' />

            <Footer />
        </div>
    )
}


export default Projects