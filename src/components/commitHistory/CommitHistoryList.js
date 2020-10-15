import React from 'react';
import styled from 'styled-components';
import CommitHistoryItem, {
    CommitHistoryItemWrapper,
    CommitHistoryDate,
    CommitHistorySequence,
    CommitHistoryReward,
  } from './CommitHistoryItem';

function CommitHistoryList({ commitHistories }) {
  return(
    <S.CommitHistoryWrapper>
      <S.CommitHistoryHeaderWrapper>
        <S.CommitHistoryDate> 커밋 날짜 </S.CommitHistoryDate>
        <S.CommitHistorySequence>연속일</S.CommitHistorySequence>
        <S.CommitHistoryReward>보상</S.CommitHistoryReward>
      </S.CommitHistoryHeaderWrapper>
      {
        commitHistories||[1].map(commitHistory => <CommitHistoryItem key={'a'} commitHistory={commitHistory}/>)
      }
    </S.CommitHistoryWrapper>
  )
}

const CommitHistoryWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

const CommitHistoryHeaderWrapper = styled(CommitHistoryItemWrapper)` 
  border-bottom: 1px gray solid;
  font-weight: 800;
`;


const S = {
  CommitHistoryWrapper,
  CommitHistoryHeaderWrapper,
  CommitHistoryDate,
  CommitHistorySequence,
  CommitHistoryReward,
};

export default CommitHistoryList;
