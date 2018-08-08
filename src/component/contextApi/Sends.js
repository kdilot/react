import React, { Component } from 'react';
// import { SampleConsumer } from '../../contexts/sample';
import { useSample } from '../../contexts/sample';

class Sends extends Component {
  state = {
    input: ''
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.setValue(this.state.input)
  }

  componentDidMount() {
    this.setState({
      input: this.props.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type="submit">Setting</button>
        </form>
      </div>
    );
  }
}

/*
const SendsContainer = () => (
  <SampleConsumer>
    {
      ({ state, actions }) => (
        <Sends
          value={state.value}
          setValue={actions.setValue}
        />
      )
    }
  </SampleConsumer>
)
*/

// export default SendsContainer;
export default useSample(Sends);