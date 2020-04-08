import axios from './axios';


interface getTokenData {
  token: string
}
export const getTokenApi = async (code: string) => {
  return await axios.get<getTokenData>(`/auth/github?code=${code}`);
}