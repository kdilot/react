import React, { Component, createContext } from 'react';

const Context = createContext();

const {
  Provider,
  Consumer: AnotherConsumer
} = Context;

class AnotherProvider extends Component {
  state = {
    number: 1,
  }
  actions = {
    incresement: () => {
      this.setState(
        ({ number }) => ({ number: number + 1 })
      )
    }
  }
  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}

function useAnother(WrappedComponent) {
  return function UseAnother(props) {
    return (
      <AnotherConsumer>
        {
          ({ state, actions }) => (
            <WrappedComponent
              number={state.number}
              incresement={actions.incresement}
            />
          )
        }
      </AnotherConsumer>
    )
  }
}

export {
  AnotherProvider,
  AnotherConsumer,
  useAnother
};