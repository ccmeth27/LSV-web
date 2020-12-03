import React from 'react';
// import lsvLogo from './LSV-logo-gold-vector.png';
import './App.css';
// import Carousel from 'react-bootstrap/Carousel';
// import Container from 'react-bootstrap/Container';
// import jeanbean from './testimonial_jeanbean.png';
// import myu from './testimonial-myu.png';
import MyCarousel from './Carousel.js';
import './Testimonial.css';


export default function Testimonial() {
    return (
      <div className="Testimonial-page">
        <h2 className="Testimonial-header">Testimonials</h2>
        <div className="Carousel-container">
          <MyCarousel/>
        </div>
          
      </div>
             
    );
  }