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
            name: '',
            phone: ''
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
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: 'Tom',
        phone: '123-345-3454'
      },
      {
        id: 1,
        name: 'Jerry',
        phone: '345-643-2234'
      },
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  render() {
    const {information} = this.state;
    return (
      <div>
        <Phoneform onCreate={this.handleCreate}/>
        {JSON.stringify(information)}
      </div>
    );
  }
}

export default App;

*/