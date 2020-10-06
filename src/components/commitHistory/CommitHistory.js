import React from 'react';
import styled from 'styled-components';
import { Modal } from '../../common';
import CommitHistoryList from './CommitHistoryList';

function CommitHistory() {
  return(
    <S.CommitHistoryModal>
      <S.CommitHistoryModalHeader>
        커밋 내역
      </S.CommitHistoryModalHeader>
      <CommitHistoryList/>
    </S.CommitHistoryModal>
  )
}

const CommitHistoryModal = styled(Modal)`
  width: 30%;
`;

const CommitHistoryModalHeader = styled.header`
  border-bottom: 2px gray solid;
`;

const S = {
  CommitHistoryModal,
  CommitHistoryModalHeader
};

export default CommitHistory;
