import React from "react"
import YouTube from 'react-youtube';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Bounce from 'react-reveal/Bounce';


class MyProjects extends React.Component {

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
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
        const opts = {
            height: '380',
            width: '400',
            playerVars: {
                autoplay: 0,
            },
        };
        return (
            <div className="myProjects">
                <Bounce left cascade>
                    <h1 id="projectTitle">Project Demos</h1>
                    <div className="videoContainer">
                        <Carousel
                            responsive={responsive}
                            transitionDuration={500}
                            infiniteLoop={true}
                            infinite={true}
                            keyBoardControl={true}
                            showStatus={false}
                            showThumbs={false}
                            showIndicators={false}
                        >
                            <div>
                                <YouTube videoId="IL4zIzxqjzQ" opts={opts} onReady={this._onReady} id="DGAA" />
                            </div>
                            <div>
                                <YouTube videoId="O6A79G8_dUQ" opts={opts} onReady={this._onReady} id="Market365" />
                            </div>
                            <div>
                                <YouTube videoId="7OaCYkA4ob8" opts={opts} onReady={this._onReady} id="IDfighters" />
                            </div>
                            <div>
                                <YouTube videoId="2SkAUMQx2SI" opts={opts} onReady={this._onReady} id="TradeCity" />
                            </div>
                            <div>
                                <YouTube videoId="Wukv_H6P6Pk" opts={opts} onReady={this._onReady} id="CLI" />
                            </div>
                        </Carousel>
                    </div>
                    <p id="youtubeDesc">Check out more of my videos by clicking the YouTube icon in the nav bar!</p>
                </Bounce>
            </div>
        )
    }
}

export default MyProjects