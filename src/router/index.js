import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { LoginBridgePage, MainPage, IntroPage } from '../page';


function Router() {
  return (
    <BrowserRouter>
      <Route exact path='/loginBridge' component={LoginBridgePage}/>
      <Route exact path='/main' component={MainPage}/>
      <Route exact path='/' component={IntroPage}/>
    </BrowserRouter>
  );
}

export default Router;
