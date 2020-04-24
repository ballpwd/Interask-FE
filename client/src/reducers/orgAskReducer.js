import {
    ORG_ASK_REQUEST,
    GET_ORG_ASKLIST,
    GET_ORG_ASK,
    ORG_ASK_ERROR,
    ORG_ASK_UNLOADED,
    ORG_ASKLIST_UNLOADED
  } from '../actions/types';

  const initialState = {
    askList: [],
    ask: null,
    error: {},
    loading: true
  };

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ORG_ASK_REQUEST:
      return {
        ...state,
        loading: true   
      } ;
    case GET_ORG_ASKLIST:
      return {
        ...state,
        askList: payload,
        loading: false   
      } ;
    case GET_ORG_ASK:
        return {
          ...state,
          ask: payload,
          loading: false       
        } ;      
    case ORG_ASK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false 
      };
    case ORG_ASK_UNLOADED:
      return {
        ...state,
        ask: null,
        loading: true 
      };
   case ORG_ASKLIST_UNLOADED:
      return {
        ...state,
        askList: [],
        loading: true 
      }; 
    default:
      return state;
    
  }
}
