import React from 'react';
import styled from 'styled-components';
import backgroundIntro from '../../asset/img/background-intro.png'
import { Background } from '../shared/index';

const fadeIn = `
  from { opacity: 0 };
  to { opacity: 0.7 };
`;

const Title = styled.div`
  position: absolute;
  font-size: 5rem;
  top: 35%;
  left: 20%;
`
const TouchStart = styled.div`
  position: absolute;
  font-size: 3rem;
  top: 50%;
  left: 30%;
  animation: ${fadeIn} 1s linear;
`
function Intro() {
  return (
    <Background url={backgroundIntro}>
      <Title>이것은 제목이다</Title>
      <TouchStart>Touch Start</TouchStart>
    </Background>
  )
}

export default Intro;
