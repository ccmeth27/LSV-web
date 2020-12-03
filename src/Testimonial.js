import React from 'react';
import lsvLogo from './LSV-logo-gold-vector.png';
import './App.css';


export default function Testimonial() {
    return (
      <div>
        <h2>Testimonials</h2>
            <div className="Second-row">
                <img src={lsvLogo} className="LSV-logo" alt="logo" />
            </div>
      </div>
    );
  }