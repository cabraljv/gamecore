import React, { Component } from 'react';
import Slider from "react-slick";
import { Container } from './styles';
import Item from '../Item';
import csgo from '../../assets/csgo.jpg'
export default class ItemsList extends Component {
  state = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    data: this.props.data,
  }
  componentDidMount() {
    console.log(this.state.data)
  }

  render() {
    return (
      <Container>
        <Slider
          dots={false}
          infinite={true}
          slidesToShow={this.props.items_show}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={5000}
        >
          {this.state.data.map((itm, index) => (

            < section key={index} >
              <Item data={itm} />
            </section>
          ))}
        </Slider>
      </Container >
    );
  }
}
