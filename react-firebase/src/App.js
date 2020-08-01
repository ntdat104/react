import React, { Component } from 'react';
import './App.css';
import {firebaseConnect} from "./firebaseConnect";

class App extends Component {
  render(){
    console.log(firebaseConnect);
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
