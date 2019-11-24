import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import logo from '../../assets/GAME CORE LOGO.png'
import { Container } from './styles';
import fblogo from '../../assets/facebook-logo.svg';
import iglogo from '../../assets/instagram-logo.svg';
import ttlogo from '../../assets/twitter-logo.svg';

export default function NavBar() {
  return (
    <Container>
      <div>
        <img src={logo} />
      </div>
      <nav>
        <ul>
          <li><a className="ativo" href="/">Sobre</a></li>
          <li><a href="/">Projetos</a></li>
          <li><a href="/">Contato</a></li>
          <li><a href="/">Apoie</a></li>
        </ul>
      </nav>
      <section>
        <img src={fblogo} />
        <img src={iglogo} />
        <img src={ttlogo} />
        <button>Entrar</button>
      </section>
    </Container>
  );
}
