import { Icon } from 'semantic-ui-react'
import React from 'react'


const TradeCityProject = () => {

    return (
        <div className='projectContainer'>
            <h1 className='projectContainerTitle'>Trade City</h1>
            <div className='projectContainerFlexbox'>
                <div className='projectImageSSContainer'>
                    <img src={require('../images/TradeCitySS.png')} className='projectImageSS' alt='project screenshot' />
                </div>
                <div className='projectDescriptionContainer'>
                    <h1 className='projectContainerHeader'>Description</h1>
                    <p className='projectContainerDescription'>Trade City is a online trading app that allows
                    users to trade video games from user to user. User can browse over 100 games seeded to the data
                    base. You can add a game or platdform to your collection and offer them up for trade. Along with
                    all that we have advanced stats about ever game, including genre, release date, rating, completion time,
                    and more!
</p>
                    <h1 className='projectContainerHeader'>Access</h1>
                    <div className='accessContainer'>
                        {/* <p>
                    <a href='https://chit-chatter-app.herokuapp.com/' target='_blank'><Icon name="computer" link size='large' /> Web App</a>
                </p> */}
                        <p>
                            <a href='https://www.youtube.com/watch?v=2SkAUMQx2SI' target='_blank' rel="noopener noreferrer" > <Icon name="video" link size='large' />Demo</a>
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
                    <Icon name="html5" link size='large' color='orange' />HTML/CSS
            </li>
            </ul>
        </div>
    )
}


export default TradeCityProject