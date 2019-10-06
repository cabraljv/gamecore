import React from 'react';

import { Container, Botao } from './styles';
import logo from '../../assets/logo.svg'
export default function Header({ history }) {
  return (
    <Container>
      <header>
        <img src={logo} />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="google.com">Projetos</a></li>
          <li><a href="google.com">Sobre nós</a></li>
          <li><a href="google.com">Apoie</a></li>
        </ul>
        <button type="button" onClick={() => {
          history.push('/login')
        }}><p>Entrar</p></button>
      </header>

    </Container>
  );
}
