import axios from 'axios';
import { 
    ASK_REQUEST,
    GET_ASKLIST,
    GET_ASK,
    ADD_ASK,
    ASK_ERROR
} from './types';

//Get all ask
export const getAllAsk = () => async dispatch => {
    try {
        dispatch({type: ASK_REQUEST});
        const res = await axios.get('/api/ask')
        dispatch({
            type: GET_ASKLIST,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ASK_ERROR,
            payload: { msg: err.message }
        });    
    }
};

//Get ask by ask_id
export const getAskById = askId => async dispatch => {
    try {
        dispatch({type: ASK_REQUEST});
        const res = await axios.get(`/api/ask/${askId}`)

        dispatch({
            type: GET_ASK,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ASK_ERROR,
            payload: { msg: err.message }
        });    
    }
};

//Get ask by room_id and user_id
export const getAskByRoomIdUserId = (roomId,userId) => async dispatch => {
    try {
        dispatch({type: ASK_REQUEST});
        const res = await axios.get(`/api/ask/room/${roomId}/${userId}`)
    
        dispatch({
            type: GET_ASKLIST,
            payload: res.data
        });    
    } catch (err) {
        dispatch({
            type: ASK_ERROR,
            payload: { msg: err.message }
        });    
    }
};

// Add ask
export const addAsk = formData => async dispatch => {
    try {
        dispatch({type: ASK_REQUEST});
        const res = await axios.post('/api/ask', formData);

        dispatch({
          type: ADD_ASK,
          payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ASK_ERROR,
            payload: { msg: err.message }
        });    
    }
};
