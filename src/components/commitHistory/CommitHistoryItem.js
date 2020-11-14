import React from 'react';
import styled from 'styled-components';

function CommitHistoryItem({ number}) {
  return (
    <S.CommitHistoryItemContainer>
      <S.CommitHistoryItemHeader>
        { number }
      </S.CommitHistoryItemHeader>
      <S.CommitHistoryItemMain>
        <S.CommitCheckCircle/>
      </S.CommitHistoryItemMain>
    </S.CommitHistoryItemContainer>
  )
}

const CommitHistoryItemContainer = styled.li`
  flex: 0 0 120px;
  margin: 5px;
  &:empty {
  height: 0;
  border: none;
}
`;
const CommitHistoryItemHeader = styled.header`
  background-color: #414141;
  color: #f5f5f5;
  text-align: center;
  width: 100%;
`;
const CommitHistoryItemMain = styled.main`
  width: 100%;
`;
const CommitCheckCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin: 10px auto 0 auto;
  background-color: green;
`
const S = {
  CommitHistoryItemContainer,
  CommitHistoryItemHeader,
  CommitHistoryItemMain,
  CommitCheckCircle,
};

export default CommitHistoryItem;
