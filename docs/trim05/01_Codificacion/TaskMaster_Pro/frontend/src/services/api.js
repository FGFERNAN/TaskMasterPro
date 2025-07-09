import axios from 'axios';

const api = axios.create({
    baseURL: 'https://l0n9v870-4000.use2.devtunnels.ms',
    timeout: 10000,
    withCredentials: true
});

export default api;