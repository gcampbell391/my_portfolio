import { Icon } from 'semantic-ui-react'
import React from 'react'

const TipOutProject = () => {


    return (
        <div className='projectContainer'>
            <h1 className='projectContainerTitle'>Tip Out</h1>
            <div className='projectContainerFlexbox'>
                <div className='projectImageSSContainer'>
                    <img src={require('../images/TipOutSS.png')} className='projectImageSS' alt='project screenshot' />
                </div>
                <div className='projectDescriptionContainer'>
                    <h1 className='projectContainerHeader'>Description</h1>
                    <p className='projectContainerDescription'>Tip Out is an application that allows waiters and waitresses to record and track tip outs. A user can
                    create an account and log in. A user can add a shift, delete a shift, view all shifts, update account information, and view tip analytics. Check out
                    Tip Out today!
                </p>
                    <h1 className='projectContainerHeader'>Access</h1>
                    <div className='accessContainer'>
                        <p>
                            <a href='https://tip-out.netlify.app/' target='_blank' rel="noopener noreferrer" ><Icon name="computer" link size='large' /> Web App</a>
                        </p>
                        <p>
                            <a href='https://www.youtube.com/watch?v=NG6nF6nreeY&t=3s' target='_blank' rel="noopener noreferrer" > <Icon name="video" link size='large' />Demo</a>
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

export default TipOutProject