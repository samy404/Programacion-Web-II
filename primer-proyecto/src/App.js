import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Primercomponente } from './Primercomponente';
import { SegundoComponente } from './SegundoComponente';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
        </div>
        <Primercomponente/>
        <SegundoComponente/>
      </div>
    );
  }
}

export default App;
