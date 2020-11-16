import axios from './axios';
import { fireStore } from '../firebase';

export const getChallengeStatusApi = async (uid) => {
  try {
    const response = await axios.get('/getChallengeStatus', { params: { uid } });
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const selectCatApi = async (catType, uid) => {
  try {
    await fireStore.collection('cats').add({ catType, uid });
  } catch (e) {
    throw e;
  }
}
