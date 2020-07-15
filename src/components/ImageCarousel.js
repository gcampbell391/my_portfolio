import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = () => {
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
        <div className="imageCarousel">
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
                    <img src={require("../images/mySelfie.JPG")} id="selfieImg" alt="Selfie" />
                </div>
                <div>
                    <img src={require("../images/office3.JPG")} id="office3" alt="office 3" className="officeImgs" />
                </div>
                <div>
                    <img src={require("../images/office2.png")} id="office2" alt="office 2" className="officeImgs" />
                </div>
                <div>
                    <img src={require("../images/office1.png")} id="office1" alt="office 1" className="officeImgs" />
                </div>
            </Carousel>
        </div>
    )

}

export default ImageCarousel