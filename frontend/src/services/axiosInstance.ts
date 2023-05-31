import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = import.meta.env.API_BASE_URL ?? import.meta.env.MSW_BASE_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3_000,
});

export default axiosInstance;
