import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import PrivateRouter from './PrivateRoute';
import { LoginBridgePage, MainPage, IntroPage } from '../page';


function Router() {
  return (
    <BrowserRouter>
      <Route exact path='/loginBridge' component={LoginBridgePage}/>
      <Route exact path='/' component={IntroPage}/>
      <Route exact path='/main' component={MainPage}/>
    </BrowserRouter>
  );
}

export default Router;
