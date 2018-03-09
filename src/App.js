import React, { Component, button } from 'react';
//import logo from './judgehat.png';
import './App.css';
import './general.css';
import './KnowYourRights.js';
import KnowYourRights from './KnowYourRights.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={ pageNumber: 1, xx: 'aaaaa'};
   // this.onButtonClick = this.onButtonClick.bind(this);
  }


  onButtonClick(num, str) {
    //e.preventDefault();
    this.setState({
      pageNumber: num,
      xx: str
    });
    // console.log('x is: ' ,num);
    // alert(num);    
  } 



  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Just about Right</h1>
        </header>
        
        <div className="grid-container">
            <button className = "SiteButton" color="primary" onClick={this.onButtonClick.bind(this, 2, 'hiii')} >Know your rights</button>
            <button className = "SiteButton" color="primary" onClick={this.onButtonClick.bind(this, 3, 'byye')} >Get help</button>          
            
        </div>

        <div > {this.state.pageNumber} </div>
        <div > {this.state.xx} </div>
        
      </div>
    );
      
    
  }
}
    
    



export default App;
