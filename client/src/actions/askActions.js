import axios from 'axios';
import { 
    GET_ASK,
    ADD_ASK 
} from './types';

//Get all ask
export const getAsk = () => async dispatch => {

    const res = await axios.get('/api/ask')
    
    dispatch({
        type: GET_ASK,
        payload: res.data
    });
       
      
};

// Add ask
export const addAsk = formData => async dispatch => {
    
      const res = await axios.post('/api/ask', formData);
      dispatch({
        type: ADD_ASK,
        payload: res.data
      });

  };
