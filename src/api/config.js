import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});
API.interceptors.request.use(config => {
    config.headers.authorization = localStorage.getItem('token') || '';
    return config;
});

export default API;