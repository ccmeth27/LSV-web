import React from 'react';
import lsvLogo from './LSV-logo-gold-vector.png';
import './App.css';

export default function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>LyonShare Ventures</h1>
                    <div className="Second-row">
                        <img src={lsvLogo} className="LSV-logo" alt="logo" />
                    </div>
            </header>
        </div>
    );
  }

