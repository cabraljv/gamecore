import React, { Component } from 'react';

import logo from '../../assets/projectslogo.png'
import { Container } from './styles';
import profile_pic from '../../assets/profile_pic.png'
import Destaque from '../../components/Destaque'
import ItemsList from '../../components/ItemsList';
import csgo from '../../assets/csgo.jpg'
import lol from '../../assets/lol.jpg'
import fortnite from '../../assets/fortnite.jpg'

export default class Projects extends Component {
  state = {
    data: [
      {
        img: csgo,
        title: 'Counter Strike: Global Offencive',
        version: "1.3",
        likes: 3452324,
      },
      {
        img: lol,
        title: 'League of Legends',
        version: "1.3",
        likes: 3452324,
      },
      {
        img: fortnite,
        title: 'Fortnite',
        version: "1.3",
        likes: 3452324,
      },
      {
        img: csgo,
        title: 'Counter Strike: Global Offencive',
        version: "1.3",
        likes: 3452324,
      },
      {
        img: fortnite,
        title: 'Fortnite',
        version: "1.3",
        likes: 3452324,
      },
      {
        img: lol,
        title: 'League of Legends',
        version: "1.3",
        likes: 3452324,
      },
    ]
  }
  render() {
    return (
      <Container>
        <nav>
          <img src={logo} />
          <ul>
            <li><a className="ativo" href="/">SOBRE</a></li>
            <li><a href="/">PROJETOS</a></li>
            <li><a href="/">EM ALTA</a></li>
            <li><a href="/">APRENDIZADO</a></li>
          </ul>
          <div>
            <section>
              <img src={profile_pic} />
              <p>cabraljv</p>
            </section>
            <label></label>
          </div>
        </nav>
        <header>
          <Destaque />
        </header>
        <section id="recomendados_top">
          <section id="recomendados">
            <h3>Projetos recomendados</h3>
            <ItemsList data={this.state.data} items_show={3} />
            <ItemsList data={this.state.data} items_show={3} />
          </section>
          <section id="top_dev" >
            <h3>Ranking 2019</h3>
            <div>
              <p>1º</p>
              <img src={profile_pic} />
              <span>
                <p>João Victor Cabral</p>
                <p>1223 pontos</p>
              </span>
            </div>
            <div>
              <p>2º</p>
              <img src={profile_pic} />
              <span>
                <p>João Victor Cabral</p>
                <p>1223 pontos</p>
              </span>
            </div>
            <div>
              <p>3º</p>
              <img src={profile_pic} />
              <span>
                <p>João Victor Cabral</p>
                <p>1223 pontos</p>
              </span>
            </div>
            <div>
              <p>4º</p>
              <img src={profile_pic} />
              <span>
                <p>João Victor Cabral</p>
                <p>1223 pontos</p>
              </span>
            </div>
            <div>
              <p>5º</p>
              <img src={profile_pic} />
              <span>
                <p>João Victor Cabral</p>
                <p>1223 pontos</p>
              </span>
            </div>
          </section>

        </section>
        <section id="my_projects">
          <h3>Meus Projetos</h3>
          <ItemsList data={this.state.data} items_show={4} />
        </section>
        <section id="subscribed">
          <h3>Seguindo</h3>
          <ItemsList data={this.state.data} items_show={4} />
        </section>
      </Container>
    );
  }
}
