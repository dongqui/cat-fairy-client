import axios from 'axios';
import { baseUrl } from '../config';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? baseUrl.dev : baseUrl.prod;


