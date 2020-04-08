import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../modules/index';
import queryString from 'query-string';
import { Location } from 'history';
import { fetchToken } from '../modules/token';

interface IProps {
  location: Location;
}

function Token({ location } :IProps) {
  const dispatch = useDispatch();
  const { token } = useTypedSelector(state => state.token);
  let { code } = queryString.parse(location.search);
  alert(token);
  useEffect(() => {
    if (code && !Array.isArray(code)) {
      dispatch(fetchToken(code));
    }
  }, [])
  
  return (
    <>
      <h2>asdfsdf</h2>
    </>
  )
}

export default Token