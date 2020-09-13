import React from 'react';
import backgroundIntro from '../../../asset/img/background-intro.png'
import { Background } from '../../../common';
import S from '../components/styles';

function _Intro({ user }) {
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

export default _Intro;
