import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../modules/index';
import queryString from 'query-string';
import { Location, History } from 'history';
import { fetchToken } from '../modules/auth';

interface IProps {
  location: Location,
  history: History
}

function Token({ location, history } :IProps) {
  const dispatch = useDispatch();
  const { user } = useTypedSelector(state => state.auth);
  
  useEffect(() => {
    let { code } = queryString.parse(location.search);
    dispatch(fetchToken({ code }));
  }, [location.search, dispatch])

  useEffect(() => {
    // todo - useEffect dependency warning 해결 검색, 자동 로그인 물어보는 창
    if (user) {
      window.localStorage.setItem('token', user.token);
      history.replace('/');
    }
  }, [user, history])
  
  return (
    <>
      <h2>asdfsdf</h2>
    </>
  )
}

export default Token