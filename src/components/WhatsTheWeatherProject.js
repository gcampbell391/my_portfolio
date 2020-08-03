import { Icon } from 'semantic-ui-react'
import React from 'react'

const WhatsTheWeatherProject = () => {

    return (
        <div className='projectContainer'>
            <h1 className='projectContainerTitle'>What's The Weather</h1>
            <div className='projectContainerFlexbox'>
                <div className='projectImageSSContainer'>
                    <img src={require('../images/WhatsTheWeatherSS.png')} className='projectImageSS' alt='project screenshot' />
                </div>
                <div className='projectDescriptionContainer'>
                    <h1 className='projectContainerHeader'>Description</h1>
                    <p className='projectContainerDescription'>A simple weather fetching application. Type in any address and retrieve the
                    current weather. The app combines a geocoding API with weatherstack API to
                    convert the input into coordinates, and then locate the current weather based on those
                    coordinates
            </p>
                    <h1 className='projectContainerHeader'>Access</h1>
                    <div className='accessContainer'>
                        <p>
                            <a href='https://whats-the-weather-app.herokuapp.com/' target='_blank' rel="noopener noreferrer" ><Icon name="computer" link size='large' /> Web App</a>
                        </p>
                        {/* <p>
                            <a href='https://www.youtube.com/watch?v=Qe6pRy8lyxk' target='_blank'> <Icon name="video" link size='large' />Demo</a>
                        </p> */}
                    </div>
                </div>
            </div>
            <h1 className='projectContainerHeader'>Technologies</h1>
            <ul className='technologiesList'>
                <li>
                    <Icon name="js" link size='large' color='yellow' />JavaScript
        </li>
                <li>
                    <Icon name="node js" link size='large' color='green' /> Node js
        </li>
                <li>
                    <Icon name="html5" link size='large' color='orange' />HTML/CSS
        </li>
            </ul>
        </div>
    )
}

export default WhatsTheWeatherProject