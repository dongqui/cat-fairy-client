import React from 'react';
import { CommitHistoryContainer, MainContainer, SelectCatContainer } from '../container/index';
import { Maybe } from '../components/Maybe';

export function MainPage() {
  return (
    <>
      <MainContainer/>
      <Maybe text={false}>
        <SelectCatContainer/>
      </Maybe>
      <CommitHistoryContainer/>
    </>
  )
}
