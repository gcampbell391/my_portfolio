import React from "react"


const CurrentProject = () => {
    return (
        <div className="currentProject">
            <h1 className="currentProjectTitle">What Did I Do This Week?</h1>
            <p className="currentProjectDesc">The current week is 6/14/20 - 6/20/20. I'm currently learning Node js through Udemy, while
            looking for employment. I've created 2 applications so far with Node js, and one of them
            is deployed. You can check it out here <a href="https://whats-the-weather-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Whats the Weather? </a>
            It is a simple weather application that will display the current weather of any location based off the user's
            input. So far I must say I'm really enjoying Node js. I also wrote a new <a href="https://medium.com/@gcampbell391/say-yes-mon-to-nodemon-node-mon-d59b278e03a" target="_blank" rel="noopener noreferrer">Blog</a> this week!
            Check back next week to see what I'm working on next!</p>
        </div>
    )
}

export default CurrentProject