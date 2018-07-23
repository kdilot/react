// using function

import React from 'react';

const MyName = ({ name }) => {
  return (
    <div>
      Hello. My name is <b>{name}</b>.
    </div>
  );
};

export default MyName;

/*
// using component 

import React, { Component } from 'react';


class MyName extends Component {
    static defaultProps = {
        name: 'default Name'
    }
    render() {
        return (
            <div>
                Hello. My name is <b>{this.props.name}</b>.
            </div>
        );
    }
}
*/