import fetch from 'node-fetch';

const API_URL = 'http://localhost:3001';

export const context = () => {
  return {
    getUsers: (params = '') => fetch(`${API_URL}/users${params}`),
    getPosts: (params = '') => fetch(`${API_URL}/posts${params}`),
  };
};
