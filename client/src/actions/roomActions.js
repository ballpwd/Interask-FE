import axios from 'axios';
import { 
  GET_ROOMLIST,
  GET_ROOM, 
  CREATE_ROOM, 
  DELETE_ROOM, 
  EDIT_ROOM,
  ROOM_ERROR
} from './types';

//Get all room
export const getAllRoom = () => async (dispatch) => {
  try {
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
export const getRoomByUserId = userId => async (dispatch) => {
  try {
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

// Create room
export const createRoom = formData => async (dispatch) => {
  try {
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

//Edit room name 
export const editRoomName = (roomId, formData) => async (dispatch) => {
  try {
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
