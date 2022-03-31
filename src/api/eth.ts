import axios from "axios";

const API = axios.create({
    baseURL: 'https://api.coinbase.com/v2'
});

export default API;