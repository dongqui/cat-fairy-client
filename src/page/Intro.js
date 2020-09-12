import React from 'react';
import { useSelector } from 'react-redux';
import backgroundIntro from '../../asset/img/background-intro.png'
import { Background } from '../shared/index';
import S from './styles';

function Intro() {
  const { user } = useSelector(state => state.auth);

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

export default Intro;
