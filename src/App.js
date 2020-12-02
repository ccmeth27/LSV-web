import logo from './logo.svg';
import React, {Component} from 'react';
import lsvLogo from './LSV-logo-gold-vector.png';
import './App.css';
import Iframe from './Iframe.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        src: 'https://discordapp.com/widget?id=763951898772373544&theme=dark'
    };
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>LyonShare Ventures</h1>
            <div className="Second-row">
              <img src={lsvLogo} className="LSV-logo" alt="logo" />
              <Iframe source={this.state.src}/>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
