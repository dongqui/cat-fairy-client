import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../modules/index';
import queryString from 'query-string';
import { Location } from 'history';
import { fetchToken } from '../modules/auth';
import { navigate_replace } from '../modules/navigate';
import { setTokenOnAxiosHeader } from '../api/index';

interface IProps {
  location: Location,
}

function Token({ location } :IProps) {
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
      setTokenOnAxiosHeader(user.token);
      dispatch(navigate_replace('/main'));
    }
  }, [user, dispatch])
  
  return (
    <>
      <h2>로딩 중...</h2>
    </>
  )
}

export default Token