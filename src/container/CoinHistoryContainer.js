import React, {useEffect} from 'react';
import CoinHistory from '../components/CoinHistory';
import { useDispatch, useSelector } from 'react-redux';
import { getCommitHistory } from '../store/mian';

export function CoinHistoryContainer() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth)

  useEffect(() => {
    user && dispatch(getCommitHistory(user?.additionalUserInfo?.username));
  }, [dispatch, user]);

  return (
    <CoinHistory/>
  )
}
