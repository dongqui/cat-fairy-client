import React from 'react';
import styled from 'styled-components';
import { Modal } from '../../common';
import ChallengeStatusProgressBar from './ChallengeStatusProgressBar';

function ChallengeStatus({ closeChallengeStatus, }) {

  return(
    <S.ChallengeStatusModal>
      <ChallengeStatusProgressBar/>
    </S.ChallengeStatusModal>
  )
}

const ChallengeStatusModal = styled(Modal)`
  width: 60%;
  height: 500px;
  padding: 50px 10px;
  overflow-y: auto;
`;

const ChallengeStatusModalFooter = styled.footer`
  border-top: 1px solid gray;
  padding: 24px 32px;
  text-align: right;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const S = {
  ChallengeStatusModal,
  ChallengeStatusModalFooter
};

export default ChallengeStatus;
