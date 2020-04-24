import {
  ROOM_REQUEST,
  GET_ROOMLIST,
  GET_ROOM,
  JOIN_ROOM,
  LEAVE_ROOM,
  ROOM_ERROR,
  ROOM_UNLOADED,
  ROOMLIST_UNLOADED
} from '../actions/types';

const initialState = {
  roomList: [],
  room: null,
  error: {},
  loading: true 
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ROOM_REQUEST:
      return {
        ...state,
        loading: true   
      } ;
    case GET_ROOMLIST:
      return {
        ...state,
        roomList: payload,
        loading: false    
      } ;
    case GET_ROOM:
      return {
        ...state,
        room: payload,
        loading: false    
      } ; 
    case JOIN_ROOM:
        return {
          ...state,
          roomList: [...state,payload],
          loading: false    
    } 
    case LEAVE_ROOM:
        return {
          ...state,
          roomList: state.roomList.filter(room => room._id !== payload),
          loading: false    
    }   
    case ROOM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case ROOM_UNLOADED:
       return {
        ...state,
        room: null,
        loading: true 
      };
    case ROOMLIST_UNLOADED:
      return {
        ...state,
        roomList: [],
        loading: true 
      };     
    default:
      return state;
  }
}
