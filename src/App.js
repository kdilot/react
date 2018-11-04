import React, { Component } from 'react';
import { HocComponent, Component1, Component2, Component3 } from 'hoc';
import './App.css';

const Com1 = HocComponent(Component1, 'com1')
const Com2 = HocComponent(Component2, 'com2')
const Com3 = HocComponent(Component3, 'com3')

class App extends Component {
  render() {
    return (
      <div>
        <Com1 />
        <Com2 />
        <Com3 />
      </div>
    );
  }
}

export default App;
