import {
    GET_ASK
  } from '../actions/types';



  export default function(state = [], action) {
    const { type, payload } = action;
    switch (type) {
		case GET_ASK:
			return payload ;
		default:
			return state;
	}
}
