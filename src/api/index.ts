import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_HOST
});

// TODO interceptor for error handling

// export apiClient;
const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };
