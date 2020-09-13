import React from 'react';
import Intro from './page/intro/container/Intro';
import Main from './page/main/container/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginBridge from './page/intro/container/LoginBridge';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/loginBridge' component={LoginBridge}/>
        <Route exact path='/main' component={Main}/>
        <Route exact path='/' component={Intro}/>
      </Router>
    </div>
  );
}

export default App;
