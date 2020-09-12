import React, { useEffect } from 'react';
import SelectCat from '../components/main/SelectCat';
import SideMenu from '../components/main/SideMenu';
import backgroundMain from '../asset/img/배경.png'
import { Background } from '../components/shared';
import { useDispatch, useSelector } from 'react-redux';

function Main() {

  const dispatch = useDispatch();
  const { isSelectCatOpen } = useSelector(state => state.main);

  useEffect(() => {

  }, [])

  return (
    <Background url={backgroundMain}>
      <SideMenu/>
      { isSelectCatOpen && <SelectCat/> }
    </Background>
  )
}

export default Main;
