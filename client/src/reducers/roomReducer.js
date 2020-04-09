import {
  GET_ROOM,
  CREATE_ROOM,
  DELETE_ROOM,
  EDIT_ROOM,
} from "../actions/types";

export default function (state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ROOM:
      return payload;
    case CREATE_ROOM:
      return payload;
    case DELETE_ROOM:
      return payload;
    case EDIT_ROOM:
      return payload;
    default:
      return state;
  }
}
