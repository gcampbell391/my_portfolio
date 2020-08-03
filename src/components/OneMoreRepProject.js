import { Icon } from 'semantic-ui-react'
import React from 'react'


const OneMoreRepProject = () => {

    return (
        <div className='projectContainer'>
            <h1 className='projectContainerTitle'>One More Rep</h1>
            <div className='projectContainerFlexbox'>
                <div className='projectImageSSContainer'>
                    <img src={require('../images/OneMoreRepSS.png')} className='projectImageSS' alt='project screenshot' />
                </div>
                <div className='projectDescriptionContainer'>
                    <h1 className='projectContainerHeader'>Description</h1>
                    <p className='projectContainerDescription'>One more rep is a CLI application dedicated to
                    helper users work out on a consistent basis. Users can log upper or lower body workouts, and Users can
                    also view random inspirational quotes.
</p>
                    <h1 className='projectContainerHeader'>Access</h1>
                    <div className='accessContainer'>
                        {/* <p>
                    <a href='https://chit-chatter-app.herokuapp.com/' target='_blank'><Icon name="computer" link size='large' /> Web App</a>
                </p> */}
                        <p>
                            <a href='https://www.youtube.com/watch?v=Wukv_H6P6Pk' target='_blank' rel="noopener noreferrer" > <Icon name="video" link size='large' />Demo</a>
                        </p>
                    </div>
                </div>
            </div>
            <h1 className='projectContainerHeader'>Technologies</h1>
            <ul className='technologiesList'>
                <li>
                    <Icon name="diamond" link size='large' color='red' /> Ruby
            </li>
            </ul>
        </div>
    )
}


export default OneMoreRepProject