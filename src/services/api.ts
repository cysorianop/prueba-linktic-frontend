import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

export const fetchPostById = async (id: string) => {
  const response = await axios.get(`${API_URL}/posts/${id}`);
  return response.data;
};