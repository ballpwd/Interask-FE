import {
    USER_LOADED,
    TOKEN_LOADED,
    AUTH_ERROR,
    LOGOUT
  } from '../actions/types';
  
    const initialState = {
      token: localStorage.getItem('token'),
      isAuthenticated: false,
      user: null,
      error: {},
      authLoading: true
    };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          user: payload,
          authLoading: false   
        } ;
        case TOKEN_LOADED:
        return {
          ...state,
          token: payload,
          authLoading: false   
        } ;
      case LOGOUT:
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          user: null,
          authLoading: false
        };
      case AUTH_ERROR:
        return {
          ...state,
          error: payload,
          authLoading: false 
        };
      default:
        return state;
      
    }
  }
  