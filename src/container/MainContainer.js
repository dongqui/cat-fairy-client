import { useSelector } from 'react-redux';
import React from 'react';
import SelectCat from '../components/SelectCat';
import SideMenu from '../components/SideBar';
import { CoinHistoryContainer } from '../container/index';
import backgroundMain from '../asset/img/배경.png'
import { Background } from '../common';

export function MainContainer() {
  const { isSelectCatOpen } = useSelector(state => state.main);

  return (
    <Background url={backgroundMain}>
      <SideMenu/>
      { isSelectCatOpen && <SelectCat/> }
      <CoinHistoryContainer/>
    </Background>
  )
}
