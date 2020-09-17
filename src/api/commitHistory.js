import axios from './axios';

export const getCommitHistoryApi = async () => {
  const response = await axios.get('/githubInfo');
  return response.data;
};
