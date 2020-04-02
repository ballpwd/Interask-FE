import axios from 'axios';
import { GET_ASK } from './types';

export const getAsk = () => async dispatch => {

    const res = await axios.get('/api/ask')
    
    dispatch({
        type: GET_ASK,
        payload: res.data
    });
       
      
};


