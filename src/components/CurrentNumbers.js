import React from 'react'

import CountUp from 'react-countup';
import { Icon } from 'semantic-ui-react'




const CurretNumbers = () => {

    return (
        <div className='currentNumbersContainer'>
            <div className='currentNumber'>
                <h2 className='currentNumberIcon' id='githubSquareIcon'><Icon name="github square" link size='huge' /></h2>
                <h2 className='currentNumberTitle'>GitHub Commits</h2>
                <CountUp delay={2} end={624} duration={4} className='countingNumber' />
            </div>
            <div className='currentNumber'>
                <h2 className='currentNumberIcon' id='githubAlternateIcon'><Icon name="github alternate" link size='huge' /></h2>
                <h2 className='currentNumberTitle'>GitHub Repositories</h2>
                <CountUp delay={2} end={377} duration={4} className='countingNumber' />
            </div>
            <div className='currentNumber'>
                <h2 className='currentNumberIcon' id='folderIcon'><Icon name="folder open" link size='huge' /></h2>
                <h2 className='currentNumberTitle'>Projects</h2>
                <CountUp delay={2} end={9} duration={4} className='countingNumber' />
            </div>
            <div className='currentNumber'>
                <h2 className='currentNumberIcon' id='coffeeIcon'><Icon name="coffee" link size='huge' /></h2>
                <h2 className='currentNumberTitle'>Coffees Consumed</h2>
                <CountUp delay={2} end={2574} duration={4} className='countingNumber' />
            </div>
        </div>
    )
}

export default CurretNumbers