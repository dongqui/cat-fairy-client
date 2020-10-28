import React  from 'react';
import SelectCat from '../components/SelectCat';
import { useDispatch } from 'react-redux';
import cheeseCat from '../asset/img/치즈냥.png'
import blackCat from '../asset/img/깜장냥.png'
import dottedCat from '../asset/img/점냥이.png'
import greyCat from '../asset/img/회색냥.png'
import whiteCate from '../asset/img/흰냥.png'
import { selectCat } from '../store/mian';

const cats = [
  {src: cheeseCat, alt: 'cheeseCat'},
  {src: blackCat, alt: 'blackCat'},
  {src: dottedCat, alt: 'dottedCat'},
  {src: greyCat, alt: 'greyCat'},
  {src: whiteCate, alt: 'whiteCate'},
];
//TODO: cat 이미지 저장소 관리 / load
export function SelectCatContainer() {
  const dispatch = useDispatch();
  const _selectCat = (catType) => () => dispatch(selectCat(catType));
  return (
    <SelectCat cats={cats} selectCat={_selectCat}/>
  )
}
