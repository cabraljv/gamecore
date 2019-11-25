import React, { Component } from 'react';
import { Container, } from './styles';
import NavBar from '../../components/NavBar';
import bg from '../../assets/bg_login.png'
export default class Login extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>

          <div>
            <h2>Login</h2>
            <form>
              <label>E-MAIL</label>
              <input title="email" type="email" id="email" placeholder="Insira seu e-mail aqui" />
              <label>SENHA</label>
              <input title="password" id="password" type="password" placeholder="Insira sua senha" />
              <a>Esqueceu sua senha ?</a>
              <div>
                <button><p>Entrar</p></button>
              </div>

            </form>
          </div>
          <a href="/cadastrar">Não tem conta ? Cadastre-se</a>
        </Container>
      </>
    );
  }
}
