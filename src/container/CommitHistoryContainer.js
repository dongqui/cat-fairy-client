import React, {useEffect} from 'react';
import CommitHistory from '../components/commitHistory/CommitHistory';
import { useDispatch, useSelector } from 'react-redux';
import { getCommitHistory } from '../store/mian';

export function CommitHistoryContainer() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { commitHistory } = useSelector(state => state.main);

  useEffect(() => {
    user && dispatch(getCommitHistory(user?.username));
  }, [dispatch, user]);

  return (
    <CommitHistory commitHistory={commitHistory}/>
  )
}
