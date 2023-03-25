import axios from 'axios';
// import { createProxyMiddleware } from 'http-proxy-middleware';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use(async (config) => {
  // // Create a new http-proxy-middleware instance based on the config.proxy value
  // if (config.proxy) {
  //   const proxy = createProxyMiddleware({
  //     target: config.proxy,
  //     changeOrigin: true,
  //   });
  //   // Use the http-proxy-middleware instance to forward the request to the target server
  //   config.baseURL = config.proxy;
  //   config.url = config.url.replace(config.baseURL, '');
  //   return await proxy(config);
  // }
  config.headers['Content-Type'] = 'application/json';
  config.headers['X-Auth-Secret-Key'] = process.env.REACT_APP_API_KEY;
  // config.headers['X-Forwarded-Host'] = process.env.REACT_APP_API_URL;
  return config;
});

instance.interceptors.response.use(response => {
  if (response.status === 401) {
    // Handle 401 errors
    window.location.href = '/login';
  }
  return response;
});

export default instance;