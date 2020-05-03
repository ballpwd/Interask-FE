import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAskByRoomIdUserId, askUnload } from "../../actions/askActions";
import { getRoomById, roomUnload } from "../../actions/roomActions";
import AskHistory from "./AskHistory";
import AskForm from "./AskForm";
import { Container, Row, Col } from "reactstrap";

const Ask = (props) => {
  const {
    getRoomById,
    roomUnload,
    getAskByRoomIdUserId,
    askUnload,
    ask: { askList, loading },
    room: { room },
    match,
  } = props;

  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayIndex = d.getDay();
  const dayName = days[dayIndex];
  const timeString = dayName + " " + day + "-" + month + "-" + year;

  useEffect(() => {
    getRoomById(match.params.id);
    return () => {
      roomUnload();
    };
  }, [getRoomById, match.params.id, roomUnload]);

  useEffect(() => {
    getAskByRoomIdUserId(match.params.id, "5e85403922192a21e87fbbaa");
    return () => {
      askUnload();
    };
  }, [getAskByRoomIdUserId, match.params.id, askUnload]);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <Fragment>
      <div className="ask-bg">
        <Container fluid>
          <h1 className="ask-h1 p-4">ASK</h1>
        </Container>
        <Container>
          <Row>
            <Col className="question-column mx-2">
              <div className="p-3">
                <h3 className="ask-h3 ">{room.roomName}</h3>
                <div className="todayTime">{timeString}</div>
              </div>
              {askList && <AskHistory askList={askList} />}
            </Col>
          </Row>
        </Container>
        <Container>{room && <AskForm room={room} />}</Container>
        <div className="mt-3 text-center">
          <Link to="/" className="btn btn-primary">
            Go to Home
          </Link>
        </div>{" "}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  room: state.room,
  ask: state.ask,
});

export default connect(mapStateToProps, {
  getRoomById,
  getAskByRoomIdUserId,
  roomUnload,
  askUnload,
})(Ask);
