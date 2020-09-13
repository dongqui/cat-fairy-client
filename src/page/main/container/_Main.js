import React, { useEffect } from 'react';
import Main from '../components/Main';
import { useDispatch, useSelector } from 'react-redux';

function _Main() {

  const dispatch = useDispatch();
  const { isSelectCatOpen } = useSelector(state => state.main);

  useEffect(() => {

  }, [])

  return (
    <Main
      isSelectCatOpen={isSelectCatOpen}/>
  )
}

export default _Main;
