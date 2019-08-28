import React, { Component } from 'react';

import { Container } from './styles';
import Header from '../../components/Header';
import Destaque from '../../components/Destaque';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Destaque />
      </Container>
    );
  }
}
