import axios from "axios";

const API = axios.default;
API.interceptors.request.use(config => {
    config.headers.authorization = localStorage.getItem('token') || '';
    return config;
});

export default API;