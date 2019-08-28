import React from 'react';

import { Container, Botao } from './styles';
import logo from '../../assets/logo.svg'
export default function Header() {
  return (
    <Container>
      <header>
        <img src={logo} />
        <ul>
          <li><a href="google.com">Home</a></li>
          <li><a href="google.com">Projetos</a></li>
          <li><a href="google.com">Sobre nós</a></li>
          <li><a href="google.com">Apoie</a></li>
        </ul>
        <button type="button"><p>Entrar</p></button>
      </header>

    </Container>
  );
}
