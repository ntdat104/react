import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//! Cách 1
function One(){
  return (
    <div>
      <h4>One</h4>
    </div>
  )
}

//! Cách 2
const Two = function(){ //* anonymous function
  return (
    <div>
      <h4>Two</h4>
    </div>
  )
}

//! Cách 3
const Three = () => (
  <div>
    <h4>Three</h4>
  </div>
)

//! Cách 4
class Four extends Component{
  render() {
    return(
      <div>
        <h4>Four</h4>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <One />
          <Two />
          <Three />
          <Four />
        </header>
      </div>
    );
  }
}

export default App;
