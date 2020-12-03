import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.js';
import Features from './Features.js';
import Testimonial from './Testimonial.js';
import './Navi.css';
import lsvLogo from './LSV-logo-gold-vector.png';

export default function Navi() {
  return (
    <Router>
      <div >
        <ul className="Nav-menu">
            
          <li className="Nav-group">
            <Link to="/"  className="Nav-links">
                <img src={lsvLogo} className="Nav-logo" alt="nav-home" />
            </Link>
          </li>
          <li className="Nav-group">
            <Link to="/" className="Nav-links">Home</Link>
          </li>
          <li className="Nav-group">
            <Link to="/features" className="Nav-links">Features</Link>
          </li>
          <li className="Nav-group">
            <Link to="/testimonials" className="Nav-links">Testimonials</Link>
          </li>
        </ul>

        <br />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/testimonials">
            <Testimonial />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



