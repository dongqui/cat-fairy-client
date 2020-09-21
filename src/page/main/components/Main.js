import React from 'react';
import SelectCat from './SelectCat';
import SideMenu from './SideBar';
import CoinHistoryContainer from '../container/CoinHistoryContainer';
import backgroundMain from '../../../asset/img/배경.png'
import { Background } from '../../../common';

function Main({ isSelectCatOpen }) {
  return (
    <Background url={backgroundMain}>
      <SideMenu/>
      { isSelectCatOpen && <SelectCat/> }
      <CoinHistoryContainer/>
    </Background>
  )
}

export default Main;
