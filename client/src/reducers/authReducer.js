import Cookies from "js-cookie"
import {
    USER_LOADED,
    TOKEN_LOADED,
    AUTH_ERROR
  } from '../actions/types';
  
    const initialState = {
      token: Cookies.get('token'),
      isAuthenticated: null,
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
  