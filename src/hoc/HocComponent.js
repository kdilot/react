import React, { Component } from 'react';

function HocComponent(Comp, name) {
  return (
    class HocComponent extends Component {
      state = {
        hover: false
      }
      changeHover = () => {
        this.setState({
          hover: !this.state.hover
        })
      }

      render() {
        const props = {
          [name]: this.state.hover
        }
        const {
          hover
        } = this.state
        return (
          <div className={hover ? 'hoverColor' : ''} onMouseOver={() => { this.changeHover() }} onMouseOut={() => { this.changeHover() }}>
            <Comp {...props} />
          </div>
        );
      }
    }
  )
}


export default HocComponent;