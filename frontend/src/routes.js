import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Main} />
      <Route path='/login' component={Login} />
      <Route path='/cadastro' component={Cadastro} />
    </BrowserRouter>
  );
}
