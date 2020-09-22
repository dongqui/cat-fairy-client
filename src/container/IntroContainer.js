import React from 'react';
import { useSelector } from 'react-redux';
import Intro from '../components/Intro';

export function IntroContainer() {
  const { user } = useSelector(state => state.auth);

  return (
    <Intro user={user}/>
  )
}
