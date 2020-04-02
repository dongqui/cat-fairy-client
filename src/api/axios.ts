import axios from 'axios';

const baseURL = process.env.NODE_ENV=== 'development' ? 'https://locahost:3000' : '';

const instance = axios.create({
  baseURL
});

export default instance;