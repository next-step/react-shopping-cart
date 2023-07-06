import axios, { AxiosInstance } from 'axios';

const LOCAL_API_BASE_URL = 'http://localhost:5173';
const TIMEOUT = 3_000;

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || LOCAL_API_BASE_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
});

export default axiosInstance;
