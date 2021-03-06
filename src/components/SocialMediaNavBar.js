import React from "react"
import { Icon } from 'semantic-ui-react'
import RubberBand from 'react-reveal/RubberBand';



const NavBar = () => {
    return (
        <RubberBand >
            <div>
                <a href="https://github.com/gcampbell391" target="_blank" rel="noopener noreferrer" id="githubIcon"><Icon name='github' link size='huge' /></a>
                <a href="https://www.linkedin.com/in/genecampbell3/" target="_blank" rel="noopener noreferrer" id="linkedInIcon"><Icon name="linkedin" link size='huge' /></a>
                <a href="https://medium.com/@gcampbell391" target="_blank" rel="noopener noreferrer" id="mediumIcon"><Icon name="medium" link size="huge" /></a>
                <a href="https://www.youtube.com/channel/UCno96tsOOe9_2s_-B2mmQGQ?view_as=subscriber" target="_blank" rel="noopener noreferrer" id="youTubeIcon"><Icon name="youtube" link size="huge" /></a>
            </div>
        </RubberBand>
    )
}

export default NavBar