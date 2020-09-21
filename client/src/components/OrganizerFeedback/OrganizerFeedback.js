import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getOrgRoomById, orgRoomUnload } from "../../actions/orgRoomActions";
import {
  getOrgFeedbackList,
  orgFeedbackListUnload,
} from "../../actions/orgFeedbackActions";
import OrganizerFeedbackList from "./OrganizerFeedbackList";
import OrganizerFeedbackAnalyze from './OrganizerFeedbackAnalyze' ;
import Loading from "../Loading/Loading";
import { Container, Row, Col, Button } from "reactstrap";
import io from "socket.io-client";
import NavbarOrg from '../Navbar/NavbarOrg';



const OrganizerFeedback = (props) => {
  const {
    getOrgRoomById,
    orgRoomUnload,
    getOrgFeedbackList,
    orgFeedbackListUnload,
    orgRoom: { room, roomLoading },
    orgFeedback: { feedbackList, feedbackLoading },
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

    socket.on("organizerFeedback", (data) => {
      if (data.status === 200) {
        getOrgFeedbackList(match.params.roomid);
      }
    });

    getOrgFeedbackList(match.params.roomid);

    return () => {
      orgFeedbackListUnload();
      socket.disconnect();
    };
  }, [getOrgFeedbackList, match.params.roomid, orgFeedbackListUnload]);

  console.log(room);
  console.log(feedbackList);

  return roomLoading || feedbackLoading ? (
    <Loading></Loading>
  ) : (
    <Fragment>
      <NavbarOrg></NavbarOrg>
      <Container fluid>
        <h1 className="org-h1 text-center orgfeedback-section">Feedback</h1>
      </Container>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col md="5" xs="12" className="mt-4">
            <h5 className="org-h5">
              ROOM: {room.roomName}
              <br />
              ROOMID: {room._id}
            </h5>
            {<OrganizerFeedbackList feedbackList={feedbackList} />}
          </Col>
          <Col md="5" xs="12" className="mt-4">
            {<OrganizerFeedbackAnalyze feedbackList={feedbackList} />}
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
  orgFeedback: state.orgFeedback,
});

export default connect(mapStateToProps, {
  getOrgRoomById,
  getOrgFeedbackList,
  orgRoomUnload,
  orgFeedbackListUnload,
})(OrganizerFeedback);
