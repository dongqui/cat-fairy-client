import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Token from './Token';

function App() {
  return (
    <div className="App">
      <a
          className="App-link"
          href="https://github.com/login/oauth/authorize?client_id=5c82987314849c415fa5&scope=user"
          rel="noopener noreferrer"
        >
          github
        </a>
        <Switch>
          <Route exact path="/github/callback" component={Token}/>
        </Switch>
    </div>
  );
}

export default App;
