import axios from 'axios';
import { setAlert } from './alertActions';
import { 
    GET_ASKLIST,
    GET_ASK,
    ADD_ASK,
    ASK_ERROR,
    ASK_UNLOADED,
    ASKLIST_UNLOADED
} from './types';

//Get all ask
// export const getAllAsk = () => async dispatch => {
//     try {
//         const res = await axios.get('/api/ask')
//         dispatch({
//             type: GET_ASKLIST,
//             payload: res.data
//         });
//     } catch (err) {
//         dispatch({
//             type: ASK_ERROR,
//             payload: err
//         });    
//     }
// };

//Get ask by ask_id
// export const getAskById = askId => async dispatch => {
//     try {
//         const res = await axios.get(`/api/ask/${askId}`)
//         dispatch({
//             type: GET_ASK,
//             payload: res.data
//         });
//     } catch (err) {
//         dispatch({
//             type: ASK_ERROR,
//             payload: err
//         });    
//     }
// };

//Get user asklist
export const getUserAskList = (roomId) => async dispatch => {
    try {
        const res = await axios.get(`/api/ask/user/room/${roomId}`)

        dispatch({
            type: GET_ASKLIST,
            payload: res.data
        });    
    } catch (err) {
        dispatch({
            type: ASK_ERROR,
            payload: err
        });    
    }
};

// Add ask
export const addAsk = formData => async dispatch => {
    try {
        const res = await axios.post('/api/ask', formData);

        dispatch({
          type: ADD_ASK,
          payload: res.data
        });

        // dispatch(setAlert('Ask Sent', 'success'));
        
    } catch (err) {
        dispatch({
            type: ASK_ERROR,
            payload: err
        });    
    }
};

//ask Unload
export const askUnload = () => async dispatch => {
    try {
        dispatch({type: ASK_UNLOADED});
    } catch (err) {
        dispatch({
            type: ASK_ERROR,
            payload: err
        });    
    }
};

//askList Unload
export const askListUnload = () => async dispatch => {
    try {
        dispatch({type: ASKLIST_UNLOADED});
    } catch (err) {
        dispatch({
            type: ASK_ERROR,
            payload: err
        });    
    }
};