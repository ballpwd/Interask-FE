import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getOrgRoomById,
  editAskStatus,
  orgRoomUnload,
  editFeedbackStatus,
} from "../../actions/orgRoomActions";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import ask from "../../assets/ask.svg";
import question from "../../assets/question.svg";
import feedback from "../../assets/feedback.svg";
import QRCode from "qrcode.react";
import NotFound from "../layout/NotFound";

const OrganizerMenu = (props) => {
  const {
    getOrgRoomById,
    orgRoomUnload,
    editAskStatus,
    editFeedbackStatus,
    orgRoom: { room, roomLoading },
    match,
  } = props;

  //qr modal
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  //fetch room
  useEffect(() => {
    getOrgRoomById(match.params.roomid);
    return () => {
      orgRoomUnload();
    };
  }, [getOrgRoomById, match.params.roomid, orgRoomUnload]);

  console.log(roomLoading);
  console.log(room);

  return room == null || roomLoading ? (
    <Fragment>
      {(!roomLoading) && (room == null)? (<NotFound></NotFound>):(<Loading></Loading>) }
    </Fragment>
  ) : (
    <Fragment>
      <div className="fullscreen bg">
        <Container className="orgmenu-room">
          <p>ROOM : {room.roomName}</p>
          <p>PIN : {room.code}</p>
        </Container>
        <Container>
          <Row className="orgmenu-row">
            <Col className="my-4">
              <Link to={`/organizer/${room._id}/ask`}>
                <Button
                  className="orgmenu-box"
                  size="lg"
                  style={{
                    backgroundColor: "#EEBBC3",
                    borderColor: "#121629",
                    borderWidth: "2px",
                    color: "#232946",
                  }}
                >
                  <p className="orgmenu-text">ASK</p>
                  <img src={ask} width="64px" height="64px"></img>
                </Button>
              </Link>

              <Col className="text-center mt-2">
                <div className="custom-control custom-switch text-center ">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="controlAskSwitch"
                    checked={room.askStatus}
                    onChange={() => editAskStatus(room._id)}
                  />

                  <label
                    className="custom-control-label anonymous"
                    htmlFor="controlAskSwitch"
                  >
                    ACCEPTING QUESTION
                  </label>
                </div>
              </Col>
              <Col className="text-center mt-5 ">
                <Link to={`/organizer/${room._id}/ask/present`}>
                  <Button
                    className="org-btn"
                    style={{
                      backgroundColor: "#FF8BA7",
                      borderColor: "#121629",
                      borderWidth: "2px",
                      color: "#232946",
                    }}
                  >
                    Presentation
                  </Button>
                </Link>
              </Col>
            </Col>
            <Col className="my-4">
              <Link to={`/organizer/${room._id}/feedback`}>
                <Button
                  className="orgmenu-box"
                  size="lg"
                  style={{
                    backgroundColor: "#EEBBC3",
                    borderColor: "#121629",
                    borderWidth: "2px",
                    color: "#232946",
                  }}
                >
                  <p className="orgmenu-text">FEEDBACK</p>
                  <img src={feedback} width="64px" height="64px"></img>
                </Button>
              </Link>
              <Col className="text-center mt-2">
                <div className="custom-control custom-switch text-center ">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="controlFeedbackSwitch"
                    checked={room.feedbackStatus}
                    onChange={() => editFeedbackStatus(room._id)}
                  />

                  <label
                    className="custom-control-label anonymous"
                    htmlFor="controlFeedbackSwitch"
                  >
                    ACCEPTING FEEDBACK
                  </label>
                </div>
              </Col>
            </Col>
            <Col className="my-4">
              <Link to={`/organizer/${room._id}/question`}>
                <Button
                  className="orgmenu-box"
                  size="lg"
                  style={{
                    backgroundColor: "#EEBBC3",
                    borderColor: "#121629",
                    borderWidth: "2px",
                    color: "#232946",
                  }}
                >
                  <p className="orgmenu-text">Q&A</p>
                  <img src={question} width="64px" height="64px"></img>
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button
                className="org-btn"
                onClick={toggle}
                style={{
                  backgroundColor: "#FF8BA7",
                  borderColor: "#121629",
                  borderWidth: "2px",
                  color: "#232946",
                }}
              >
                Show QR Code
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Modal isOpen={modal} toggle={toggle} size="lg" centered>
        <ModalHeader
          close={closeBtn}
          className="border-0 pb-0"
          cssModule={{ "modal-title": "w-100 text-center pt-5" }}
        >
          <p className="org-h4">Scan QR Code To Join</p>
        </ModalHeader>
        <ModalBody className="text-center">
          <QRCode
            // size="256"
            value={`${window.location.origin}/room?join=${room.code}`}
            className='qrcode'
          />

          <p className="org-h4 pt-3"> PIN : {room.code} </p>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  orgRoom: state.orgRoom,
});

export default connect(mapStateToProps, {
  getOrgRoomById,
  editAskStatus,
  orgRoomUnload,
  editFeedbackStatus,
})(OrganizerMenu);
