import {
    GET_ASKLIST,
    GET_ASK,
    ADD_ASK,
    ASK_ERROR,
    ASK_REQUEST
  } from '../actions/types';

  const initialState = {
    askList: [],
    ask: null,
    error: {},
    // loading: true
  };

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ASK_REQUEST:
      return {
        ...state,
        loading: true   
      } ;
    case GET_ASKLIST:
      return {
        ...state,
        askList: payload,
        loading: false   
      } ;
    case GET_ASK:
        return {
          ...state,
          ask: payload,
          loading: false       
        } ;      
    case ADD_ASK:
      return {
        ...state,
        askList: [...state.posts,payload],
        loading: false 
      };
    case ASK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false 
      };
    default:
      return state;
    
  }
}
