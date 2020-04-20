import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../modules/index';
import { Route, Switch } from 'react-router-dom';
import Token from './Token';
import Login from './login/Login';
import { navigate_replace } from '../modules/navigate';
import { login } from '../modules/auth';

function App() {
  const dispatch = useDispatch();
  const { user } = useTypedSelector(state => state.auth);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      dispatch(login({ token }));
    } else {
      dispatch(navigate_replace('/login'));
    }
  }, [dispatch])

  useEffect(() => {
    if (user) {
      dispatch(navigate_replace('/main'));
    }
  }, [user, dispatch])

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
