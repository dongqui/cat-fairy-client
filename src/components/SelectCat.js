import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Modal, SpeechBalloon } from '../common';
import { Maybe } from './Maybe';

function SelectCat({ cats, selectCat }) {
  const [ selectedCat, setSelectedCat ] = useState(null);

  return (
    <S.SelectCatModal onChange={(e) => setSelectedCat(e.target.value)}>
      {
        cats.map(({ src, alt}) => (
          <S.CatImgWrapper key={alt} isSelected={selectedCat === alt}>
            <Maybe test={selectedCat === alt}>
              <S.SelectCatConfirm top={-80} right={0}>
                <button onClick={selectCat(selectedCat)}>OK</button>
              </S.SelectCatConfirm>
            </Maybe>
            <input type="radio" name="test" value={alt}/>
            <img alt={alt} src={src}/>
          </S.CatImgWrapper>
        ))
      }
    </S.SelectCatModal>
  )
}
const SelectCatConfirm = styled(SpeechBalloon)`
  padding: 24px;
  background-color: peachpuff;
`;

const SelectCatModal = styled(Modal)`
  display: flex;
  flex-wrap: wrap;
`;
const SelectCatEffect = css`
  border-left: solid 1px lightgray;
  box-shadow: 8px 5px 5px 5px grey;
  border-radius: inherit;
  > img {
    width: 110%;
  }
`;
const CatImgWrapper = styled.label`
  position: relative;
  flex-basis: 33%;
  > input {
    display: none;
  }
  > img {
    width: 100%;
  }
  &:hover {
    ${SelectCatEffect}
  }
  ${props => (props.isSelected ? SelectCatEffect : '')};
`;
const S = {
  SelectCatModal,
  CatImgWrapper,
  SelectCatConfirm,
}

export default SelectCat;
