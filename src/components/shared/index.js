import styled from 'styled-components';

export const HandDrawnBorderDiv = styled.div`
  box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border:solid 7px #41403E;
    &:hover {
      box-shadow:2px 8px 4px -6px hsla(0,0%,0%,.3);
    } 
`

export const Background = styled.div`
  background: ${props => `url(${props.url})`};
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
`
