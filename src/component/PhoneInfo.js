import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: 'name',
            phone: '000-000-0000',
            id: 0
        }
    }

    state = {
        editing: false,
        cancel: true,
        name: '',
        phone: ''
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }


    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing, cancel: true })
    }

    handleCancel = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing, cancel: false })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { info, onUpdate } = this.props;
        if (!prevState.editing && this.state.editing) {
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }
        if (prevState.editing && !this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
        if (prevState.cancel && !this.state.cancel) {
            onUpdate(info.id, {
                name: info.name,
                phone: info.phone
            });
        }
    }

    render() {
        const { editing } = this.state;
        if (editing) {
            return (
                <div className="List">
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="name"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="phone"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>application</button>
                    <button onClick={this.handleCancel}>cancel</button>
                </div>
            );
        }
        const {
            name, phone
        } = this.props.info;

        return (
            <div className="List">
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>modify</button>
                <button onClick={this.handleRemove}>delete</button>
            </div>
        );
    }
}

export default PhoneInfo;