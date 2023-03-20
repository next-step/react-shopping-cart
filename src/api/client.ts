import { getBaseUrlByMode } from '@/constants';
import axios from 'axios';

export const client = axios.create({
  baseURL: getBaseUrlByMode(),
});

client.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

client.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default client;
