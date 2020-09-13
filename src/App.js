import React from 'react';
import _Intro from './page/intro/container/_Intro';
import _Main from './page/main/container/_Main';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import _LoginBridge from './page/intro/container/_LoginBridge';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/loginBridge' component={_LoginBridge}/>
        <Route exact path='/main' component={_Main}/>
        <Route exact path='/' component={_Intro}/>
      </Router>
    </div>
  );
}

export default App;
