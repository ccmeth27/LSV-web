import React from 'react';
import tradeAlerts from './trade-alerts-ss.png'
import './Features.css';


export default function Features() {
    return (
      <div>
        <h2 className="Features-header">Features</h2>
            <div className="First-row">
              <div className="Feature-group">
                <h3 className="Feature-text">Daily Trade Alerts</h3>
                <p>description about daily trade alerts...</p>
              </div>
                <img src={tradeAlerts} className="Trade-alerts" alt="features-1" />
            </div>
      </div>
    );
  }