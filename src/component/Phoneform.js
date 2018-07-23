import React, { Component } from 'react';

class Phoneform extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name:'',
            phone:''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="name" value={this.state.name} onChange={this.handleChange} name="name" />
                <input placeholder="phone" value={this.state.phone} onChange={this.handleChange} name="phone" />
                <button type="submit">enroll</button>
                <div className="App">{this.state.name} {this.state.phone}</div>
            </form>
        );
    }
}

export default Phoneform;


/*
App.js

import React, { Component } from 'react';
import Phoneform from './component/Phoneform';
import './App.css';

class App extends Component {
  handleChange = (data) => {
    console.log(data);
  }
  render() {
    return(
      <div>
        <Phoneform onCreate={this.handleChange} />
      </div>
    );
  }
}

export default App;

*/