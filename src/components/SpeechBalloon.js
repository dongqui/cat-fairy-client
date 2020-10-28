import React from 'react';
import styled from 'styled-components';

function SpeechBalloon({ top, right, bottom, left, children }) {
  return (
    <S.SpeechBalloonContainer
      top={top}
      right={right}
      bottom={bottom}
      left={left}>
      { children }
    </S.SpeechBalloonContainer>
  );
}

export default SpeechBalloon;
const SpeechBalloonContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: ${props => props.top ? props.top : ''}px;
  right: ${props => props.right ? props.right : ''}px;
  bottom: ${props => props.bottom ? props.bottom : ''}px;
  left: ${props => props.left ? props.left : ''}px;
`;

const S = {
  SpeechBalloonContainer,
};
