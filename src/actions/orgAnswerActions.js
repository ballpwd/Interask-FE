import axios from "axios";

import {
  GET_ORG_ANSWERLIST,
  ORG_ANSWER_ERROR,
  ORG_ANSWER_UNLOADED,
  ORG_ANSWERLIST_UNLOADED,
} from "./types";
import apiUrl from '../utils/apiUrl'

//Get organizer answerlist
export const getOrgAnswerList = (questionId) => async (dispatch) => {
  try {
    const res = await axios.get(`${apiUrl}/api/answer/owner/${questionId}`);
    dispatch({
      type: GET_ORG_ANSWERLIST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORG_ANSWER_ERROR,
      payload: err,
    });
  }
};

//Organizer answer Unload
export const orgAnswerUnload = () => async (dispatch) => {
  try {
    dispatch({ type: ORG_ANSWER_UNLOADED });
  } catch (err) {
    dispatch({
      type: ORG_ANSWER_ERROR,
      payload: err,
    });
  }
};

//Organizer answerlist Unload
export const orgAnswerListUnload = () => async (dispatch) => {
  try {
    dispatch({ type: ORG_ANSWERLIST_UNLOADED });
  } catch (err) {
    dispatch({
      type: ORG_ANSWER_ERROR,
      payload: err,
    });
  }
};
