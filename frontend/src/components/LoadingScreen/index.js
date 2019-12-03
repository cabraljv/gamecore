import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import { Container } from './styles';

export default class LoadingScreen extends Component {
  render() {
    return (
      <Container>
        <div>
          <Loader
            type="GradleLoader"
            color="#fff"
            height={130}
            width={130}

          />
          <p>Criando Projeto</p>
        </div>

      </Container>
    );
  }
}
