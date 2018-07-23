import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    }

    handIncrease = () => {
        this.setState({
            number: this.state.number + 1

            /*
            ({ number }) => ({
                number: number + 1
             })
            */

        });
    }

    handDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>Value : {this.state.number}</div>
                <button onClick={this.handIncrease}>+</button>
                <button onClick={this.handDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;