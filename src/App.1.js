import React, { Component, button } from 'react';
//import logo from './judgehat.png';
import './App.css';
import './general.css';
import './KnowYourRights.js';
import KnowYourRights from './KnowYourRights.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    alert('The link was clicked.');
    return(
      <KnowYourRights/>
    );
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Just about Right</h1>
        </header>
        
        <div className="grid-container">
            <button className = "SiteButton" color="primary" onClick={this.handleClick} >Know your rights</button>
            <button className = "SiteButton" color="primary" onClick={this.handleClick} >Get help</button>          
        </div>
        
      </div>
    );
      
    
  }
}
    
    



export default App;
