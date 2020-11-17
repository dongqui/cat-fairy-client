import styled from 'styled-components';
import Avatar from '../Avatar';

function ChallengeStatusProgressBar() {
  return (
    <S.ChallengeProgressBarContainer>
      <S.ChallengeProgressBarInner/>
      <S.ChallengeProgressBarOuter/>
      <S.ChallengeProgressBarAvatarWrapper>
        <Avatar src={'https://www.w3schools.com/w3images/avatar5.png'} alt={'User'} size={40}/>
      </S.ChallengeProgressBarAvatarWrapper>
    </S.ChallengeProgressBarContainer>
  )
}

export default ChallengeStatusProgressBar;

const ChallengeProgressBarContainer = styled.div`
  position: relative;
  height: 10px;
  width: 70%;
`;
const ChallengeProgressBarInner = styled.div`
  position: absolute;
  height: 10px;
  width: 100%;
  background-color: lightgray;
  border-radius: 5px;
`;
const ChallengeProgressBarOuter = styled.div`
  position: absolute;
  width: 60%;
  background-color: hotpink;
  height: 10px;
  z-index: 1;
  border-radius: 10px;
`;
const ChallengeProgressBarAvatarWrapper = styled.div`
  position: absolute;
  top: -15px;
  left: 55%;
  z-index: 1;
`;
const S = {
  ChallengeProgressBarContainer,
  ChallengeProgressBarInner,
  ChallengeProgressBarOuter,
  ChallengeProgressBarAvatarWrapper,
};
