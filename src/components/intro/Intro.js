import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithGithub } from '../../store/auth';
import { Redirect } from 'react-router-dom';
import backgroundIntro from '../../asset/img/background-intro.png'
import { Background } from '../shared/index';
import S from './styles';

function Intro() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const submit = () => {
    dispatch(loginWithGithub());
  }
  return (
    user ? <Redirect to='/'/> :
    <Background url={backgroundIntro}>
      <S.Container>
        <S.Title>이것은 제목이다</S.Title>
        <S.IntroMenuList>
          <S.IntroMenuItem
            onClick={submit}
          >
            Github으로 게임시작
          </S.IntroMenuItem>
          <S.IntroMenuItem>도움말</S.IntroMenuItem>
        </S.IntroMenuList>
      </S.Container>
    </Background>
  )
}

export default Intro;
