import React from 'react';
import styled from 'styled-components';

function CommitHistoryItem() {
  return (
    <S.CommitHistoryItemWrapper>
      <S.CommitHistoryDate>
        2020.07.01 ~ 2020.08.01
      </S.CommitHistoryDate>
      <S.CommitHistorySequence>
        31
      </S.CommitHistorySequence>
      <S.CommitHistoryReward>
        코인 31
      </S.CommitHistoryReward>
    </S.CommitHistoryItemWrapper>
  )
}

const CommitHistoryItemWrapper = styled.div`
  display: flex;
`;

const CommitHistoryDate = styled.div`
  flex: 7;
  text-align: center;
`;

const CommitHistorySequence = styled.div`
  flex: 2;
  text-align: center;
`;

const CommitHistoryReward = styled.div`
  flex: 3;
  text-align: center;
`;

const S = {
  CommitHistoryItemWrapper,
  CommitHistoryDate,
  CommitHistorySequence,
  CommitHistoryReward
};

export default CommitHistoryItem;
