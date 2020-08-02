import React from 'react'
import Header from '../components/Header'
import CurretNumbers from '../components/CurrentNumbers'
import Footer from '../components/Footer'
import { Icon } from 'semantic-ui-react'

const Projects = () => {
    return (
        <div>
            <Header />
            <div id='projectsHeaderImageContainer'>
                <img src={require('../images/projectsHeader.svg')} id='projectsHeaderImage' />
            </div>
            <CurretNumbers />
            <hr width='80%' />

            <div className='projectContainer'>
                <h1>Interdimensional Fighters 2.0</h1>
                <div className='projectContainerFlexbox'>
                    <div className='projectImageSSContainer'>
                        <img src={require('../images/InterdimensionalFightersSS.png')} className='projectImageSS' />
                    </div>
                    <div className='projectDescriptionContainer'>
                        <h1>Description</h1>
                        <p>Interdimensional Fighters 2.0 is a turn based battling game. A user selects a hero and takes turns
                        alternating attacks with an infinite supply of enemies. Play today and see if you can beat the high score
                        </p>
                        <h1>Access</h1>
                        <p>
                            <Icon name="computer" link size='large' />
                            Web App
                        </p>
                        <p>
                            <Icon name="video" link size='large' />
                            Demo
                        </p>
                    </div>
                </div>
                <p>Technologies</p>

            </div>
            <Footer />
        </div>
    )
}


export default Projects