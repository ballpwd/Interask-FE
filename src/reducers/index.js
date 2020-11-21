import { combineReducers } from "redux";
import ask from "./askReducer";
import room from "./roomReducer";
import question from "./questionReducer";
import feedback from "./feedbackReducer";
import answer from "./answerReducer";
import orgAsk from "./orgAskReducer";
import orgRoom from "./orgRoomReducer";
import orgFeedback from "./orgFeedbackReducer";
import orgQuestion from "./orgQuestionReducer";
import orgAnswer from "./orgAnswerReducer";
import auth from "./authReducer";

export default combineReducers({
  ask,
  room,
  question,
  feedback,
  answer,
  orgAsk,
  orgRoom,
  orgFeedback,
  orgQuestion,
  orgAnswer,
  auth
});
