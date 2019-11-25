import React, { Component } from 'react';
import camera from '../../assets/camera.svg'
import { Container } from './styles';
import NavBarProjects from '../../components/NavBarProjects'
export default class NewProject extends Component {
  render() {
    return (
      <>
        <NavBarProjects />
        <Container>
          <header>
            <h2>NOVO PROJETO</h2>
          </header>
          <section>
            <div>
              <img src={camera} />
              <p>ADICIONAR CAPA</p></div>
          </section>
          <div id="tracinho">
            <span></span>
            <span></span>
          </div>
          <form>
            <label>NOME DO PROJETO</label>
            <input title="name" id="name" placeholder="Insira nome do projeto" />
            <label>DESCRIÇÃO</label>
            <input title="description" placeholder="Uma breve descrição" />
            <label>Conteudo</label>
            <input title="description" placeholder="Uma breve descrição" />
          </form>
        </Container>
      </>
    );
  }
}
