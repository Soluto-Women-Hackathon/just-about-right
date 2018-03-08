import React, { Component, button } from 'react';
import logo from './judgehat.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Just about Right</h1>
        </header>
        
        <div className = "left-but">
          <button color="primary" disabled={true}>111111</button>
        </div>
        <div className = "right-but" >
          <button color="primary" disabled={true}>222222</button>          
        </div>
      </div>
    );
  }
}

export default App;
