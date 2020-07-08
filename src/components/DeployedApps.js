import React from "react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const DeployedApps = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div>
            <h1 className="deployedAppsTitle">Deployed Applications</h1>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={5000}
                transitionDuration={500}
                infinite={true}
                keyBoardControl={true}
            // centerMode={true} centers the main and shows partial of the others
            >
                <div>
                    <h1 id="wtwTitle">Whats the Weather?</h1>
                    <a href="https://whats-the-weather-app.herokuapp.com/" target="blank"><img className="deployedAppImg" src={require('../images/WhatsTheWeatherSS.png')} alt="Whats the Weather?" /></a>
                    <p className="deployedAppDesc">A simple weather fetching app created with Node js using WeatherStack and Geocode</p>
                </div>
                <div  >
                    <h1 id="if2Title">Interdimensional Fighters 2.0</h1>
                    <a href="https://interdimensional-fighters-2.herokuapp.com/" target="blank"><img className="deployedAppImg" src={require('../images/InterdimensionalFightersSS.png')} alt="Interdimensional Fighters" /></a>
                    <p className="deployedAppDesc">A turn based fighting game created with Rails in the back and React with Hooks in the front</p>
                </div>
                <div >
                    <h1 id="ccTitle">Chit Chatter</h1>
                    <a href="https://chit-chatter-app.herokuapp.com/" target="blank"><img className="deployedAppImg" src={require('../images/ChitChatter.png')} alt="Chit Chatter" /></a>
                    <p className="deployedAppDesc">A simple chat app created with Node js, express, and socket.io</p>
                </div>
            </Carousel>
            <p className="deployedAppsDesc">Apps were deployed on Herkou, so they make take a mintue to boot up if they're asleep.</p>
        </div>

    )
}

export default DeployedApps