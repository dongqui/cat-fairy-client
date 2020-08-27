import React from 'react';
import styled from 'styled-components';
import SelectCat from './SelectCat';
import backgroundMain from '../../asset/img/배경.png'
import { Background } from '../shared/index';

function Main() {
  return(
    <Background url={backgroundMain}>
      <SelectCat/>
    </Background>
  )
}

export default Main;
