import axios from 'axios';
const baseUrl = 'http://localhost:3001/excuses/random';

const getRandomExcuses = async () => {
	const request = axios.get(baseUrl);
	try {
		const response = await request;
		return response.data;
	} catch (error) {
		console.log('Something went wrong', error);
	}
};

export default {
	getRandomExcuses,
};
