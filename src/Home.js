import React from 'react';
import lsvLogo from './LSV-logo-gold-vector.png';
import './App.css';


export default function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>LyonShare Ventures</h1>
                    <div>
                        <img src={lsvLogo} className="LSV-logo" alt="logo" />
                        <p> this section will talk a little about the server and have the discord invite link</p>
                    </div>
            </header>
        </div>
    );
  }

