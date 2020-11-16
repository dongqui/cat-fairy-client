import styled from 'styled-components';

function ChallengeStatusProgressBar() {
  return (
    <S.ChallengeProgressBarContainer>
      <S.ChallengeProgressBarInner/>
      <S.ChallengeProgressBarOuter/>
    </S.ChallengeProgressBarContainer>
  )
}

export default ChallengeStatusProgressBar;

const ChallengeProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
`;
const ChallengeProgressBarInner = styled.div`
  position: absolute;
  height: 10px;
  top: 5px;
  width: 100%;
  background-color: lightgray;
  border-radius: 5px;
`;
const ChallengeProgressBarOuter = styled.div`
  position: absolute;
  width: 60%;
  background-color: hotpink;
  height: 20px;
  z-index: 1;
  border-radius: 10px;
`;
const S = {
  ChallengeProgressBarContainer,
  ChallengeProgressBarInner,
  ChallengeProgressBarOuter
};
