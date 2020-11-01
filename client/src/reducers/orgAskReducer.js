import {
  GET_ORG_ASKLIST,
  GET_ORG_ASK,
  ASK_ISANSWER,
  ORG_ASK_ERROR,
  ORG_ASK_UNLOADED,
  ORG_ASKLIST_UNLOADED,
  SET_PRESENT,
  ALL_PRESENT,
  CLEAR_PRESENT,
  GET_PRESENT_ARKLIST
} from '../actions/types';

const initialState = {
  askList: [],
  ask: null,
  error: {},
  askLoading: true
};

export default function(state = initialState, action) {
const { type, payload } = action;
switch (type) {
  case GET_ORG_ASKLIST:
  case GET_PRESENT_ARKLIST:
    return {
      ...state,
      askList: payload,
      askLoading: false   
    } ;
  case GET_ORG_ASK:
    return {
      ...state,
      ask: payload,
      askLoading: false       
    } ;
  case ASK_ISANSWER:
    return {
        ...state,
        askList: state.askList.map((a) =>
          a._id === payload._id ? { ...a, isAnswer: payload.isAnswer } : a
        ),
        askLoading: false,
    };     
  case SET_PRESENT:
    return {
      ...state,
      askList: state.askList.map((a) =>
        a._id === payload._id ? { ...a, present: payload.present } : a
      ),
      askLoading: false,
    };  
  case ALL_PRESENT:
  case CLEAR_PRESENT:
    return {
      ...state,
      askList: state.askList.map(ask => {
        let present
        payload.forEach(data => {
          if(ask._id === data._id){
            present = data.present
          }
        })
        return present === null ?  ask : { ...ask, present: present }
      }),
      askLoading: false 
    };
  case ORG_ASK_ERROR:
    return {
      ...state,
      error: payload,
      askLoading: false 
    };
  case ORG_ASK_UNLOADED:
    return {
      ...state,
      ask: null,
      askLoading: true 
    };
 case ORG_ASKLIST_UNLOADED:
    return {
      ...state,
      askList: [],
      askLoading: true 
    }; 
  default:
    return state;
  
}
}
