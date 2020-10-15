import React from 'react';
import styled from 'styled-components';
import { Modal } from '../../common';
import CommitHistoryList from './CommitHistoryList';

function CommitHistory() {
  return(
    <S.CommitHistoryModal>
      <CommitHistoryList/>
    </S.CommitHistoryModal>
  )
}

const CommitHistoryModal = styled(Modal)`
  width: 30%;
  height: 500px;
`;

const S = {
  CommitHistoryModal,
};

export default CommitHistory;
