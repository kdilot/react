import React, { Component, createContext } from 'react';

const Context = createContext();

const { Provider, Consumer: SampleConsumer } = Context;

class SampleProvider extends Component {
  state = {
    value: 'default value'
  }

  actions = {
    setValue: (value) => {
      this.setState({ value })
    }
  }

  render() {
    const { state, actions } = this
    const value = { state, actions }

    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

//  HoC
function useSample(WrappedComponent) {
  return function UseSample(props) {
    return (
      <SampleConsumer>
        {
          ({ state, actions }) => (
            <WrappedComponent
              value={state.value}
              setValue={actions.setValue}
            />
          )
        }
      </SampleConsumer>
    )
  }
}

export {
  SampleProvider,
  SampleConsumer,
  useSample
}