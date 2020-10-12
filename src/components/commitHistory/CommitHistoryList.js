import React from 'react';
import styled from 'styled-components';
import CommitHistoryItem from './CommitHistoryItem';

function CommitHistoryList({ commitHistories }) {
  return(
    <S.CommitHistoryWrapper>
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

const S = {
  CommitHistoryWrapper
};

export default CommitHistoryList;
