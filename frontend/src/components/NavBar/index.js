import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import logo from '../../assets/GAME CORE LOGO.png'
import { Container } from './styles';
import fblogo from '../../assets/facebook-logo.svg';
import iglogo from '../../assets/instagram-logo.svg';
import ttlogo from '../../assets/twitter-logo.svg';
import { Link } from 'react-router-dom';

export default function NavBar({ props }) {
  return (
    <Container>
      <div>
        <img src={logo} />
      </div>
      <nav>
        <ul>
          <li><Link className="ativo" to="/">Sobre</Link></li>
          <li><Link to="/projects" >Projetos</Link></li>
          <li><Link to="/" >Contato</Link></li>
          <li><Link to="/" >Apoie</Link></li>
        </ul>
      </nav>
      <section>
        <img src={fblogo} />
        <img src={iglogo} />
        <img src={ttlogo} />
        <button><Link to='/login'>Entrar</Link></button>
      </section>
    </Container>
  );
}
