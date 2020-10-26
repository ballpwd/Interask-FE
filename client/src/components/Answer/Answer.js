import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getRoomById, roomUnload } from "../../actions/roomActions";
import {getUserAnswer, answerUnload} from "../../actions/answerActions";
import { getQuestionById, questionUnload } from "../../actions/questionAction";
import { Container} from "reactstrap";
import Loading from '../Loading/Loading';
import AnswerForm from "../Answer/AnswerForm";
import { Redirect } from 'react-router-dom';
import NotFound from "../layout/NotFound";

const Answer = (props) => {
  
  const {
    getQuestionById,
    questionUnload,
    getUserAnswer,
    answerUnload,
    getRoomById,
    roomUnload,
    answer : {answer},
    room : {room,roomLoading},
    question : {question,questionLoading},
    match
  } = props;
  

  useEffect(() => {
    getRoomById(match.params.roomid);
    return () => {
      roomUnload();
    };
  }, [getRoomById, match.params.roomid, roomUnload]);

  useEffect(() => {
    getQuestionById(match.params.questionid);
    return () => {
      questionUnload();
    };
  }, [getQuestionById, match.params.questionid, questionUnload]);

  useEffect(() => {
    getUserAnswer(match.params.questionid);
    return () => {
      answerUnload();
    };
  }, [getUserAnswer, match.params.questionid, answerUnload]);

  if(answer != null){
    return <Redirect to={`/${match.params.roomid}/question`} />;
  }

  return ((room == null || roomLoading) || (question == null || questionLoading)) ? (
    <Fragment>
      {(!roomLoading) && (room == null) || (!questionLoading) && (question == null)  ? (<NotFound></NotFound>):(<Loading></Loading>) }
    </Fragment>
  ) : (
      <Fragment>
      <div className="fullscreen bg fullscreen">
      <Container fluid className='topic'>
            <h1>ANSWER</h1>
          </Container>
        <Container>
            <AnswerForm room={room} question={question}/>
        </Container>
     </div>
    </Fragment>
    )
};

const mapStateToProps = (state) => ({
  room: state.room,
  auth: state.auth,
  question: state.question,
  answer: state.answer
});

export default connect(mapStateToProps, { getRoomById, roomUnload, getQuestionById, questionUnload, getUserAnswer, answerUnload})(
  Answer
);
