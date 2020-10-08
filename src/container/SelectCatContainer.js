import React, { useEffect } from 'react';
import SelectCat from '../components/SelectCat';
import { useDispatch } from 'react-redux';

//TODO: cat 이미지 저장소 관리 / load
export function SelectCatContainer() {
  const dispatch = useDispatch();
  useEffect(() => {

  }, [])
  return (
    <SelectCat/>
  )
}
