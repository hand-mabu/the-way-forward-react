import axios from 'axios';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

axios.defaults.timeout = 1000 * 120;
axios.defaults.baseURL = "http://localhost:3001/";

axios.interceptors.request.use((config) => {
  const newConfig = config;
  newConfig.headers['Authorization'] = 'Bearer wwwwwwww';
  newConfig.headers['Content-Type'] = 'application/json';
  newConfig.headers.Accept = '*/*';

  return newConfig;
});

axios.interceptors.response.use((response) => {
  return Promise.resolve(response.data);
}, (error) => {
  if (!error || !error.response) {
    return Promise.reject(error);
  }

  if (!error.request.responseURL.includes('login') && error.response.status === 401) {
    history.push('/login');
    history.go();
  }
  return Promise.reject(error);
});

export default axios;
