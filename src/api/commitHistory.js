import axios from './axios';

export const getCommitHistoryApi = async (uid) => {
  try {
    const response = await axios.get('/getCommitHistory', { params: { uid } });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
