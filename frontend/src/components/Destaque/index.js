import React from 'react';

import { Container, Background } from './styles';
import bg from '../../assets/destaque.png'
import capa from '../../assets/capa.png'
import Slider from "react-slick";

export default function Destaque() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Container>
      <Slider {...settings}  >
        <section>
          <Background bg={bg}>
            <img src={capa} />
            <aside>
              <h3>FREE FIRE</h3>
              <p>Projeto mais antigo da plataforma ganha patrocínio,
                e versão 6.4 será a final para lançamento.</p>
            </aside>
          </Background>
        </section>
        <section>
          <Background bg={bg}>
            <img src={capa} />
            <aside>
              <h3>FREE FIRE</h3>
              <p>Projeto mais antigo da plataforma ganha patrocínio,
                e versão 6.4 será a final para lançamento.</p>
            </aside>
          </Background>
        </section>
        <section>
          <Background bg={bg}>
            <img src={capa} />
            <aside>
              <h3>FREE FIRE</h3>
              <p>Projeto mais antigo da plataforma ganha patrocínio,
                e versão 6.4 será a final para lançamento.</p>
            </aside>
          </Background>
        </section>

      </Slider>
    </Container>
  );
}
