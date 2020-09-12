import React, {useEffect} from 'react';
import SelectCat from './SelectCat';
import backgroundMain from '../../asset/img/배경.png'
import { Background } from '../shared/index';

function Main() {

  useEffect(() => {

  })

  return(
    <Background url={backgroundMain}>
      <SelectCat/>
    </Background>
  )
}

export default Main;
