import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:8080/api' });

// add interceptors for auth tokens if you have auth
export default API;
