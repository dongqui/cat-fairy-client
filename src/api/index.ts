import axios from './axios';

export const setTokenOnAxiosHeader = (token: string) => axios.defaults.headers.common['Authorization'] = `token ${token}`;

interface IUserRes {
  user: IUser
}

interface IUser {
  username: string,
  email: string,
  token: string,
  github_id: string
}

export const getTokenApi = async (code: string) => {
  return await axios.post<IUserRes>(`/api/auth/github`, { code });
}

export const loginApi = async (token: string) => {
  return await axios.post<IUserRes>('/api/auth/login');
}