import { Icon } from 'semantic-ui-react'
import React from 'react'

const InterdimensionalFightersProject = () => {

    return (
        <div className='projectContainer'>
            <h1 className='projectContainerTitle'>Interdimensional Fighters 2.0</h1>
            <div className='projectContainerFlexbox'>
                <div className='projectImageSSContainer'>
                    <img src={require('../images/InterdimensionalFightersSS.png')} className='projectImageSS' />
                </div>
                <div className='projectDescriptionContainer'>
                    <h1 className='projectContainerHeader'>Description</h1>
                    <p>Interdimensional Fighters 2.0 is a turn based battling game. A user selects a hero and takes turns
                    alternating attacks with an infinite supply of enemies. Play today and see if you can beat the high score
                </p>
                    <h1 className='projectContainerHeader'>Access</h1>
                    <div className='accessContainer'>
                        <p>
                            <a href='https://interdimensional-fighters-2.herokuapp.com/' target='_blank'><Icon name="computer" link size='large' /> Web App</a>
                        </p>
                        <p>
                            <a href='https://interdimensional-fighters-2.herokuapp.com/' target='_blank'> <Icon name="video" link size='large' />Demo</a>
                        </p>
                    </div>
                </div>
            </div>
            <h1 className='projectContainerHeader'>Technologies</h1>
            <ul className='technologiesList'>
                <li>
                    <Icon name="diamond" link size='large' color='red' /> Ruby on Rails
            </li>
                <li>
                    <Icon name="js" link size='large' color='yellow' />JavaScript
            </li>
                <li>
                    <Icon name="react" link size='large' color='blue' /> React
            </li>
                <li>
                    <Icon name="html5" link size='large' color='orange' />HTML/CSS
            </li>
            </ul>
        </div>
    )
}

export default InterdimensionalFightersProject