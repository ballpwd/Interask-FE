import axios from 'axios';
import { 
    AUTH_REQUEST,
    USER_LOADED,
    TOKEN_LOADED,
    AUTH_ERROR
} from './types';

// Load User
export const loadUser = () => async dispatch => {
    try {
      dispatch({type: AUTH_REQUEST});
      const res = await axios.get('/api/auth/current_user');
      // const user = {_id: '5e85403922192a21e87fbbaa',
      //               email: 'ballpwd5@gmail.com',   //mockup user
      //               userName: 'ballpwd5'}
      console.log(res.data)
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  };

// Load Token
export const loadToken = token => async dispatch => {
  try {
    dispatch({type: AUTH_REQUEST});
    dispatch({
      type: TOKEN_LOADED,
      payload: token
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};