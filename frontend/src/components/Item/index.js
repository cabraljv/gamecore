import React, { Component } from 'react';

import { Container } from './styles';

export default class Item extends Component {
  state = {
    data: this.props.data
  }


  render() {
    return (
      <Container>
        <img src={this.state.data.img} />
        <p>{this.state.data.title}</p>
        <span>
          <p>Versão: {this.state.data.vesion}</p>
          <p>Seguidores: {this.state.data.likes}</p>
        </span>
      </Container>
    );
  }
}
