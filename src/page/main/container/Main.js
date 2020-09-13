import React, { useEffect } from 'react';
import SelectCat from '../components/SelectCat';
import SideMenu from '../components/SideBar';
import backgroundMain from '../../../asset/img/배경.png'
import { Background } from '../../../common';
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
