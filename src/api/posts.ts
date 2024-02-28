import axios from 'axios';

const API_URL = 'https://api.realworld.io/api';

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    throw new Error('API 요청 에러');
  }
};
