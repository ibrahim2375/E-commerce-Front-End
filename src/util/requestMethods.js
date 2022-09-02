import axios from 'axios';

export const public_request = axios.create({
    baseURL: process.env.REACT_APP_API
}) 