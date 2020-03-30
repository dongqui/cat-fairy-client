import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CatchToken from './CatchToken';

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
          <Route exact path="/github/callback" component={CatchToken}/>
        </Switch>
    </div>
  );
}

export default App;