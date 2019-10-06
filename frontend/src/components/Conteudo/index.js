import React from 'react';
import { Container } from './styles';
import capa from '../../assets/capa.png'
import perfil from '../../assets/perfil.jpg'
const Conteudo = () => {

  return (
    <Container>
      <section id="projetos">
        <h3>Projetos do mês</h3>
        <div>
          <img src={capa} />
          <aside>
            <h4>FREE FIRE</h4>
            <p>Lorem Ipsum is simply dummy text </p>
          </aside>

        </div>
        <div>
          <img src={capa} />
          <aside>
            <h4>FREE FIRE</h4>
            <p>Lorem Ipsum is simply dummy text </p>
          </aside>

        </div>
        <div>
          <img src={capa} />
          <aside>
            <h4>FREE FIRE</h4>
            <p>Lorem Ipsum is simply dummy text </p>
          </aside>

        </div>
      </section>
      <section id="emformacao">
        <h3>Equipes em formação</h3>
      </section>
      <section id="devs">
        <h3>Ranking Devs Agosto</h3>
        <div>
          <p className="posicao">#1</p>
          <img src={perfil} />
          <aside>
            <p>João Victor Cabral</p>
            <p>1500 pontos</p>
          </aside>

        </div>
        <div>
          <p className="posicao">#2</p>
          <img src={perfil} />
          <aside>
            <p>João Victor Cabral</p>
            <p>1500 pontos</p>
          </aside>

        </div>
        <div>
          <p className="posicao">#3</p>
          <img src={perfil} />
          <aside>
            <p>João Victor Cabral</p>
            <p>1500 pontos</p>
          </aside>

        </div>
        <div>
          <p className="posicao">#4</p>
          <img src={perfil} />
          <aside>
            <p>João Victor Cabral</p>
            <p>1500 pontos</p>
          </aside>

        </div>
        <div>
          <p className="posicao">#5</p>
          <img src={perfil} />
          <aside>
            <p>João Victor Cabral</p>
            <p>1500 pontos</p>
          </aside>

        </div>
      </section>
    </Container>
  )
};

export default Conteudo;
