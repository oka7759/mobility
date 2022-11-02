import axios from 'axios';

export const customAxios = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

customAxios.interceptors.response.use(error => {
  return Promise.reject(error);
});
