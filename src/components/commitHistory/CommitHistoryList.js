import React from 'react';
import styled from 'styled-components';
import CommitHistoryItem from './CommitHistoryItem';

function CommitHistoryList({ commitHistories }) {
  const arr = new Array(66).fill(0);
  return(
    <S.CommitHistoryListContainer>
      {
        arr.map((v, idx) => <CommitHistoryItem key={idx} number={idx}/>)
      }
      <CommitHistoryItem/>
    </S.CommitHistoryListContainer>
  )
}

const CommitHistoryListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px;
`;

const S = {
  CommitHistoryListContainer,
};

export default CommitHistoryList;
