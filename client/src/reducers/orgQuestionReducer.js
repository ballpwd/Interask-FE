import {
  GET_ORG_QUESTIONLIST,
  GET_ORG_QUESTION,
  ORG_QUESTION_ERROR,
  ORG_QUESTION_UNLOADED,
  ORG_QUESTIONLIST_UNLOADED,
  CREATE_QUESTION,
} from "../actions/types";

const initialState = {
  questionList: [],
  question: null,
  error: {},
  questionLoading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_QUESTION:
      return {
        ...state,
        questionList: [...state.questionList, payload],
        questionLoading: false,
      };
    case GET_ORG_QUESTIONLIST:
      return {
        ...state,
        questionList: payload,
        questionLoading: false,
      };
    case GET_ORG_QUESTION:
      return {
        ...state,
        question: payload,
        questionLoading: false,
      };
    case ORG_QUESTION_ERROR:
      return {
        ...state,
        error: payload,
        questionLoading: false,
      };
    case ORG_QUESTION_UNLOADED:
      return {
        ...state,
        question: null,
        questionLoading: true,
      };
    case ORG_QUESTIONLIST_UNLOADED:
      return {
        ...state,
        questionList: [],
        questionLoading: true,
      };
    default:
      return state;
  }
}
