import axios from 'axios';

const API_URL = 'https://laurus-deploy.vercel.app/api';

export const login = async (email, senha) => {
	try {
		const response = await axios.post(`${API_URL}/auth`, { email, senha });
		console.log('Response data:', response.data);
		console.log('Full response:', response);
		return response.data;
	} catch (error) {
		console.error('Login error:', error.response?.data || error.message);
		throw new Error(error.response?.data?.message || 'Login failed');
	}
};
