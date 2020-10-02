import React from 'react';
import backgroundIntro from '../asset/img/background-intro.png'
import { Background, HandDrawnBorder } from '../common';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Intro({ user }) {
  return (
    <Background url={backgroundIntro}>
      <S.Container>
        <S.Title>이것은 제목이다</S.Title>
        <S.IntroMenuList>
          <S.IntroMenuItem>
            <S._Link to="/loginBridge">
              {user ? '이어서 게임하기' : 'Github으로 게임시작'}
            </S._Link>
          </S.IntroMenuItem>
          <S.IntroMenuItem>도움말</S.IntroMenuItem>
        </S.IntroMenuList>
      </S.Container>
    </Background>
  )
}

const fadeIn = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Title = styled.h2`
  margin: 0;
  padding-top: 10px;
  font-size: 3rem;
  animation: ${fadeIn} 2s linear;
`

const IntroMenuList = styled.ul`
  padding: 5px 50px;
`
const IntroMenuItem = styled.li`
  ${HandDrawnBorder};
  margin: 15px auto 0 auto;
  list-style: none;
  border-width: 3px;
  width: 250px;
  padding: 15px;
  cursor: pointer;
`
const Container = styled.div`
  width: 50%;
  position: absolute;
  top: 30%;
  left: 15%;
`

const _Link = styled(Link)`
  color: black;
  text-decoration: none;
`

const S = {
  Title,
  IntroMenuList,
  IntroMenuItem,
  Container,
  _Link,
};

export default Intro;
