import React from 'react';
import profile_pic from '../../assets/profile_pic.png'
import logo from '../../assets/projectslogo.png'
import { Container } from './styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
export default function NavBarProjects() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container>
      <img src={logo} />
      <ul>
        <li><a href="/">SOBRE</a></li>
        <li><a className="ativo" href="/">PROJETOS</a></li>
        <li><a href="/">EM ALTA</a></li>
        <li><a href="/">APRENDIZADO</a></li>
      </ul>
      <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <section>
          <img src={profile_pic} />
          <p>cabraljv</p>
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
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Container>
  );
}
