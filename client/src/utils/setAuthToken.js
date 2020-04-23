import axios from 'axios';
import Cookies from "js-cookie"
const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
    Cookies.set('token', token);
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
    Cookies.remove('token');
  }
};

export default setAuthToken;
