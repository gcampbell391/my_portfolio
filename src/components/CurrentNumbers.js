import React from 'react'

import CountUp from 'react-countup';
import { Icon } from 'semantic-ui-react'




const CurretNumbers = () => {

    return (
        <div className='currentNumbersContainer'>
            <div className='currentNumber'>
                <h2 className='currentNumberIcon' id='githubSquareIcon'><Icon name="github square" link size='big' /></h2>
                <h2 className='currentNumberTitle'>GitHub Commits</h2>
                <CountUp delay={2} end={845} duration={4} className='countingNumber' />
            </div>
            <div className='currentNumber'>
                <h2 className='currentNumberIcon' id='githubAlternateIcon'><Icon name="github alternate" link size='big' /></h2>
                <h2 className='currentNumberTitle'>GitHub Repositories</h2>
                <CountUp delay={2} end={381} duration={4} className='countingNumber' />
            </div>
            <div className='currentNumber'>
                <h2 className='currentNumberIcon' id='folderIcon'><Icon name="folder open" link size='big' /></h2>
                <h2 className='currentNumberTitle'>Projects</h2>
                <CountUp delay={2} end={11} duration={4} className='countingNumber' />
            </div>
            <div className='currentNumber'>
                <h2 className='currentNumberIcon' id='coffeeIcon'><Icon name="coffee" link size='big' /></h2>
                <h2 className='currentNumberTitle'>Coffees Consumed</h2>
                <CountUp delay={2} end={2905} duration={4} className='countingNumber' />
            </div>
        </div>
    )
}

export default CurretNumbers