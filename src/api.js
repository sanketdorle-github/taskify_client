
// src/api.js
import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:5000/api' });
const API = axios.create({ baseURL: 'https://takify-server.vercel.app' });

API.interceptors.request.use(config => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  

  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default API;