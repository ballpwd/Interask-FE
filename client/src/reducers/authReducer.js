import Cookies from "js-cookie"
import {
    AUTH_REQUEST,
    USER_LOADED,
    TOKEN_LOADED,
    AUTH_ERROR
  } from '../actions/types';
  
    const initialState = {
      token: Cookies.get('token'),
      isAuthenticated: null,
      user: null,
      error: {},
      loading: true
    };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case AUTH_REQUEST:
        return {
          ...state,
          loading: true  
        } ;
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          user: payload,
          loading: false   
        } ;
        case TOKEN_LOADED:
        return {
          ...state,
          token: payload,
          loading: false   
        } ;
      case AUTH_ERROR:
        return {
          ...state,
          error: payload,
          loading: false 
        };
      default:
        return state;
      
    }
  }
  