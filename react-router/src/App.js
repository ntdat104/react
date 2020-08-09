//TODO npm install react-router-dom --save
import React, { Component } from 'react';
import './App.css';
import Router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Router />
      </div>
    );
  }
}

export default App;
