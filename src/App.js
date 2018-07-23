import React, { Component } from 'react';
import MyName from './MyName';
import Counter from './Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          React
        </div>
        <MyName name="React"/>
        <Counter />
      </div>
    );
  }
}

export default App;
