import axios from 'axios';

const LOCALSTORAGE_KEY = 'token'


const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    Authorization: localStorage.getItem(LOCALSTORAGE_KEY)
  }
});






export default api;