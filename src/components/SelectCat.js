import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Modal } from '../common';
import cheeseCat from '../asset/img/치즈냥.png'
import blackCat from '../asset/img/깜장냥.png'
import dottedCat from '../asset/img/점냥이.png'
import greyCat from '../asset/img/회색냥.png'
import whiteCate from '../asset/img/흰냥.png'

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
            <input type="radio" name="test" value={alt}/>
            <img alt={alt} src={src}/>
          </S.CatImgWrapper>
        ))
      }
    </S.SelectCatModal>
  )
}

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
}

export default SelectCat;
