import {
  ORG_ROOM_REQUEST,
  GET_ORG_ROOMLIST,
  GET_ORG_ROOM,
  CREATE_ROOM,
  DELETE_ROOM,
  EDIT_ROOM,
  ORG_ROOM_ERROR,
  ORG_ROOM_UNLOADED,
  ORG_ROOMLIST_UNLOADED,
} from "../actions/types";

const initialState = {
  roomList: [],
  room: null,
  error: {},
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ORG_ROOM_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_ORG_ROOMLIST:
      return {
        ...state,
        roomList: payload,
        loading: false,
      };
    case EDIT_ROOM:
      return {
        ...state,
        room: payload,
        roomList: state.roomList.map((r) =>
          r._id === payload._id ? { ...r, roomName: payload.roomName } : r
        ),
        loading: false,
      };
    case GET_ORG_ROOM:
      return {
        ...state,
        room: payload,
        loading: false,
      };
    case CREATE_ROOM:
      return {
        ...state,
        roomList: [...state.roomList, payload],
        loading: false,
      };
    case DELETE_ROOM:
      return {
        ...state,
        roomList: state.roomList.filter((room) => room._id !== payload),
        loading: false,
      };
    case ORG_ROOM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case ORG_ROOM_UNLOADED:
      return {
        ...state,
        room: null,
        loading: true,
      };
    case ORG_ROOMLIST_UNLOADED:
      return {
        ...state,
        roomList: [],
        loading: true,
      };
    default:
      return state;
  }
}
