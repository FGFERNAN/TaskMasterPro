import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/api-v1',
    timeout: 10000,
    withCredentials: true
});

export default api;