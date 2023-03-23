import axios, { CreateAxiosDefaults } from "axios";

const axiosParams: CreateAxiosDefaults = {
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/",
};

const axiosInstance = axios.create(axiosParams);

export default axiosInstance;
