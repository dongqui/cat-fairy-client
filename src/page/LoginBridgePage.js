import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithGithub, loginSuccess } from '../store/auth';
import { FireAuth } from '../firebase'

export function LoginBridgePage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    const getRedirectResultOrLoginRequest = async () => {
      const redirectResult = await FireAuth.getRedirectResult();
      if (redirectResult) {
        const user = redirectResult.user;
        dispatch(loginSuccess(user));
      } else {
        dispatch(loginWithGithub());
      }
    }

    getRedirectResultOrLoginRequest();
  }, [dispatch])

  return (
    <div>
      Loading...
    </div>
  )
}
