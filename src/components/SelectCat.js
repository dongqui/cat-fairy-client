import React from 'react';
import styled from 'styled-components';
import { HandDrawnBorder } from '../common';
import cheeseCat from '../asset/img/치즈냥.png'
import blackCat from '../asset/img/깜장냥.png'
import dottedCat from '../asset/img/점냥이.png'
import greyCat from '../asset/img/회색냥.png'
import whiteCate from '../asset/img/흰냥.png'

const Container = styled.div`
  ${HandDrawnBorder};
  width: 50%;
  background:white;
  display: flex;
  flex-wrap: wrap;
  font-size:2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Cat = styled.div`
  flex-basis: 33%;
  
  > img {
    width: 100%;
  }
`

function SelectCat() {
  return (
    <Container>
      <Cat><img alt="cheese" src={cheeseCat}/></Cat>
      <Cat><img alt="black" src={blackCat}/></Cat>
      <Cat><img alt="dotted" src={dottedCat}/></Cat>
      <Cat><img alt="grey" src={greyCat}/></Cat>
      <Cat><img alt="white" src={whiteCate}/></Cat>
    </Container>
  )
}

export default SelectCat;
