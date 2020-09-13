import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getOrgRoomById, orgRoomUnload } from "../../actions/orgRoomActions";
import {
  getOrgAnswerList,
  orgAnswerListUnload,
} from "../../actions/orgAnswerActions";
import OrganizerAnswerList from "./OrganizerAnswerList";
import OrganizerAnswerAnalyze from "./OrganizerAnswerAnalyze";
import Loading from "../Loading/Loading";
import { Container, Row, Col, Button } from "reactstrap";
import io from "socket.io-client";

const OrganizerAnswer = (props) => {
  const {
    question,
    getOrgRoomById,
    orgRoomUnload,
    getOrgAnswerList,
    orgAnswerListUnload,
    orgRoom: { room, roomLoading },
    orgAnswer: { answer, answerList, answerLoading },
    match,
  } = props;

  useEffect(() => {
    getOrgRoomById(match.params.roomid);
    return () => {
      orgRoomUnload();
    };
  }, [getOrgRoomById, match.params.roomid, orgRoomUnload]);

  useEffect(() => {
    let socket = io.connect("http://localhost:5000");

    socket.emit("room", match.params.roomid);

    socket.on("organizerAnswer", (data) => {
      if (data.status === 200) {
        getOrgAnswerList(match.params.questionid);
      }
    });

    getOrgAnswerList(match.params.questionid);

    return () => {
      orgAnswerListUnload();
      socket.disconnect();
    };
  }, [getOrgAnswerList, match.params.questionid, orgAnswerListUnload]);

  console.log(room);
  console.log(answerList);

  return roomLoading || answerLoading ? (
    <Loading></Loading>
  ) : (
    <Fragment>
      <Container fluid>
        <h1 className="org-h1 text-center">Q&A</h1>
      </Container>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col md="5" xs="12" className="mt-4">
            <h5 className="org-h5">
              ROOM: {room.roomName}
              <br />
              ROOMID: {room._id}
            </h5>
            {<OrganizerAnswerList answerList={answerList} answer={answer} />}
          </Col>
          <Col md="5" xs="12" className="mt-4">
            {<OrganizerAnswerAnalyze answerList={answerList} />}
            <Row>
              <Col md="12" xs="12" className="text-center mt-5">
                <Button className="btn btn-dark org-btn">Export</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  orgRoom: state.orgRoom,
  orgAnswer: state.orgAnswer,
});

export default connect(mapStateToProps, {
  getOrgRoomById,
  getOrgAnswerList,
  orgRoomUnload,
  orgAnswerListUnload,
})(OrganizerAnswer);
