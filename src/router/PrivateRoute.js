import * as React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRouter = ({ Page, exact, path }) => {
  const user = useSelector(state => state.auth.user);
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        if (user) {
          return <Page/>;
        } else {
          return (
            <Redirect to='/'/>
          );
        }
      }}
    >
    </Route>
  );
};

export default PrivateRouter;

