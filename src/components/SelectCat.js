import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Modal } from '../common';
import cheeseCat from '../asset/img/치즈냥.png'
import blackCat from '../asset/img/깜장냥.png'
import dottedCat from '../asset/img/점냥이.png'
import greyCat from '../asset/img/회색냥.png'
import whiteCate from '../asset/img/흰냥.png'
import SpeechBalloon from './SpeechBalloon';
import { Maybe } from './Maybe';

function SelectCat() {
  const [ selectedCat, setSelectedCat ] = useState(null);
  const cats = [
    {src: cheeseCat, alt: 'cheeseCat'},
    {src: blackCat, alt: 'blackCat'},
    {src: dottedCat, alt: 'dottedCat'},
    {src: greyCat, alt: 'greyCat'},
    {src: whiteCate, alt: 'whiteCate'},
  ];

  return (
    <S.SelectCatModal onChange={(e) => setSelectedCat(e.target.value)}>
      {
        cats.map(({ src, alt}) => (
          <S.CatImgWrapper isSelected={selectedCat === alt}>
            <Maybe test={selectedCat === alt}>
              <SpeechBalloon top={-80} right={0}>
                <S.SelectCatConfirm>안녕</S.SelectCatConfirm>
              </SpeechBalloon>
            </Maybe>
            <input type="radio" name="test" value={alt}/>
            <img alt={alt} src={src}/>
          </S.CatImgWrapper>
        ))
      }
    </S.SelectCatModal>
  )
}
const SelectCatConfirm = styled.div`
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
