import axios from './axios';

export const requestToken = async (code) => {
  return await axios.post('/auth/github', { code });
}