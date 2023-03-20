import { getBaseUrlByMode } from '@/constants';
import axios from 'axios';

const client = axios.create({
  baseURL: getBaseUrlByMode(),
});

client.interceptors.request.use(
  config =>
    // 이 부분에서 리프레스 토큰 처리해주면 됩니다
    config,
  error => Promise.reject(error),
);

client.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default client;
