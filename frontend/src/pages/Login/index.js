import React, { Component } from 'react';
import { Container, } from './styles';
import NavBar from '../../components/NavBar';
import bg from '../../assets/bg_login.png'
import api from '../../services/api'
import { Link } from 'react-router-dom';
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { email: "", passwd: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit() {
    const req = await api.post('/user/login', {
      email: this.state.email,
      passwd: this.state.passwd
    })
    const { cod, response } = req.data
    if (cod === 200) {
      localStorage.setItem('token', response)
      this.props.history.push('/projects')

    }
  }
  render() {

    return (
      <>
        <NavBar />
        <Container>

          <div>
            <h2>Login</h2>
            <form >
              <label>E-MAIL</label>
              <input title="email" type="email" id="email" onChange={(text) => { this.setState({ email: text.target.value }) }} placeholder="Insira seu e-mail aqui" />
              <label>SENHA</label>
              <input title="password" id="password" type="password" onChange={(text) => { this.setState({ passwd: text.target.value }) }} placeholder="Insira sua senha" />
              <a>Esqueceu sua senha ?</a>
              <div>
                <button type='button' onClick={this.handleSubmit}><p>Entrar</p></button>
              </div>

            </form>
          </div>
          <Link to="/cadastrar">Não tem conta ? Cadastre-se</Link>
        </Container>
      </>
    );
  }
}
