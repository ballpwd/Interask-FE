import {
    GET_ASKLIST,
    GET_ASK,
    ADD_ASK,
    ASK_ERROR
  } from '../actions/types';

  const initialState = {
    askList: [],
    ask: null,
    error: {}
  };

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ASKLIST:
      return {
        ...state,
        askList: payload    
      } ;
    case GET_ASK:
        return {
          ...state,
          ask: payload    
        } ;      
    case ADD_ASK:
      return {
        ...state,
        askList: [...state.posts,payload], 
      };
    case ASK_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
    
  }
}
