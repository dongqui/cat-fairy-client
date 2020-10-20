import React from 'react';
import styled from 'styled-components';
import { Modal } from '../common';
import cheeseCat from '../asset/img/치즈냥.png'
import blackCat from '../asset/img/깜장냥.png'
import dottedCat from '../asset/img/점냥이.png'
import greyCat from '../asset/img/회색냥.png'
import whiteCate from '../asset/img/흰냥.png'

function SelectCat() {

  const cats = [
    {src: cheeseCat, alt: 'cheeseCat' },
    {src: blackCat, alt: 'blackCat' },
    {src: dottedCat, alt: 'dottedCat' },
    {src: greyCat, alt: 'greyCat' },
    {src: whiteCate, alt: 'whiteCate' },
  ]

  return (
    <S.SelectCatModal>
      {
        cats.map(({ src, alt}) => (
          <S.CatImgWrapper>
            <input type="radio" name="test" value="big"/>
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
`
const CatImgWrapper = styled.label`
  flex-basis: 33%;
  > img {
    width: 100%;
  }

  &:hover {
    border-left: solid 1px lightgray;
    box-shadow: 8px 5px 5px 5px grey;
    border-radius: inherit;
    > img {
      width: 110%;
    }
  }
`

const S = {
  SelectCatModal,
  CatImgWrapper,
}

export default SelectCat;
