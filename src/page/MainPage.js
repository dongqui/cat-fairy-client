import React from 'react';
import {CommitHistoryContainer, MainContainer, SelectCatContainer} from '../container/index';

export function MainPage() {
  return (
    <>
      <MainContainer/>
      <SelectCatContainer/>
      <CommitHistoryContainer/>
    </>
  )
}
