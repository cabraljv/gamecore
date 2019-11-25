import React, { Component } from 'react';

import NavBar from '../../components/NavBar';
import { Container } from './styles.js';
import flip from '../../assets/fliperama.svg'
import dsigner from '../../assets/dsigner.svg'
import roteirista from '../../assets/video.svg'
import programador from '../../assets/web-programming.svg';
import joystick from '../../assets/joystick.svg'
import trofeu from '../../assets/trophy.svg'
import chapeu from '../../assets/mortarboard.svg'
import ajuda from '../../assets/support.svg'
import lista from '../../assets/profiles.svg'

export default class Main extends Component {
  render() {
    return (
      <>
        <NavBar porps={this.props} />
        <Container>
          <header>
            <aside>
              <h2>Criar um jogo é uma tarefa difícil, criar um jogo sozinho é uma tarefa quase impossível...</h2>
              <h3>A Game Core acredita no potencial da comunidade!</h3>
              <button>Quero fazer parte da comunidade</button>
            </aside>
            <img src={flip} />
          </header>
          <section id="praque">
            <div>
              <h2>Para quem é Game Core?</h2>
              <aside>
                <div><img src={dsigner} /><p>Designers</p></div>
                <div><img src={programador} /><p>Programadores</p></div>
                <div><img src={roteirista} /><p>Roteiristas</p></div>
                <div><img src={joystick} /><p>Gamers</p></div>
              </aside>
            </div>
          </section>
          <section id="vantagem">
            <div>
              <img src={trofeu} />
              <h4>Interface gameficada</h4>
              <p>Quanto mais interagir, cumprir missões e submeter projetos mais pontos você ganha. Aqui seu conhecimento é reconhecido e sua contribuição recompensada com prêmios.</p>
            </div>
            <div>
              <img src={lista} />
              <h4>Portifólio Facilitado</h4>
              <p>Com a disposição dos seus projetos em linha do tempo e todas as suas contribuições a comunidade registrada, montar seu portfolio fica muito mais fácil</p>
            </div>
            <div>
              <img src={ajuda} />
              <h4>Encontre parceiros</h4>
              <p>Divulgue uma ideia ou simplesmente entre em contato com desenvolvedores que batem com o perfil que você precisa para concluir ou iniciar aquele projeto</p>
            </div>
            <div>

              <img src={chapeu} />
              <h4>Se desenvolva</h4>
              <p>Melhore suas habilidades, troque experiências e aprenda com as dicas do nosso portal. Agora não tem desculpa pra crescer no mercado!</p>


            </div>
          </section>
        </Container>
      </>
    );
  }
}
