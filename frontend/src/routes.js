import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Projects from './pages/Projects';
import NewProject from './pages/NewProject';

export default function Routes() {
  return (
    <BrowserRouter basename="/gamecore" >
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/login' component={Login} />
        <Route path='/cadastrar' component={Cadastro} />
        <Route path='/projects/new' component={NewProject} />
      </Switch>
    </BrowserRouter>
  );
}
