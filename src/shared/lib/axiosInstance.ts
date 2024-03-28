import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_ENDPOINT,
	headers: {
		Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
		uid: import.meta.env.VITE_USER_ID,
	},
});

export default axiosInstance;
