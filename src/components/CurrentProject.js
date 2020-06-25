import React from "react"


const CurrentProject = () => {
    return (
        <div className="currentProject">
            <h1 className="currentProjectTitle">What Did I Do This Week?</h1>
            <p className="currentProjectDesc">The current week is 6/21/20 - 6/27/20. I'm still learning Node js through Udemy, but I took a break for a few days
            this week to deploy one of my past projects from Flatiron. I decided to deploy my mod 3 project which was built using vanilla js, css, and html in the front end and rails
            in the back end. I also recently had a React tech interview, and I realized I wasn't as familar with Hooks as I previously believed. With all of that said, I decided
            to rebuild the front end using React functional components and Hooks. The rails back end stayed mostly the same except for converting from SQLite to
            PostGres for deployment specifications. Here is the <a target="blank" href="https://interdimensional-fighters-2.herokuapp.com/">finished product!</a> It
            is deployed on Herkou, so it may take a minute to boot up(heroku free apps go to sleep when they are not in use). There are more features I would like to work on in the
            future including two users playing agaisnt each other. You can also view the demo <a target="blank" href="https://www.youtube.com/watch?v=kgWzaawEwdw&t=3s">here</a> for the original mod 3 project to compare and contrast. Sometime next
            week I will create and add a deployed application section. Check back next week to see what I'm working on next!</p>
        </div>
    )
}

export default CurrentProject