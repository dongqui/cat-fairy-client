import * as React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRouter = ({ Page, location, exact, path }) => {
  const user = useSelector(state => state.auth.user);
  return (
    <Route
      exact={exact}
      path={path}
      render={props => {
        if (user) {
          return <Page/>;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/intro",
                state: { from: location }
              }}
            />
          );
        }
      }}
    >
    </Route>
  );
};

export default PrivateRouter;

