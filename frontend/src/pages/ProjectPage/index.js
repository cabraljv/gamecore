import React, { Component } from 'react';

import { Container, CoverImage } from './styles';
import NavBarProjects from '../../components/NavBarProjects';
import cover from '../../assets/destaque.png'
import logo from '../../assets/csgo.jpg'
import api from '../../services/api'


export default class ProjectPage extends Component {
  state = {
    cover: null,
    logo: null,
    title: null,
    description: null,
    content: null,
    comments: [],
    user: {},
    commentContent: ""
  }
  constructor(props) {
    super(props)

    this.handleComment = this.handleComment.bind(this);
  }
  async componentDidMount() {
    const token = await localStorage.getItem('token')
    this.setState({ token })
    const req = await api.get(`/project/${this.props.match.params.id}`, { headers: { authorization: token } })
    const req_user = await api.get(`/user/profile`, { headers: { authorization: token } })
    const { cod, response } = req.data;
    const { cod: cod2, response: response2 } = req_user.data;
    this.setState({
      cover: response.project.cover_img,
      title: response.project.title,
      description: response.project.description,
      logo: response.project.logo,
      content: response.project.content,
      comments: response.comments,
      user: response2
    })
  }
  async handleComment() {
    const data = {
      content: this.state.commentContent,
      project_id: this.props.match.params.id,
    }
    console.log(data)
    const req = await api.post('/comment', data, { headers: { authorization: this.state.token } })
    const { cod, response } = req.data;
    if (cod === 200) {
      alert('Comentário criado')
    } else {
      alert(response)
    }
  }
  render() {
    return (
      <>
        <NavBarProjects />
        <Container>
          <header>

            <CoverImage img={this.state.cover}>
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
            <img src={this.state.logo} />
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
          <section id="comments">
            <div id="makecomment">
              <aside>
                <img src={this.state.user.profile_pic} />
                <p>{this.state.user.username}</p>
                <p>{this.state.user.score} pontos</p>
              </aside>
              <div>
                <textarea onChange={(text) => { this.setState({ commentContent: text.target.value }) }} rows={15} cols="120" placeholder="Insira seu comentário"></textarea>
                <button onClick={this.handleComment}>Comentar</button>
              </div>
            </div>
            {this.state.comments.map((item, index) => (
              <div key={index} id="comment">
                <aside>
                  <img src={item.user_pic} />
                  <p>{item.username}</p>
                  <p>{item.user_score} pontos</p>
                </aside>
                <div>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}

          </section>

        </Container>
      </>
    );
  }
}
