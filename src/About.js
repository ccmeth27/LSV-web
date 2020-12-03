import React from 'react';
import lsvLogo from './LSV-logo-gold-vector.png';
import './App.css';


export default function About() {
    return (
      <div>
        <h2>About</h2>
            <div className="Second-row">
                <img src={lsvLogo} className="LSV-logo" alt="logo" />
            </div>
      </div>
    );
  }