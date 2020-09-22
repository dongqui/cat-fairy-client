import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LoginBridgePage, MainPage, IntroPage } from './page/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/loginBridge' component={LoginBridgePage}/>
        <Route exact path='/main' component={MainPage}/>
        <Route exact path='/' component={IntroPage}/>
      </Router>
    </div>
  );
}

export default App;
