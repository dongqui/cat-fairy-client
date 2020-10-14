import React from 'react';
import styled from 'styled-components';
import { Modal } from '../common';
import cheeseCat from '../asset/img/치즈냥.png'
import blackCat from '../asset/img/깜장냥.png'
import dottedCat from '../asset/img/점냥이.png'
import greyCat from '../asset/img/회색냥.png'
import whiteCate from '../asset/img/흰냥.png'

function SelectCat() {
  return (
    <S.SelectCatModal>
      <S.CatImgWrapper><img alt="cheese" src={cheeseCat}/></S.CatImgWrapper>
      <S.CatImgWrapper><img alt="black" src={blackCat}/></S.CatImgWrapper>
      <S.CatImgWrapper><img alt="dotted" src={dottedCat}/></S.CatImgWrapper>
      <S.CatImgWrapper><img alt="grey" src={greyCat}/></S.CatImgWrapper>
      <S.CatImgWrapper><img alt="white" src={whiteCate}/></S.CatImgWrapper>
    </S.SelectCatModal>
  )
}

const SelectCatModal = styled(Modal)`
  display: flex;
  flex-wrap: wrap;
  font-size:2rem;
`
const CatImgWrapper = styled.div`
  flex-basis: 33%;
  
  > img {
    width: 100%;
  }
`

const S = {
  SelectCatModal,
  CatImgWrapper,
}

export default SelectCat;
