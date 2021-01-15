import axios from 'axios';

const request = axios.create({
	'baseURL': 'baseUrl',
	'timeout': 1000,
});

axios.interceptors.request.use(
	(config) => {
		return config;
	},
	error => {
		throw error;
	}
);

axios.interceptors.response.use(
	(response) => {
		return response;
	},
	error => {
		throw error;
	}
);

export default request;

