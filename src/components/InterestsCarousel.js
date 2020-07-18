import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Roll from 'react-reveal/Roll';


const InterestsCarousel = () => {
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
        <Roll right>
            <div className="interestsCarousel">
                <Carousel axis="vertical"
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={6000}
                    transitionDuration={500}
                    infiniteLoop={true}
                    infinite={true}
                    keyBoardControl={true}
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                    stopOnHover={false}
                >
                    <div>
                        <img src={require("../images/woodstock.png")} id="woodstock" alt="woodstock" className="officeImgs" />
                    </div>
                    <div>
                        <img src={require("../images/lake.png")} id="lake" alt="lake" className="officeImgs" />
                    </div>
                    <div>
                        <img src={require("../images/family.png")} id="family" alt="family" className="officeImgs" />
                    </div>
                    <div>
                        <img src={require("../images/gym.png")} id="gym" alt="gym" className="officeImgs" />
                    </div>
                    <div>
                        <img src={require("../images/fair.png")} id="fair" alt="fair" className="officeImgs" />
                    </div>
                    <div>
                        <img src={require("../images/charleston.png")} id="charleston" alt="charleston" className="officeImgs" />
                    </div>
                </Carousel>
            </div>
        </Roll>
    )

}

export default InterestsCarousel