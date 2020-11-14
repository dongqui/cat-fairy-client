import React, {useEffect} from 'react';
import CommitHistory from '../components/commitHistory/CommitHistory';
import { useDispatch, useSelector } from 'react-redux';
import { getCommitHistory, setOpenCommitHistory } from '../store/mian';
import {Maybe} from '../components/Maybe';

export function CommitHistoryContainer() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { commitHistories, isCommitHistoryOpen } = useSelector(state => state.main);

  const closeCommitHistory = () => dispatch(setOpenCommitHistory(false));

  useEffect(() => {
    dispatch(getCommitHistory(user?.uid));
  }, [dispatch, user]);

  return (
    <CommitHistory commitHistory={commitHistories} closeCommitHistory={closeCommitHistory}/>
  )
}
