import React from 'react';
import { useSelector } from 'react-redux';
import Intro from '../components/Intro';

function _Intro() {
  const { user } = useSelector(state => state.auth);

  return (
    <Intro user={user}/>
  )
}

export default _Intro;
