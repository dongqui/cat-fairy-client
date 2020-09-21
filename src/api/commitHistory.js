import axios from './axios';

export const getCommitHistoryApi = async (username) => {
  try {
    const response = await axios.get('/getCommitHistory', { params: { username } });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
