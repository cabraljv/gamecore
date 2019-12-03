import React, { useEffect } from 'react';
import logo from '../../assets/projectslogo.png'
import { Container } from './styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import api from '../../services/api'

export default function NavBarProjects() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userLoged, setUserLoged] = React.useState({ profile_pic: '', username: '' });


  const getUser = async () => {
    const token = await localStorage.getItem('token')
    const req = await api.get('/user/profile', { headers: { authorization: token } })
    const { cod, response } = req.data;
    return response;
  }
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const onLogout = async () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    async function aabdcd() {
      setUserLoged(await getUser());
    }
    aabdcd();
    // Execute the created function directly


  }, [])
  return (
    <Container>
      <img src={logo} />
      <ul>

        <li><a href="/">SOBRE</a></li>
        <li><a className="ativo" href="/">PROJETOS</a></li>
        <li><a href="/">EM ALTA</a></li>
        <li><a href="/">APRENDIZADO</a></li>
        <li id='btnNovo'><a href="/projects/new">NOVO PROJETO</a></li>
      </ul>
      <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <section>
          <img src={userLoged.profile_pic} />
          <p>{userLoged.username}</p>
        </section>
        <label></label>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ marginTop: 50 }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </Container>
  );
}
