import React, { Component } from 'react';

import { Container, CoverImage } from './styles';
import NavBarProjects from '../../components/NavBarProjects';
import cover from '../../assets/destaque.png'
import logo from '../../assets/csgo.jpg'

export default class ProjectPage extends Component {
  state = {
    cover: "../../assets/capa.png",
    logo: "../../assets/csgo.jpg",
    title: "Counter Strike: Global Offencive",
    description: "Um dos jogos de fps mais famosos do mundo vem pedir ajuda a comunidade",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus ornare semper. Maecenas quis ex consectetur, tincidunt ligula quis, posuere quam. Curabitur porta enim non leo fringilla, in iaculis libero accumsan. Mauris ac mi ac augue bibendum volutpat. Maecenas et nunc diam. Sed at erat venenatis erat luctus volutpat. Sed pharetra tortor quis euismod ornare. Donec malesuada sollicitudin velit, ut hendrerit metus mollis eu. Integer viverra quis odio quis tristique. Nunc varius neque justo, ut convallis lorem facilisis non. Phasellus quis massa metus. Pellentesque a mauris ut sem venenatis tempor. Suspendisse gravida bibendum sapien, vel mollis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus ornare semper. Maecenas quis ex consectetur, tincidunt ligula quis, posuere quam. Curabitur porta enim non leo fringilla, in iaculis libero accumsan. Mauris ac mi ac augue bibendum volutpat. Maecenas et nunc diam. Sed at erat venenatis erat luctus volutpat. Sed pharetra tortor quis euismod ornare. Donec malesuada sollicitudin velit, ut hendrerit metus mollis eu. Integer viverra quis odio quis tristique. Nunc varius neque justo, ut convallis lorem facilisis non. Phasellus quis massa metus. Pellentesque a mauris ut sem venenatis tempor. Suspendisse gravida bibendum sapien, vel mollis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus ornare semper. Maecenas quis ex consectetur, tincidunt ligula quis, posuere quam. Curabitur porta enim non leo fringilla, in iaculis libero accumsan. Mauris ac mi ac augue bibendum volutpat. Maecenas et nunc diam. Sed at erat venenatis erat luctus volutpat. Sed pharetra tortor quis euismod ornare. Donec malesuada sollicitudin velit, ut hendrerit metus mollis eu. Integer viverra quis odio quis tristique. Nunc varius neque justo, ut convallis lorem facilisis non. Phasellus quis massa metus. Pellentesque a mauris ut sem venenatis tempor. Suspendisse gravida bibendum sapien, vel mollis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus ornare semper. Maecenas quis ex consectetur, tincidunt ligula quis, posuere quam. Curabitur porta enim non leo fringilla, in iaculis libero accumsan. Mauris ac mi ac augue bibendum volutpat. Maecenas et nunc diam. Sed at erat venenatis erat luctus volutpat. Sed pharetra tortor quis euismod ornare. Donec malesuada sollicitudin velit, ut hendrerit metus mollis eu. Integer viverra quis odio quis tristique. Nunc varius neque justo, ut convallis lorem facilisis non. Phasellus quis massa metus. Pellentesque a mauris ut sem venenatis tempor. Suspendisse gravida bibendum sapien, vel mollis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus ornare semper. Maecenas quis ex consectetur, tincidunt ligula quis, posuere quam. Curabitur porta enim non leo fringilla, in iaculis libero accumsan. Mauris ac mi ac augue bibendum volutpat. Maecenas et nunc diam. Sed at erat venenatis erat luctus volutpat. Sed pharetra tortor quis euismod ornare. Donec malesuada sollicitudin velit, ut hendrerit metus mollis eu. Integer viverra quis odio quis tristique. Nunc varius neque justo, ut convallis lorem facilisis non. Phasellus quis massa metus. Pellentesque a mauris ut sem venenatis tempor. Suspendisse gravida bibendum sapien, vel mollis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus ornare semper. Maecenas quis ex consectetur, tincidunt ligula quis, posuere quam. Curabitur porta enim non leo fringilla, in iaculis libero accumsan. Mauris ac mi ac augue bibendum volutpat. Maecenas et nunc diam. Sed at erat venenatis erat luctus volutpat. Sed pharetra tortor quis euismod ornare. Donec malesuada sollicitudin velit, ut hendrerit metus mollis eu. Integer viverra quis odio quis tristique. Nunc varius neque justo, ut convallis lorem facilisis non. Phasellus quis massa metus. Pellentesque a mauris ut sem venenatis tempor. Suspendisse gravida bibendum sapien, vel mollis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus ornare semper. Maecenas quis ex consectetur, tincidunt ligula quis, posuere quam. Curabitur porta enim non leo fringilla, in iaculis libero accumsan. Mauris ac mi ac augue bibendum volutpat. Maecenas et nunc diam. Sed at erat venenatis erat luctus volutpat. Sed pharetra tortor quis euismod ornare. Donec malesuada sollicitudin velit, ut hendrerit metus mollis eu. Integer viverra quis odio quis tristique. Nunc varius neque justo, ut convallis lorem facilisis non. Phasellus quis massa metus. Pellentesque a mauris ut sem venenatis tempor. Suspendisse gravida bibendum sapien, vel mollis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus ornare semper. Maecenas quis ex consectetur, tincidunt ligula quis, posuere quam. Curabitur porta enim non leo fringilla, in iaculis libero accumsan. Mauris ac mi ac augue bibendum volutpat. Maecenas et nunc diam. Sed at erat venenatis erat luctus volutpat. Sed pharetra tortor quis euismod ornare. Donec malesuada sollicitudin velit, ut hendrerit metus mollis eu. Integer viverra quis odio quis tristique. Nunc varius neque justo, ut convallis lorem facilisis non. Phasellus quis massa metus. Pellentesque a mauris ut sem venenatis tempor. Suspendisse gravida bibendum sapien, vel mollis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus ornare semper. Maecenas quis ex consectetur, tincidunt ligula quis, posuere quam. Curabitur porta enim non leo fringilla, in iaculis libero accumsan. Mauris ac mi ac augue bibendum volutpat. Maecenas et nunc diam. Sed at erat venenatis erat luctus volutpat. Sed pharetra tortor quis euismod ornare. Donec malesuada sollicitudin velit, ut hendrerit metus mollis eu. Integer viverra quis odio quis tristique. Nunc varius neque justo, ut convallis lorem facilisis non. Phasellus quis massa metus. Pellentesque a mauris ut sem venenatis tempor. Suspendisse gravida bibendum sapien, vel mollis tellus."
  }
  render() {
    return (
      <>
        <NavBarProjects />
        <Container>
          <header>

            <CoverImage img={cover}>
              <h2>{this.state.title}</h2>
            </CoverImage>
          </header>
          <div id="bordinha">
            <span ></span>
            <p>DESCRIÇÃO</p>
            <span ></span>
          </div>
          <section id="title">
            <p>{this.state.description}</p>
            <img src={logo} />
          </section>
          <div id="bordinha">
            <span ></span>
            <p>SOBRE</p>
            <span ></span>
          </div>
          <section id="content">
            <p>{this.state.content}</p>
          </section>
          <div id="bordinha">
            <span ></span>
            <p>COMENTÁRIOS</p>
            <span ></span>
          </div>

        </Container>
      </>
    );
  }
}
