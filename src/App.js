import React, { Component } from 'react';
import Phoneform from './component/Phoneform';
import PhoneFormList from './component/PhoneInfoList';
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
    const { information } = this.state;
    return (
      <div>
        <Phoneform onCreate={this.handleCreate} />
        <PhoneFormList data={this.state.information} />
      </div>
    );
  }
}

export default App;
