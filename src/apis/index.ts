import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

const {
  get: axiosGet,
  post: axiosPost,
  put: axiosPut,
  delete: axiosDelete,
} = instance;
export { axiosGet, axiosPost, axiosPut, axiosDelete };
