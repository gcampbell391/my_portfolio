import React from "react"
import YouTube from 'react-youtube';

class MyProjects extends React.Component {


    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        const opts = {
            height: '380',
            width: '400',
            playerVars: {
                autoplay: 0,
            },
        };
        return (
            <div className="myProjects">
                <h1 id="projectTitle">My Most Recent Projects</h1>
                <div className="videoContainer">
                    <div id="videoOne">
                        <YouTube videoId="IL4zIzxqjzQ" opts={opts} onReady={this._onReady} id="DGAA" />
                    </div>
                    <div id="videoTwo">
                        <YouTube videoId="O6A79G8_dUQ" opts={opts} onReady={this._onReady} id="Market365" />
                    </div>
                </div>
                <p id="youtubeDesc">Check out more of my videos by clicking the YouTube icon in the nav bar!</p>
            </div>
        )
    }
}

export default MyProjects