import {
  ASK_REQUEST,
  GET_ASKLIST,
  GET_ASK,
  ADD_ASK,
  ASK_ERROR,
  ASK_UNLOADED,
  ASKLIST_UNLOADED
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
      askList: [...state.askList,payload],
      loading: false 
    };
  case ASK_ERROR:
    return {
      ...state,
      error: payload,
      loading: false 
    };
  case ASK_UNLOADED:
    return {
      ...state,
      ask: null,
      loading: true 
    };
  case ASKLIST_UNLOADED:
    return {
      ...state,
      askList: [],
      loading: true 
    }; 
  default:
    return state;
  
}
}