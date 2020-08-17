import React from 'react';
import './App.css';
import NavBar from './navBar/NavBar';
import Login from './login/Login';
import Intro from './intro/Intro';
import Main from './main/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Route exact path='/main' component={Main}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/intro' component={Intro}/>
      </Router>
    </div>
  );
}

export default App;
