import axios from 'axios';

const api = axios.create({
    baseURL: 'https://semana-omnistack.herokuapp.com',
});


export default api;