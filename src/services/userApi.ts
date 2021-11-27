import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://tcc-user-management.herokuapp.com',
})