import axios from "axios";

import {
  GET_ORG_FEEDBACKLIST,
  ORG_FEEDBACK_ERROR,
  ORG_FEEDBACK_UNLOADED,
  ORG_FEEDBACKLIST_UNLOADED,
} from "./types";
import apiUrl from '../utils/apiUrl'

//Get organizer feedbacklist
export const getOrgFeedbackList = (roomId) => async (dispatch) => {
  try {
    const res = await axios.get(`${apiUrl}/api/feedback/owner/room/${roomId}`);
    dispatch({
      type: GET_ORG_FEEDBACKLIST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORG_FEEDBACK_ERROR,
      payload: err,
    });
  }
};

//Organizer feedback Unload
export const orgFeedbackUnload = () => async (dispatch) => {
  try {
    dispatch({ type: ORG_FEEDBACK_UNLOADED });
  } catch (err) {
    dispatch({
      type: ORG_FEEDBACK_ERROR,
      payload: err,
    });
  }
};

//Organizer feedbackList Unload
export const orgFeedbackListUnload = () => async (dispatch) => {
  try {
    dispatch({ type: ORG_FEEDBACKLIST_UNLOADED });
  } catch (err) {
    dispatch({
      type: ORG_FEEDBACK_ERROR,
      payload: err,
    });
  }
};
