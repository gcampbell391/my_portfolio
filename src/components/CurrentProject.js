import React from "react"
import Bounce from 'react-reveal/Bounce';




const CurrentProject = () => {
    return (
        <div className="currentProject">
            <Bounce left cascade>
                <h1 className="currentProjectTitle">What Did I Do This Week?</h1>
                <p className="currentProjectDesc">The current week is 7/12/20 - 7/18/20. As you can tell I revamped my portfolio site! I was
                inspired by seeing other software developers post their portfolio sites on LinkedIn. There is still a little bit more I would like
                to change, but overall I think the new look is much better. My favorite new addition is the moving trees which was created using only css, and
                I used React Typist to display all my technologies above. I wrote a new blow about React Carousels and how to easily implement them.
            You can check out the blog <a href="https://medium.com/@gcampbell391/react-carousels-around-we-go-8f615fc7730b" target="_blank" rel="noopener noreferrer">here</a>.
            I also spent time networking and applying to jobs for a good portion of this past week. I started a React Native course, but I haven't made it that deep into
            the course yet. I plan on spending more time on the course next week.
            Check back next week to see what I'm working on next!</p>
            </Bounce>
        </div>
    )
}

export default CurrentProject