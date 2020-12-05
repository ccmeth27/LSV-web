import React from 'react';
import './App.css';
import InviteCard from './InviteCard.js';

export default function Home() {
    return (
        <div>
            <header className="App-header">
                <h1>LyonShare Ventures</h1>
                <div className="Home-page">
                    <div className="About-server">
                        <h5>About The Server</h5>
                        <p> You will get access to some of the proprietary research we publish and get an in-depth look at how we approach our analysis. The main differentiator of our server is that we show users how to visualize the analysis and enhance their own skills instead of having to rely on trade alerts (although we do provide those as well). We are building one of the biggest & smartest communities on discord and would love to have you apart of it. I can guarantee that no other resource out there can give you the insights that we can.</p>
                    </div>
                    <div>
                        <InviteCard/>
                    </div>
                </div>
            </header>
        </div>
    );
  }

