import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export { axiosInstance };
