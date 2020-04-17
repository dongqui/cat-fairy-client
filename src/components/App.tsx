import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Token from './Token';
import Login from './login/Login';
import { navigate_replace } from '../modules/navigate';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (!token) {
      dispatch(navigate_replace('/login'));
    } else {

    }
  }, [dispatch])
  return (
    <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/github/callback" component={Token}/>
        </Switch>
    </div>
  );
}

export default App;
