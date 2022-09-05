import axios from 'axios';
//axios connection for cookies on  between it and the server
axios.defaults.withCredentials = true;
export const public_request = axios.create({
    baseURL: process.env.REACT_APP_API
}) 