import React from 'react';
import './App.css';
import NavBar from './navBar/NavBar';
import Login from './login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignUp from "./signup/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signUp' component={SignUp}/>
      </Router>
    </div>
  );
}

export default App;
