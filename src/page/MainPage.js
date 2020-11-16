import React from 'react';
import { ChallengeStatusContainer, MainContainer, SelectCatContainer } from '../container/index';
import { Maybe } from '../components/Maybe';

export function MainPage() {
  return (
    <>
      <MainContainer/>
      <Maybe text={false}>
        <SelectCatContainer/>
      </Maybe>
      <ChallengeStatusContainer/>
    </>
  )
}
