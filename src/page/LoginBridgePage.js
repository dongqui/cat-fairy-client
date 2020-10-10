import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithGithub, loginSuccess } from '../store/auth';
import { fireAuth } from '../firebase'
import { Maybe } from '../components/Maybe';

export function LoginBridgePage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    const getRedirectResultOrLoginRequest = async () => {
      const redirectResult = await fireAuth.getRedirectResult();
      if (redirectResult.additionalUserInfo) {
        dispatch(loginSuccess(
          {
            uid: redirectResult.user.uid,
            ...redirectResult.additionalUserInfo
          }));
      } else {
        dispatch(loginWithGithub());
      }
    }

    getRedirectResultOrLoginRequest();
  }, [dispatch])

  return (
    <>
      <Maybe test={user}>
        <Redirect to='/main'/>
      </Maybe>
      <div>
        Loading...
      </div>
    </>
  )
}
