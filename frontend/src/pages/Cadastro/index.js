import React, { Component } from 'react';
import { Container, } from './styles';
import Header from '../../components/Header';

export default class Cadastro extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>

          <div>
            <h2>Cadastrar</h2>
            <form>
              <label>Nome</label>
              <input title="name" type="name" id="nome" placeholder="Insira seu nome aqui" />
              <label>E-mail</label>
              <input title="email" type="email" id="email" placeholder="Insira seu e-mail aqui" />
              <label>Senha</label>
              <input title="password" id="password" type="password" placeholder="Insira sua senha" />
              <label>Repita a senha</label>
              <input title="password" id="password" type="password" placeholder="Repita sua senha" />
              <div id="radios">
                <section>
                  <input type="radio" checked="checked" name="radio"></input>
                  <label>Programador</label>

                </section>

                <section>
                  <input type="radio" checked="checked" name="radio"></input>
                  <label>Designer</label>

                </section>

                <section>
                  <input type="radio" checked="checked" name="radio"></input>
                  <label>Investidor/Empresa</label>

                </section>

              </div>
              <div>
                <button><p>Cadastrar</p></button>
              </div>

            </form>
          </div>
          <a>Já tem conta ? Entrar</a>
        </Container>
      </>
    );
  }
}
