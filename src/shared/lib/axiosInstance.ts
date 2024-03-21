import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_ENDPOINT,
});

export default axiosInstance;
