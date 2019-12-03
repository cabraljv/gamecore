import React, { Component } from 'react';
import { Container, } from './styles';
import NavBar from '../../components/NavBar';
import api from '../../services/api'

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", passwd: "", specialty: "Prograador" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit() {
    if (this.state.email === "") {
      alert('Preenxa todos os campos')
    } else {
      const req = await api.post('/user', {
        email: this.state.email,
        passwd: this.state.passwd,
        username: this.state.username,
        name: this.state.name,
        specialty: this.state.specialty
      });
      const { cod, response } = req.data
      if (cod === 201) {
        this.props.history.push('/login')

      } else {
        alert('Campos inválidos')
      }
    }

  }
  render() {
    return (
      <>
        <NavBar />
        <Container>

          <div>
            <h2>Cadastrar</h2>
            <form>
              <label>Nome</label>
              <input onChange={(text) => { this.setState({ name: text.target.value }) }} title="name" type="name" id="nome" placeholder="Insira seu nome aqui" />
              <label>Nickname</label>
              <input onChange={(text) => { this.setState({ username: text.target.value }) }} title="name" type="name" id="nome" placeholder="Insira seu nickname" />
              <label>E-mail</label>
              <input onChange={(text) => { this.setState({ email: text.target.value }) }} title="email" type="email" id="email" placeholder="Insira seu e-mail aqui" />
              <label>Senha</label>
              <input onChange={(text) => { this.setState({ passwd: text.target.value }) }} title="password" id="password" type="password" placeholder="Insira sua senha" />
              <label>Repita a senha</label>
              <input onChange={(text) => { this.setState({ repasswd: text.target.value }) }} title="password" id="password" type="password" placeholder="Repita sua senha" />
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
                <button type="button" onClick={this.handleSubmit}><p>Cadastrar</p></button>
              </div>

            </form>
          </div>
          <a>Já tem conta ? Entrar</a>
        </Container>
      </>
    );
  }
}
