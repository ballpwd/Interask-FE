import axios from "axios";
import Swal from "sweetalert2";

import {
  CREATE_QUESTION,
  GET_ORG_QUESTIONLIST,
  GET_ORG_QUESTION,
  ORG_QUESTION_ERROR,
  ORG_QUESTION_UNLOADED,
  ORG_QUESTIONLIST_UNLOADED,
  DELETE_QUESTION,
  EDIT_QUESTION,
  EDIT_QUESTION_STATUS,
} from "./types";
import apiUrl from "../utils/apiUrl";

//Get question by question_id (Organizer)
export const getOrgQuestionById = (questionId) => async (dispatch) => {
  try {
    const res = await axios.get(`${apiUrl}/api/question/owner/id/${questionId}`);

    dispatch({
      type: GET_ORG_QUESTION,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORG_QUESTION_ERROR,
      payload: err,
    });
  }
};

// Create question
export const createQuestion = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(`${apiUrl}/api/question`, formData);

    dispatch({
      type: CREATE_QUESTION,
      payload: res.data,
    });

    Swal.fire({
      title: "Question Created !",
      icon: "success",
    });
  } catch (err) {
    dispatch({
      type: ORG_QUESTION_ERROR,
      payload: err,
    });
  }
};

//Get organizer questionlist
export const getOrgQuestionList = (roomId) => async (dispatch) => {
  try {
    const res = await axios.get(`${apiUrl}/api/question/owner/room/${roomId}`);
    dispatch({
      type: GET_ORG_QUESTIONLIST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORG_QUESTION_ERROR,
      payload: err,
    });
  }
};

//Delete question
export const deleteQuestion = (questionId) => async (dispatch) => {
  try {
    await axios.delete(`${apiUrl}/api/question/${questionId}`);

    dispatch({
      type: DELETE_QUESTION,
      payload: questionId,
    });

    Swal.fire({
      title: "Question Removed !",
      icon: "success",
    });

  } catch (err) {
    dispatch({
      type: ORG_QUESTION_ERROR,
      payload: err,
    });
  }
};

//Edit question
export const editQuestion = (questionId, formData) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${apiUrl}/api/question/editquestion/${questionId}`,
      formData
    );

    dispatch({
      type: EDIT_QUESTION,
      payload: res.data,
    });

    Swal.fire({
      title: "Question Edited !",
      icon: "success",
    });

  } catch (err) {
    const errorMessage = err.response.data.msg;

    if (errorMessage) {
      Swal.fire({
        title: `${errorMessage} !`,
        icon: "error",
      });
    }
    dispatch({
      type: ORG_QUESTION_ERROR,
      payload: err,
    });
  }
};

//Edit question status
export const editQuestionStatus = (questionId) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${apiUrl}/api/question/editstatus/${questionId}`
    );

    dispatch({
      type: EDIT_QUESTION_STATUS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORG_QUESTION_ERROR,
      payload: err,
    });
  }
};

//Organizer question Unload
export const orgQuestionUnload = () => async (dispatch) => {
  try {
    dispatch({ type: ORG_QUESTION_UNLOADED });
  } catch (err) {
    dispatch({
      type: ORG_QUESTION_ERROR,
      payload: err,
    });
  }
};

//Organizer questionList Unload
export const orgQuestionListUnload = () => async (dispatch) => {
  try {
    dispatch({ type: ORG_QUESTIONLIST_UNLOADED });
  } catch (err) {
    dispatch({
      type: ORG_QUESTION_ERROR,
      payload: err,
    });
  }
};
