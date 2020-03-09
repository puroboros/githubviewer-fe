import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});

axiosInstance.interceptors.response.use(response => {
    return response.data;
}, error => {
    console.error('axios error', error);
    return Promise.reject(error);
});
