import axios from 'axios';
import { 
  ROOM_REQUEST,
  GET_ROOMLIST,
  GET_ROOM, 
  CREATE_ROOM, 
  DELETE_ROOM, 
  EDIT_ROOM,
  ROOM_ERROR,
  JOIN_ROOM,
  LEAVE_ROOM
} from './types';

//Get all room
export const getAllRoom = () => async (dispatch) => {
  try {
    dispatch({type: ROOM_REQUEST});
    const res = await axios.get('/api/room');
    dispatch({
      type: GET_ROOMLIST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ROOM_ERROR,
      payload: { msg: err.message }
    });    
  }
};

//Get room by room_id
export const getRoomById = roomId => async (dispatch) => {
  try {
    dispatch({type: ROOM_REQUEST});
    const res = await axios.get(`/api/room/${roomId}`);

    dispatch({
      type: GET_ROOM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ROOM_ERROR,
      payload: { msg: err.message }
    });    
  }
};

//Get room by user_id(owner)
export const getRoomByOwnerId = userId => async (dispatch) => {
  try {
    dispatch({type: ROOM_REQUEST});
    const res = await axios.get(`/api/room/owner/${userId}`);
    
    dispatch({
      type: GET_ROOMLIST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ROOM_ERROR,
      payload: { msg: err.message }
    });    
  }
};

//Get room by user_id(owner)
export const getRoomByUserId = userId => async (dispatch) => {
  try {
    dispatch({type: ROOM_REQUEST});
    const res = await axios.get(`/api/room/user/${userId}`);
    
    dispatch({
      type: GET_ROOMLIST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ROOM_ERROR,
      payload: { msg: err.message }
    });    
  }
};

// Create room
export const createRoom = formData => async (dispatch) => {
  try {
    dispatch({type: ROOM_REQUEST});
    const res = await axios.post('/api/room', formData);

    dispatch({
      type: CREATE_ROOM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ROOM_ERROR,
      payload: { msg: err.message }
    });    
  }
};

//Delete room
export const deleteRoom = roomId => async (dispatch) => {
  try {
    dispatch({type: ROOM_REQUEST});
    await axios.delete(`/api/room/${roomId}`);

    dispatch({
      type: DELETE_ROOM,
      payload: roomId,
    });
  } catch (err) {
    dispatch({
      type: ROOM_ERROR,
      payload: { msg: err.message }
    });    
  }
};

//Join room
export const joinRoom = (roomId,userId)=> async (dispatch) => {
  try {
    dispatch({type: ROOM_REQUEST});
    const res = await axios.post(`/api/room/join/${roomId}`,userId);

    dispatch({
      type: JOIN_ROOM,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ROOM_ERROR,
      payload: { msg: err.message }
    });    
  }
};

//Leave room
export const leaveRoom = (roomId,userId) => async (dispatch) => {
  try {
    dispatch({type: ROOM_REQUEST});
    const res = await axios.delete(`/api/room/leave/${roomId}`,userId);

    dispatch({
      type: LEAVE_ROOM,
      payload: roomId
    });
  } catch (err) {
    dispatch({
      type: ROOM_ERROR,
      payload: { msg: err.message }
    });    
  }
};

//Edit room name 
export const editRoomName = (roomId, formData) => async (dispatch) => {
  try {
    dispatch({type: ROOM_REQUEST});
    const res = await axios.put(`/api/room/editname/${roomId}`, formData);

    dispatch({
      type: EDIT_ROOM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ROOM_ERROR,
      payload: { msg: err.message }
    });    
  }
};
