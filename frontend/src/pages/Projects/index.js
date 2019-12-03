import React, { Component } from 'react';


import { Container } from './styles';
import Destaque from '../../components/Destaque'
import ItemsList from '../../components/ItemsList';
import csgo from '../../assets/csgo.jpg'
import lol from '../../assets/lol.jpg'
import fortnite from '../../assets/fortnite.jpg'
import NavBarProjects from '../../components/NavBarProjects';
import api from '../../services/api'

export default class Projects extends Component {
  state = {
    top: [],
    data: [
      {
        id: 2,
        logo: csgo,
        title: 'Counter Strike: Global Offencive',

      },
      {
        id: 3,
        logo: lol,
        title: 'League of Legends',

      },
      {
        id: 4,
        logo: fortnite,
        title: 'Fortnite',

      },
      {
        id: 5,
        logo: csgo,
        title: 'Counter Strike: Global Offencive',

      },
      {
        id: 6,
        logo: fortnite,
        title: 'Fortnite',

      },
      {
        id: 7,
        logo: lol,
        title: 'League of Legends',

      },
    ]
  }
  async componentDidMount() {
    const token = await localStorage.getItem('token')
    if (!token) {
      alert('Você precisa estar logado')
      this.props.history.push('/login')
    }
    const req = await api.get('/user/topdev');
    const { cod, response } = req.data;
    this.setState({ top: response })
    const req2 = await api.get('/projects/all', { headers: { authorization: token } })
    const { response: response2, cod: cod2 } = req2.data;
    console.log(response2)
    this.setState({ data: response2 })

  }
  render() {
    return (
      <Container>
        <NavBarProjects />

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
            {this.state.top.map((user, index) => (
              <div key={index}>
                <p>{index + 1}º</p>
                <img src={user.profile_pic} />
                <span>
                  <p>{user.name}</p>
                  <p>{user.score} pontos</p>
                </span>
              </div>
            ))}
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
