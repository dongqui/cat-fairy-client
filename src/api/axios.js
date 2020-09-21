import axios from 'axios';
import { baseUrl } from '../config';

const instance = axios.create();
instance.defaults.baseURL = process.env.NODE_ENV === 'development' ? baseUrl.dev : baseUrl.prod;

export default instance;
