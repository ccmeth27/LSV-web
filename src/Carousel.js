
import React from 'react';
import jeanbean from './testimonials/testimonial_jeanbean.png';
import myu from './testimonials/testimonial-myu.png';
import double from './testimonials/double-testimonial.png';
import triple from './testimonials/triple-testimonial.png';
import greenbean from './testimonials/greanbean-testimonial.png';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
export default function MyCarousel () {
    
        return (
            <Carousel>
                <div>
                    <img src={triple} alt="carousel-1"/>
                </div>
                <div>
                    <img src={double} alt="carousel-2"/>
                </div>
                <div>
                    <img src={myu} alt="carousel-3"/>
                </div>
                <div>
                    <img src={jeanbean} alt="carousel-4"/>
                </div>
                <div>
                    <img src={greenbean} alt="carousel-5"/>
                </div>

            </Carousel>
        );
    }

 
// ReactDOM.render(<MyCarousel />, document.querySelector('.demo-carousel'))