import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithGithub } from '../store/auth';

export function LoginBridgePage() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    if (!user) {
      dispatch(loginWithGithub());
    }
  }, [user, dispatch])

  return (
    user ? <Redirect to='/main'/> :
    <div>
      Loading...
    </div>
  )
}
