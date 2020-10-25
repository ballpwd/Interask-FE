import axios from 'axios';

import { 
    GET_ORG_ASKLIST,
    ASK_ISANSWER,
    ORG_ASK_ERROR,
    ORG_ASK_UNLOADED,
    ORG_ASKLIST_UNLOADED
} from './types';
import apiUrl from '../utils/apiUrl'

//Get organizer asklist
export const getOrgAskList = (roomId) => async dispatch => {
    try {
        const res = await axios.get(`${apiUrl}/api/ask/owner/room/${roomId}`)
        dispatch({
            type: GET_ORG_ASKLIST,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ORG_ASK_ERROR,
            payload: err
        });    
    }
};

// ask isAnswer update
export const askIsAnswerUpdate = (askId) => async (dispatch) => {
    try {
      const res = await axios.put(`${apiUrl}/api/ask/isanswer/${askId}`);
  
      dispatch({
        type: ASK_ISANSWER,
        payload: res.data,
      });
  
    } catch (err) {
      dispatch({
        type: ORG_ASK_ERROR,
        payload: err
      });    
    }
  };

//Organizer ask Unload
export const orgAskUnload = () => async dispatch => {
    try {
        dispatch({type: ORG_ASK_UNLOADED});
    } catch (err) {
        dispatch({
            type: ORG_ASK_ERROR,
            payload: err
        });    
    }
};

//Organizer askList Unload
export const orgAskListUnload = () => async dispatch => {
    try {
        dispatch({type: ORG_ASKLIST_UNLOADED});
    } catch (err) {
        dispatch({
            type: ORG_ASK_ERROR,
            payload: err
        });    
    }
};