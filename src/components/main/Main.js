import React from 'react';
import styled from 'styled-components';
import SelectCat from './SelectCat';
import background from '../../asset/img/배경.png'

const Background = styled.main`
  background: url(${background});
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
`

function Main() {
  return(
    <Background>
      <SelectCat/>
    </Background>
  )
}

export default Main;
