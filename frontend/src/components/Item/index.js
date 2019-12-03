import React, { Component } from 'react';

import { Container } from './styles';

export default class Item extends Component {
  state = {
    data: this.props.data
  }
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location.href = `/projects/${this.state.data.id}`
  }

  render() {
    return (
      <Container onClick={this.handleClick}>
        <img src={this.state.data.logo} />
        <p>{this.state.data.title}</p>

      </Container>
    );
  }
}
