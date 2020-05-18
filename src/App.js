import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      // Using data-test because it is used specific to test
      <div className="app-container" data-test="component-app">
        <h1 data-test="counter-display">The counter is currently ...</h1>
        <button data-test="increment-button">increment counter</button>
      </div>
    )
  }
}

export default App;
