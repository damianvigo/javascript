import React, { Component } from 'react';

class DefaultProps extends Component {
  render() {
    return <h1>{this.props.text}</h1>
  }
}

DefaultProps.defaultProps = {
  text: 'Titulo por defecto'
}

export default DefaultProps;