import React from 'react';
import SelectCat from './SelectCat';
import SideMenu from './SideBar';
import backgroundMain from '../../../asset/img/배경.png'
import { Background } from '../../../common';

function Main({ isSelectCatOpen }) {
  return (
    <Background url={backgroundMain}>
      <SideMenu/>
      { isSelectCatOpen && <SelectCat/> }
    </Background>
  )
}

export default Main;
