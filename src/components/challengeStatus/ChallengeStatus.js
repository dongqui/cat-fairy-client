import React from 'react';
import styled from 'styled-components';
import { Modal } from '../../common';
import ChallengeStatusProgressBar from './ChallengeStatusProgressBar';
import BasicImage from '../BasicImage';
import whiteCate from '../../asset/img/흰냥.png'

function ChallengeStatus({ }) {

  return(
    <S.ChallengeStatusModal>
      <S.ChallengeStatusProgressBarContainer>
        <BasicImage src={'https://image.flaticon.com/icons/png/512/1768/1768116.png'} width={50} height={50} alt={'Start Icon'}/>
        <ChallengeStatusProgressBar/>
        <BasicImage src={whiteCate} width={80} height={80} alt={'End Icon'}/>
      </S.ChallengeStatusProgressBarContainer>
    </S.ChallengeStatusModal>
  )
}

const ChallengeStatusModal = styled(Modal)`
  width: 60%;
  height: 500px;
  padding: 50px 10px;
  overflow-y: auto;
`;
const ChallengeStatusProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

const S = {
  ChallengeStatusModal,
  ChallengeStatusProgressBarContainer,
};

export default ChallengeStatus;
