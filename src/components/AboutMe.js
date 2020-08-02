import React from "react"
import RubberBand from 'react-reveal/RubberBand';



const AboutMe = () => {
    return (
        <RubberBand left cascade>
            <div className="aboutMe">
                <p className="aboutMeParagraph">I have 3 years experience working with programming. I don't have any professional experience
                yet as a software engineer, but I'm currently seeking employment. I have experience working
                with Java, C#, Ruby, Rails, Javascript, React, Redux, Node js, Express js, MongoDB, SQL, HTML, and CSS. I aspire to be a
                full stack engineer as I enjoy working with the front end and back end. I have always been
                fascinated with technology. I love the logic, algorithms, and puzzles that come along with
                programming.  I'm currently looking for employment. If you're interested in any of my prior projects please check out my Github account
                and YouTube channel in the nav bar. You can also check out my blogs that are published on
            Medium. Lastly, view my professional profile on LinkedIn and let's connect today!</p>
            </div>
        </RubberBand>
    )
}

export default AboutMe