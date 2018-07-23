import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: 'name',
            phone: '000-000-0000',
            id: 0
        }
    }
    render() {
        const style = {
            background: 'black',
            color: 'aqua',
            padding: '8px',
            margin: '8px'
        };

        const {
            name, phone, id
        } = this.props.info;

        return (
            <div className="List">
                <div><b>{name}</b></div>
                <div>{phone}</div>
            </div>
        );
    }
}

export default PhoneInfo;