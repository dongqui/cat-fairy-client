import axios from './axios';


interface IUser {
  token: string,
  username: string,
  github_id: string,
  email: string
}
interface IGetTokenApi {
  data: IUser
}
export const getTokenApi = async (code: string) => {
  return await axios.post<IGetTokenApi>(`/api/auth/github`, { code });
}