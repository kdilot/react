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
    ],
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id ? { ...info, ...data } : info
      )
    })
  }

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );

    return (
      <div>
        <Phoneform onCreate={this.handleCreate} />
        <p><input className="App" placeholder="Search Name" onChange={this.handleChange} value={keyword} /></p><hr />
        <PhoneFormList data={filteredList} onRemove={this.handleRemove} onUpdate={this.handleUpdate} />
      </div>
    );
  }
}

export default App;
