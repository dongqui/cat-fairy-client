import React from 'react';
import './App.css';
import NavBar from './navBar/NavBar';
import Login from './login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Route exact path='/login' component={Login}/>
      </Router>
    </div>
  );
}

export default App;
