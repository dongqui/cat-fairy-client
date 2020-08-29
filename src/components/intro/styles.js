import { HandDrawnBorder } from '../shared';
import styled, { keyframes } from 'styled-components';
import backgroundIntro from '../../asset/img/background-intro.png'
import { Background } from '../shared/index';

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

export default {
  Title,
  IntroMenuList,
  IntroMenuItem,
  Container
}
