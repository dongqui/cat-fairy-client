import React, {useEffect} from 'react';
import ChallengeStatus from '../components/challengeStatus/ChallengeStatus';
import { useDispatch, useSelector } from 'react-redux';
import { getChallengeStatus } from '../store/mian';

export function ChallengeStatusContainer() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getChallengeStatus(user?.uid));
  }, [dispatch, user]);

  return (
    <ChallengeStatus/>
  )
}
