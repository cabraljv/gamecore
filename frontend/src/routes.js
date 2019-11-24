import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Projects from './pages/Projects';

export default function Routes() {
  return (
    <BrowserRouter basename="/" >
      <Route path='/' exact component={Main} />
      <Route path='/projects' component={Projects} />
      <Route path='/cadastrar' component={Cadastro} />
    </BrowserRouter>
  );
}
