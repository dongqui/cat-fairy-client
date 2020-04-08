import axios from 'axios';

const baseURL = process.env.NODE_ENV=== 'development' ? 'http://127.0.0.1:8000' : '';
console.log(baseURL);
const instance = axios.create({
  baseURL,
  transformResponse: (r) => r.data
});

export default instance;