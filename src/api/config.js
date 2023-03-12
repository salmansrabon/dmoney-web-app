import axios from 'axios';

const http = axios.create({
  baseURL: 'https://xyz.cssom',
});

export default http;
