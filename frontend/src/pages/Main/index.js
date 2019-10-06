import React, { Component } from 'react';


import Header from '../../components/Header';
import Destaque from '../../components/Destaque';
import Conteudo from '../../components/Conteudo';

export default class Main extends Component {
  render() {
    return (
      <>
        <Header history={this.props.history} />
        <Destaque />
        <Conteudo />
      </>
    );
  }
}
