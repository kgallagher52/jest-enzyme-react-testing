import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      // Using data-test because it is used specific to test
      <div className="app-container" data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button 
        data-test="increment-button"
        onClick={() => this.setState({ counter: this.state.counter + 1})}
        >
          increment counter
        </button>
      </div>
    )
  }
}

export default App;
