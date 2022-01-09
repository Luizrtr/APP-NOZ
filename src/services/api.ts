import axios from 'axios';

const api = axios.create({
  baseURL: 'http://books.appnoz.com.br/api/v1',
  timeout: 90000,
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
