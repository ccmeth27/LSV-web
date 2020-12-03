
import React from 'react';
import jeanbean from './testimonial_jeanbean.png';
import myu from './testimonial-myu.png';
import double from './double-testimonial.png';
import triple from './triple-testimonial.png';
import greenbean from './greanbean-testimonial.png';
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
                    <img src={myu} alt="carousel-2"/>
                </div>
                <div>
                    <img src={jeanbean} alt="carousel-2"/>
                </div>
                <div>
                    <img src={greenbean} alt="carousel-2"/>
                </div>

            </Carousel>
        );
    }

 
// ReactDOM.render(<MyCarousel />, document.querySelector('.demo-carousel'))