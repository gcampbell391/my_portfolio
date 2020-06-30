import React from "react"


const DeployedApps = () => {
    return (
        <div>
            <h1 className="deployedAppsTitle">Deployed Applications</h1>
            <div className="deployedApps">
                <div class="deployedApp" data-order="1">
                    <h1>Whats the Weather?</h1>
                    <a href="https://whats-the-weather-app.herokuapp.com/" target="blank"><img className="deployedAppImg" src={require('../images/WhatsTheWeatherSS.png')} alt="Whats the Weather?" /></a>
                    <p>A simple weather fetching app created with Node js using WeatherStack and Geocode</p>
                </div>
                <div class="deployedApp" data-order="2">
                    <h1>Interdimensional Fighters 2.0</h1>
                    <a href="https://interdimensional-fighters-2.herokuapp.com/" target="blank"><img className="deployedAppImg" src={require('../images/InterdimensionalFightersSS.png')} alt="Interdimensional Fighters" /></a>
                    <p>A turn based fighting game created with Rails in the back and React with Hooks in the front</p>
                </div>
            </div>
            <p className="deployedAppsDesc">Apps were deployed on Herkou, so they make take a mintue to boot up if they're asleep.</p>
        </div>

    )
}

export default DeployedApps