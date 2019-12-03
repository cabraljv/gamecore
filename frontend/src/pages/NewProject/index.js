import React, { Component } from 'react';
import camera from '../../assets/camera.svg'
import { Container, PreviewImage, PreViewLogo } from './styles';
import NavBarProjects from '../../components/NavBarProjects'
import bg from '../../assets/bg_login.png'
import Axios from 'axios';
import api from '../../services/api';
import LoadingScreen from '../../components/LoadingScreen';
export default class NewProject extends Component {

  constructor(props) {
    super(props)
    this.state = {
      file1: null,
      loading: false,
    }
    this.handleChangeLogo = this.handleChangeLogo.bind(this);
    this.handleClickLogo = this.handleClickLogo.bind(this);
    this.handleChangeCover = this.handleChangeCover.bind(this);
    this.handleClickCover = this.handleClickCover.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeCover(event) {
    this.setState({
      file1: event.target.files[0],
      preview1: URL.createObjectURL(event.target.files[0])
    });
  }
  handleChangeLogo(event) {
    this.setState({
      file2: event.target.files[0],
      preview2: URL.createObjectURL(event.target.files[0])
    });


  }
  handleClickCover(e) {
    this.refs.fileUploader.click();
  }
  handleClickLogo(e) {
    this.refs.fileUploaderLogo.click();
  }
  async handleSubmit() {
    const token = await localStorage.getItem('token')
    this.setState({
      loading: true,
    })
    console.log(token)
    let form = new FormData();
    form.append('cover_img', this.state.file1)
    form.append('logo', this.state.file2)
    form.append('title', this.state.name);
    form.append('type', this.state.type);
    form.append('description', this.state.description);
    form.append('content', this.state.content);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        authorization: token
      }
    }
    const req = await api.post('/project', form, config)
    this.setState({
      loading: false,
    })
    const { cod, response } = req.data;
    if (cod === 201) {
      this.props.history.push(`/projects/${response.id}`)
    }

  }
  verificaLoading() {

    if (this.state.loading) {
      return (<LoadingScreen />)
    }

  }
  render() {
    return (
      <>

        <NavBarProjects />
        {this.verificaLoading()}

        <Container>
          <header>
            <h2>NOVO PROJETO</h2>
          </header>
          <PreviewImage preview={this.state.preview1} onClick={this.handleClickCover} >
            <img src={camera} />
            <p>ADICIONAR CAPA</p>
          </PreviewImage>
          <div id="tracinho">
            <span></span>
            <span></span>
          </div>
          <section>
            <form>
              <div>
                <section>
                  <label>NOME DO PROJETO</label>
                  <input title="name" id="name" placeholder="Insira nome do projeto" onChange={(text) => { this.setState({ name: text.target.value }) }} />
                </section>
                <section>
                  <label>CATEGORIA</label>
                  <input onChange={(text) => { this.setState({ type: text.target.value }) }} title="category" id="category" placeholder="ex: FPS, MOBA, RPG..." />
                </section>

              </div>

              <label>DESCRIÇÃO</label>

              <textarea onChange={(text) => { this.setState({ description: text.target.value }) }} rows="3" cols="60" name="description" placeholder="Uma breve descrição do seu projeto" />
              <label>CONTEUDO</label>
              <textarea onChange={(text) => { this.setState({ content: text.target.value }) }} rows="15" cols="60" name="content" placeholder="Insiea seu texto ou HTML" />
              <input type="file" id="project_cover" ref="fileUploader" style={{ display: "none" }} onChange={this.handleChangeCover} />
              <input type="file" id="project_logo" ref="fileUploaderLogo" style={{ display: "none" }} onChange={this.handleChangeLogo} />
            </form>
            <section id="right">
              <PreViewLogo preview={this.state.preview2} onClick={this.handleClickLogo}>
                <p>ADICIONAR LOGO</p>
              </PreViewLogo>
              <button onClick={this.handleSubmit}>CRIAR</button>
            </section>

          </section>

        </Container>
      </>
    );
  }
}
