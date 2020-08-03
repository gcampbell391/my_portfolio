import { Icon } from 'semantic-ui-react'
import React from 'react'

const GuessTheNumberProject = () => {

    return (
        <div className='projectContainer'>
            <h1 className='projectContainerTitle'>Guess The Number</h1>
            <div className='projectContainerFlexbox'>
                <div className='projectImageSSContainer'>
                    <img src={require('../images/GuessTheNumberSS.png')} className='projectImageSS' alt='project screenshot' />
                </div>
                <div className='projectDescriptionContainer'>
                    <h1 className='projectContainerHeader'>Description</h1>
                    <p className='projectContainerDescription'>A number guessing game. A user selects a number 1-99, and
                    then the computer tries to guess it. It usually takes the computer 6-8 rounds to guess the number. The logic
                    behind the computer guessing the number is created with a function that takes in 3 parameters(min, max, and exclude).
                    React Hooks is used for state management.
    </p>
                    <h1 className='projectContainerHeader'>Access</h1>
                    <div className='accessContainer'>
                        {/* <p>
                        <a href='https://chit-chatter-app.herokuapp.com/' target='_blank'><Icon name="computer" link size='large' /> Web App</a>
                    </p> */}
                        <p>
                            <a href='https://www.youtube.com/watch?v=VTZibg_MaPE&t=44s' target='_blank' rel="noopener noreferrer" > <Icon name="video" link size='large' />Demo</a>
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
                    <Icon name="react" link size='large' color='blue' /> React Native
</li>
            </ul>
        </div>
    )
}

export default GuessTheNumberProject