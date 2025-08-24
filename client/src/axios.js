// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // Proxy from frontend NGINX to backend K8s service
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

export default instance;
