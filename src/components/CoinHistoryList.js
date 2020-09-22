import React from 'react';
import styled from 'styled-components';
import { HandDrawnBorder } from '../common';
import CoinHistoryItem from './CoinHistoryItem';

const S = {};
S.CoinHistoryContainer = styled.ul`
  ${HandDrawnBorder};
  display: flex;
  flex-direction: column;
`

function CoinHistoryList() {
  return(
    <S.CoinHistoryContainer>

    </S.CoinHistoryContainer>
  )
}

export default CoinHistoryList;
