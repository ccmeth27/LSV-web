import React from 'react';
// import tradeAlerts from './feature_screenshots/trade-alerts-ss.png'
// import bestOfBest from './feature_screenshots/best-of-the-best-ss.png'
// import chartsCompleted from './feature_screenshots/charts-completed.png'
import './Features.css';
import ControlledAccordions from './ControlledAccordions.js';

export default function Features() {
    return (
      <div className="Features-page">
        <h1 className="Features-header">Server Features</h1>
        <div className="Accordion-container">
          <ControlledAccordions />
        </div>
          {/* <div>
            <div className="Card">
              <div className="Feature-group">
                <h3 className="Feature-name">Daily Trade Alerts</h3>
                <p>Description about daily trade alerts. Receive alerts whenever our fearless leader makes a trade...</p>
              </div>
                <img src={tradeAlerts} className="Trade-alerts" alt="features-1" />
            </div>
            <div className="Card">
              <div className="Feature-group">
                <h3 className="Feature-name">Request Charts</h3>
                <p>Description about Charts Completed. Members have the ability to request chart analysis simply by entering a ticker...</p>
              </div>
              <img src={chartsCompleted} className="Trade-alerts" alt="features-1" />
            </div>
            <div className="Card">
              <div className="Feature-group">
                <h3 className="Feature-name">Best of the Best</h3>
                <p className="Feature-text">Description about Best of the Best. Stocks that you should highly consider adding to your portfolio, etc.</p>
              </div>
              <img src={bestOfBest} className="Trade-alerts" alt="features-1" />
            </div>
          </div> */}
      </div>
    );
  }