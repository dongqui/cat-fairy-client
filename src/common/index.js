import styled, { css } from 'styled-components';

export const HandDrawnBorder = css`
  box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border:solid 7px #41403E;
    &:hover {
      box-shadow:2px 8px 4px -6px hsla(0,0%,0%,.3);
    } 
`;
export const Background = styled.div`
  background: ${props => `url(${props.url})`};
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
`;
export const Modal = styled.div`
  ${HandDrawnBorder};
  background:white;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;
export const SpeechBalloon = styled.div`
  position: absolute;
  z-index: 1;
  top: ${props => props.top ? props.top : ''}px;
  right: ${props => props.right ? props.right : ''}px;
  bottom: ${props => props.bottom ? props.bottom : ''}px;
  left: ${props => props.left ? props.left : ''}px;
`;
