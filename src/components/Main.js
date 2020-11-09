import React from 'react';
import backgroundMain from '../asset/img/배경.png'
import { Background } from '../common';
import SideBar from './SideBar';

function Main() {
  return (
    <Background url={backgroundMain}>
      <SideBar/>
    </Background>
  )
}

export default Main;
