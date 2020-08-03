import { Icon } from 'semantic-ui-react'
import React from 'react'


const ChitChatterProject = () => {

    return (
        <div className='projectContainer'>
            <h1 className='projectContainerTitle'>Chit Chatter</h1>
            <div className='projectContainerFlexbox'>
                <div className='projectImageSSContainer'>
                    <img src={require('../images/ChitChatter.png')} className='projectImageSS' alt='project screenshot' />
                </div>
                <div className='projectDescriptionContainer'>
                    <h1 className='projectContainerHeader'>Description</h1>
                    <p className='projectContainerDescription'>An application that allows users to join a chat room.
                    Once in a room, users can send and recieve messages with all users currently in the same room.
                    Communication is hanlded with socket.io . Users can share their location
                    via Navigator geolocation.
        </p>
                    <h1 className='projectContainerHeader'>Access</h1>
                    <div className='accessContainer'>
                        <p>
                            <a href='https://chit-chatter-app.herokuapp.com/' target='_blank' rel="noopener noreferrer" ><Icon name="computer" link size='large' /> Web App</a>
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

export default ChitChatterProject