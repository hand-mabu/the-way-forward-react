import axios from "axios";

export const userLoginRequest = (userData) => {
  return dispatch => {
    return axios.post('/api/login', userData);
  }
};