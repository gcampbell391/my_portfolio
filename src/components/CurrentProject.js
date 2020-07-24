import React from "react"
import Bounce from 'react-reveal/Bounce';





const CurrentProject = () => {
    return (
        <div className="currentProject">
            <Bounce left cascade>
                <h1 className="currentProjectTitle">What Did I Do This Week?</h1>
                <p className="currentProjectDesc">The current week is 7/19/20 - 7/25/20. I spent this week working on my React Native course. I
                completed my first React Native application! It is a simple goal app that allows a user to click a button to display a goal form.
                The user can type a goal in the input and add it to the current goal list. All the goals are listed on the home screen. A user can
                check off or delete a goal by clicking it. It's pretty simple, but it is my first React Native app! I can't wait to build something more sophisticated next!
                I wrote a blog about how to easily implement a video onto a website. You can check out the blog
                    <a href="https://medium.com/@gcampbell391/get-ready-to-react-to-videos-for-react-768e1425d5d1" target="_blank" rel="noopener noreferrer">here</a>.
                    Check back next week to see what I'm working on next!</p>
            </Bounce>
        </div>
    )
}

export default CurrentProject