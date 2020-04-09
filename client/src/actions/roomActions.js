import axios from "axios";
import { GET_ROOM, CREATE_ROOM, DELETE_ROOM, EDIT_ROOM } from "./types";

//Get all room
export const getRoom = () => async (dispatch) => {
  const res = await axios.get("/api/room");

  dispatch({
    type: GET_ROOM,
    payload: res.data,
  });
};

// Create room
export const createRoom = (formData) => async (dispatch) => {
  const res = await axios.post("/api/room", formData);
  dispatch({
    type: CREATE_ROOM,
    payload: res.data,
  });
};

//Delete room
export const deleteRoom = (room_Id) => async (dispatch) => {
  const res = await axios.delete(`/api/room/${room_Id}`);
  dispatch({
    type: DELETE_ROOM,
    payload: res.data,
  });
};

//Edit room
export const editRoom = (id, formData) => async (dispatch) => {
  const res = await axios.put(`/api/room/${id}`, formData);
  dispatch({
    type: EDIT_ROOM,
    payload: res.data,
  });
};
