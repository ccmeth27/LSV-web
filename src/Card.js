import React from 'react';
import tradeAlerts from './feature_screenshots/trade-alerts-ss.png'
import bestOfBest from './feature_screenshots/best-of-the-best-ss.png'
import chartsCompleted from './feature_screenshots/charts-completed.png'
import './Features.css';


export default function Card() {
    return (
      <div>
        <h2 className="Features-header">Features</h2>
            <div className="First-card">
              <div className="Feature-group">
                <h3 className="Feature-text">Daily Trade Alerts</h3>
                <p>Description about daily trade alerts. Receive alerts whenever our fearless leader makes a trade...</p>
              </div>
                <img src={tradeAlerts} className="Trade-alerts" alt="features-1" />
            </div>
            <div className="Second-card">
              <div className="Feature-group">
                <h3 className="Feature-text">Best of the Best</h3>
                <p>Description about Best of the Best. Stocks that you should highly consider adding to your portfolio, etc.</p>
              </div>
              <img src={bestOfBest} className="Trade-alerts" alt="features-1" />
            </div>
            <div className="Third-card">
              <div className="Feature-group">
                <h3 className="Feature-text">Daily Trade Alerts</h3>
                <p>Description about Charts Completed. Members have the ability to request chart analysis simply by entering a ticker...</p>
              </div>
              <img src={chartsCompleted} className="Trade-alerts" alt="features-1" />
            </div>

      </div>
    );
  }