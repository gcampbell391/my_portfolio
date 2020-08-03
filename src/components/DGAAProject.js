import { Icon } from 'semantic-ui-react'
import React from 'react'


const DGAAProject = () => {

    return (
        <div className='projectContainer'>
            <h1 className='projectContainerTitle'>DGAA</h1>
            <div className='projectContainerFlexbox'>
                <div className='projectImageSSContainer'>
                    <img src={require('../images/DGAASS.png')} className='projectImageSS' alt='project screenshot' />
                </div>
                <div className='projectDescriptionContainer'>
                    <h1 className='projectContainerHeader'>Description</h1>
                    <p className='projectContainerDescription'>Disc Golf Anytime Anywhere an application that
                    allows users to search for disc golf courses, view details about the course, and play a
                    round at a course! Users can view hole details and log stroke information as they proceed
                    the course.
</p>
                    <h1 className='projectContainerHeader'>Access</h1>
                    <div className='accessContainer'>
                        {/* <p>
                    <a href='https://chit-chatter-app.herokuapp.com/' target='_blank'><Icon name="computer" link size='large' /> Web App</a>
                </p> */}
                        <p>
                            <a href='https://www.youtube.com/watch?v=IL4zIzxqjzQ&t=5s' target='_blank' rel="noopener noreferrer" > <Icon name="video" link size='large' />Demo</a>
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
                    <Icon name="react" link size='large' color='purple' /> Redux
            </li>
                <li>
                    <Icon name="html5" link size='large' color='orange' />HTML/CSS
            </li>
            </ul>
        </div>
    )
}


export default DGAAProject