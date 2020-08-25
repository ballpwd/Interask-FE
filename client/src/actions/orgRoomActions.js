import axios from 'axios';
import { 
    GET_ORG_ROOMLIST,
    GET_ORG_ROOM,
    CREATE_ROOM,
    DELETE_ROOM,
    EDIT_ROOM,
    ORG_ROOM_ERROR,
    ORG_ROOM_UNLOADED,
    ORG_ROOMLIST_UNLOADED
} from './types';

//Get all room
// export const getAllOrgRoom = () => async (dispatch) => {
//   try {

//     const res = await axios.get('/api/room');
//     dispatch({
//       type: GET_ORG_ROOMLIST,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: ORG_ROOM_ERROR,
//       payload: err
//     });    
//   }
// };

//Get room by room_id (Organizer) 
export const getOrgRoomById = roomId => async (dispatch) => {
  try {

    const res = await axios.get(`/api/room/${roomId}`);

    dispatch({
      type: GET_ORG_ROOM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORG_ROOM_ERROR,
      payload: err
    });    
  }
};

//Get owner roomlist
export const getOrgRoomList =()=> async (dispatch) => {
  try {
    const res = await axios.get(`/api/room/owner/list`);
    dispatch({
      type: GET_ORG_ROOMLIST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORG_ROOM_ERROR,
      payload: err
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
      type: ORG_ROOM_ERROR,
      payload: err
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
      type: ORG_ROOM_ERROR,
      payload: err
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
      type: ORG_ROOM_ERROR,
      payload: err
    });    
  }
};

//Organizer room Unload
export const orgRoomUnload = () => async dispatch => {
  try {
      dispatch({type: ORG_ROOM_UNLOADED});
  } catch (err) {
      dispatch({
          type: ORG_ROOM_ERROR,
          payload: err
      });    
  }
};

//Organizer roomList Unload
export const orgRoomListUnload = () => async dispatch => {
  try {
      dispatch({type: ORG_ROOMLIST_UNLOADED});
  } catch (err) {
      dispatch({
          type: ORG_ROOM_ERROR,
          payload: err
      });    
  }
};