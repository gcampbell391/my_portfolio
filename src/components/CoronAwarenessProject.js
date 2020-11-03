import { Icon } from 'semantic-ui-react'
import React from 'react'

const CoronAwarenessProject = () => {


    return (
        <div className='projectContainer'>
            <h1 className='projectContainerTitle'>CORON-AWARENESS</h1>
            <div className='projectContainerFlexbox'>
                <div className='projectImageSSContainer'>
                    <img src={require('../images/CoronAwarenessSS.png')} className='projectImageSS' alt='project screenshot' />
                </div>
                <div className='projectDescriptionContainer'>
                    <h1 className='projectContainerHeader'>Description</h1>
                    <p className='projectContainerDescription'>A web application (mobile-friendly) that informs users of new
                    corona virus cases in the world. You can also view individual statistics by clicking on any
                    country. Coron-Awareness updates daily!
                </p>
                    <h1 className='projectContainerHeader'>Access</h1>
                    <div className='accessContainer'>
                        <p>
                            <a href='https://coron-awareness.netlify.app/' target='_blank' rel="noopener noreferrer" ><Icon name="computer" link size='large' /> Web App</a>
                        </p>
                    </div>
                </div>
            </div>
            <h1 className='projectContainerHeader'>Technologies</h1>
            <ul className='technologiesList'>
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

export default CoronAwarenessProject