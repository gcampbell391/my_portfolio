import React from "react"

const Interests = () => {
    return (
        <div className="interests">
            <h1 id="interestTitle">Interests</h1>
            <ul className="interestList">
                <li>Programming</li>
                <li>Exercising</li>
                <li>Video Gaming</li>
                <li>Hiking and Traveling</li>
            </ul>
            <h1 id="educationTitle">Accomplishments</h1>
            <ul className="interestList">
                <li><a href="https://www.chattahoocheetech.edu/computerprogramming/" target="_blank" rel="noopener noreferrer">Associate's Degree of Applied Science</a> in Computer Programming</li>
                <li>Flatiron Full-Time Software Engineering Grad</li>
                <li>Certified in Java </li>
                <li>Certified in C# </li>
                <li>Inducted Member of <a href="https://www.nsls.org/" target="_blank" rel="noopener noreferrer">NSLS</a></li>
            </ul>
        </div>
    )
}

export default Interests