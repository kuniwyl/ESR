import axios from 'axios';
import { TOKEN_NAMESPACE } from '@/utils/HeaderGetter.ts';

const API_URL = 'https://localhost:5000/api';
export const axiosInstance = axios.create({
  baseURL: API_URL,
});
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem(TOKEN_NAMESPACE);
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});
