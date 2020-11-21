import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getRoomById, roomUnload } from "../../actions/roomActions";
import {
  getUserQuestionList,
  questionListUnload,
} from "../../actions/questionAction";
import QuestionList from "./QuestionList";
import { Container } from "reactstrap";
import Loading from "../Loading/Loading";
import apiUrl from "../../utils/apiUrl";
import io from "socket.io-client";
import NotFound from "../layout/NotFound";

const Question = (props) => {
  const {
    getRoomById,
    roomUnload,
    getUserQuestionList,
    questionListUnload,
    room: { room, roomLoading },
    question: { questionList, questionLoading },
    match,
  } = props;

  useEffect(() => {
    getRoomById(match.params.roomid);
    return () => {
      roomUnload();
    };
  }, [getRoomById, match.params.roomid, roomUnload]);

  useEffect(() => {
    let socket = io.connect(apiUrl);

    socket.emit("room", match.params.roomid);

    socket.on("question", (data) => {
      if (data.status === 200) {
        getUserQuestionList(match.params.roomid);
      }
    });

    getUserQuestionList(match.params.roomid);
    return () => {
      questionListUnload();
      socket.disconnect();
    };
  }, [getUserQuestionList, match.params.roomid, questionListUnload]);

  return ((room == null || roomLoading) || questionLoading) ? (
    <Fragment>
      {(!roomLoading) && (room == null)? (<NotFound></NotFound>):(<Loading></Loading>) }
    </Fragment>
  ) : (
    <Fragment>
      <div className="fullscreen bg">
        <Container fluid className="topic">
          <h1>Q&A</h1>
        </Container>
        <Container>
          <div>{<QuestionList questionList={questionList} room={room} />}</div>
        </Container>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  room: state.room,
  question: state.question,
});

export default connect(mapStateToProps, {
  getRoomById,
  roomUnload,
  getUserQuestionList,
  questionListUnload,
})(Question);
