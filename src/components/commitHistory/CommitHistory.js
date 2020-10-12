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
  height: 500px;
`;

const CommitHistoryModalHeader = styled.header`
  border-bottom: 2px gray solid;
  padding: 12px 20px;
  font-family: 'Cafe24Oneprettynight', 'sans-serif';
`;

const S = {
  CommitHistoryModal,
  CommitHistoryModalHeader
};

export default CommitHistory;
