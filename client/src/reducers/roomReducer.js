import {
  GET_ROOMLIST,
  GET_ROOM,
  CREATE_ROOM,
  DELETE_ROOM,
  EDIT_ROOM,
  ROOM_ERROR
} from '../actions/types';

const initialState = {
  roomList: [],
  room: {},
  error: {},
  loading: true
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ROOMLIST:
      return {
        ...state,
        roomList: payload,
        loading: false    
      } ;
    case EDIT_ROOM:
    case GET_ROOM:
      return {
        ...state,
        room: payload,
        loading: false    
      } ; 
    case CREATE_ROOM:
      return {
        ...state,
        roomList: [...state.posts,payload],
        loading: false 
      };
    case DELETE_ROOM:
      return {
        ...state,
        roomList: state.roomList.filter(room => room._id !== payload),
        loading: false
      };
    case ROOM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };  
    default:
      return state;
  }
}
