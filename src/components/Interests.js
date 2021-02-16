import React from "react"
import Bounce from 'react-reveal/Bounce';

import { Icon } from 'semantic-ui-react'



const Interests = () => {
    return (
        <div className="interests">
            <Bounce left cascade>
                <div className="interests-left">
                    <h1 id="interestTitle">Hobbies & Interests</h1>
                    <ul className="interestList">
                        <li className='disabledIcon'><Icon name="keyboard" link size="large" color='orange' /> Programming</li>
                        <li className='disabledIcon'><Icon name="bicycle" link size="large" color='red' /> Exercising</li>
                        <li className='disabledIcon'><Icon name="game" link size="large" color='teal' /> Video Gaming</li>
                        <li className='disabledIcon'><Icon name="plane" link size="large" color='olive' /> Traveling</li>
                    </ul>
                </div>
            </Bounce>
            <Bounce right cascade>
                <div className="interests-right">
                    <h1 id="educationTitle">Accomplishments</h1>
                    <ul className="interestList">
                        <li><a href="https://www.chattahoocheetech.edu/computerprogramming/" target="_blank" rel="noopener noreferrer"> <Icon name="certificate" color='yellow' link size="large" /> Associate's Degree of Applied Science</a> <br />in Computer Programming</li>
                        <li className='disabledIcon'><Icon name="code branch" color='red' link size="purple" /> Flatiron Full-Time Software <br /> Engineering Grad</li>
                        <li className='disabledIcon'><Icon name="circle check outline" color='green' link size="large" /> Certified in Java </li>
                        <li className='disabledIcon'><Icon name="circle check outline" color='green' link size="large" /> Certified in C# </li>
                        <li><Icon name="address card outline" color='red' link size="large" className='disabledIcon' /> Inducted Member of <a href="https://www.nsls.org/" target="_blank" rel="noopener noreferrer">NSLS</a></li>
                    </ul>
                </div>
            </Bounce>
        </div>
    )
}

export default Interests