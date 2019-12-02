import React, { Component } from 'react';
import camera from '../../assets/camera.svg'
import { Container, PreviewImage, PreViewLogo } from './styles';
import NavBarProjects from '../../components/NavBarProjects'
import bg from '../../assets/bg_login.png'
export default class NewProject extends Component {

  constructor(props) {
    super(props)
    this.state = {
      file1: null
    }
    this.handleChangeLogo = this.handleChangeLogo.bind(this);
    this.handleClickLogo = this.handleClickLogo.bind(this);
    this.handleChangeCover = this.handleChangeCover.bind(this);
    this.handleClickCover = this.handleClickCover.bind(this);
  }
  handleChangeCover(event) {
    this.setState({
      file1: URL.createObjectURL(event.target.files[0]),
    })
  }
  handleChangeLogo(event) {
    this.setState({
      file2: URL.createObjectURL(event.target.files[0]),
    })
  }
  handleClickCover(e) {
    this.refs.fileUploader.click();
  }
  handleClickLogo(e) {
    this.refs.fileUploaderLogo.click();
  }
  render() {
    return (
      <>
        <NavBarProjects />
        <Container>
          <header>
            <h2>NOVO PROJETO</h2>
          </header>
          <PreviewImage preview={this.state.file1} onClick={this.handleClickCover} >
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
                  <input title="name" id="name" placeholder="Insira nome do projeto" />
                </section>
                <section>
                  <label>CATEGORIA</label>
                  <input title="category" id="category" placeholder="ex: FPS, MOBA, RPG..." />
                </section>

              </div>

              <label>DESCRIÇÃO</label>

              <textarea rows="3" cols="60" name="description" placeholder="Uma breve descrição do seu projeto" />
              <label>CONTEUDO</label>
              <textarea rows="15" cols="60" name="content" placeholder="Insiea seu texto ou HTML" />
              <input type="file" id="project_cover" ref="fileUploader" style={{ display: "none" }} onChange={this.handleChangeCover} />
              <input type="file" id="project_logo" ref="fileUploaderLogo" style={{ display: "none" }} onChange={this.handleChangeLogo} />
            </form>
            <section id="right">
              <PreViewLogo preview={this.state.file2} onClick={this.handleClickLogo}>
                <p>ADICIONAR LOGO</p>
              </PreViewLogo>
              <button>CRIAR</button>
            </section>

          </section>

        </Container>
      </>
    );
  }
}
