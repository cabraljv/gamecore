import React, { Component } from 'react';

import { Container, Background } from './styles';
import bg from '../../assets/destaque.png'
import capa from '../../assets/capa.png'
import Slider from "react-slick";
import api from '../../services/api'
export default class Destaque extends Component {
  state = {
    destaques: [],

    settings: {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    }
  }
  async componentDidMount() {
    const response = await api.get('highlight');
    this.setState({ destaques: response.data })
    console.log(response.data)

  }
  render() {
    return (
      <Container>
        <Slider {...this.state.settings}  >
          {this.state.destaques.map((item, index) => (
            <section key={index}>
              <Background bg={item.cover_img}>
                <img src={item.project_img} />
                <aside>
                  <h3>{item.title + "  " + index}</h3>
                  <p>{item.description}</p>
                </aside>
              </Background>
            </section>
          ))}
        </Slider>
      </Container >
    );
  }

}
