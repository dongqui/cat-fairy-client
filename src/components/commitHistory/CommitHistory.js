import React from 'react';
import styled from 'styled-components';
import { Modal } from '../../common';
import CommitHistoryList from './CommitHistoryList';

function CommitHistory({ closeCommitHistory, }) {

  return(
    <S.CommitHistoryModal>
      <CommitHistoryList/>
    </S.CommitHistoryModal>
  )
}

const CommitHistoryModal = styled(Modal)`
  width: 60%;
  height: 500px;
  overflow-y: auto;

`;

const CommitHistoryModalFooter = styled.footer`
  border-top: 1px solid gray;
  padding: 24px 32px;
  text-align: right;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const S = {
  CommitHistoryModal,
  CommitHistoryModalFooter
};

export default CommitHistory;
