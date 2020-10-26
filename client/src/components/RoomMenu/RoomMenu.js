import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getRoomById, roomUnload } from "../../actions/roomActions";
import { Container, Button, Row, Modal, ModalBody, ModalHeader } from "reactstrap";
import Loading from "../Loading/Loading";
import room_ask from "../../assets/room_ask.svg";
import room_question from "../../assets/room_question.svg";
import room_feedback from "../../assets/room_feedback.svg";
import { leaveRoom } from "../../actions/roomActions";
import leave_room from "../../assets/leave.svg";
import LeaveRoom from "../Room/LeaveRoom";
import close from "../../assets/close.svg";
import NotFound from "../layout/NotFound";

const RoomMenu = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  const {
    roomUnload,
    getRoomById,
    room: { room, roomLoading},
    match,
  } = props;

  useEffect(() => {
    getRoomById(match.params.roomid);
    return () => {
      roomUnload();
    };
  }, [getRoomById, match.params.roomid, roomUnload]);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );
    
  

  return room == null || roomLoading ? (
    <Fragment>
      {(!roomLoading) && (room == null)? (<NotFound></NotFound>):(<Loading></Loading>) }
    </Fragment>
  ) : (
    <Fragment>
      <div className="fullscreen bg">
        <Container fluid>
          <div className="pt-4">
            <h1 className="room-h1">Welcome</h1>
            <br/>
            <h3 className="room-h3 text-break">ROOM : {room.roomName}</h3>
            {console.log(room)}
           
          </div>
        </Container>
        <Container fluid className="text-center">
          <Row className="justify-content-center">
            <Link to={`/${room._id}/ask`}>
              <Button
                className="room-box-ask"
                style={{
                  backgroundColor: "white",
                  borderColor: "#121629",
                  color: "#FF4A4A",
                  borderRadius: "10px 10px 10px 10px",
                  fontSize: "24px",
                  borderRight: "50px solid",
                }}
                size="md"
              >
                <img src={room_ask} className="room-img"></img>
                ASK
              </Button>
            </Link>
          </Row>
          <Row className="justify-content-center" >
            <Link to={`/${room._id}/feedback`}>
              <Button
                className="room-box-feedback"
                style={{
                  backgroundColor: "white",
                  borderColor: "#121629",
                  color: "#7ADF7E",
                  borderRadius: "10px 10px 10px 10px",
                  fontSize: "24px",
                  borderRight: "50px solid",
                }}
                size="md"
              >
                <img src={room_feedback} className="room-img"></img>
                FEEDBACK
              </Button>
            </Link>
          </Row>
          <Row className="justify-content-center">
            <Link to={`/${room._id}/question`}>
              <Button
                className="room-box-question"
                style={{
                  backgroundColor: "white",
                  borderColor: "#121629",
                  color: "#FEBE5F",
                  borderRadius: "10px 10px 10px 10px",
                  fontSize: "24px",
                  borderRight: "50px solid",
                }}
                size="md"
              >
                <img src={room_question} className="room-img"></img>
                Q&A
              </Button>
            </Link>
          </Row> 
          <Row className="justify-content-center pt-4 ">
                <Button
                  className="btn-leave"
                  onClick={toggle}
                  style={{
                    backgroundColor: "#d4d8f0",
                    borderColor: "#121629",
                    color: "#232946",
                    borderRadius: "10px 10px 10px 10px",
                    fontSize: "24px",
                  }}
                  size="md"
                >
                  <div>
                    <img
                      src={leave_room}
                      className="leave-white"
                      width="38px"
                      height="38px"
                    ></img>{" "}
                    LEAVE ROOM
                  </div>
                </Button>
              )
          </Row>
          <Row className="justify-content-center p-3 ">
            <p className="room-creator text-break">Created room by : {room.owner.userName}</p>
          </Row>
          
        </Container>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="lg" centered>
            <ModalHeader
              close={closeBtn}
              className="border-0 pb-0 "
              cssModule={{ "modal-title": "w-100 text-center pt-5" }}
            >
              <img src={close} width="128px" height="128px"></img>
              <p className="warn-leave">DO YOU WANT TO LEAVE</p>
              <p className="org-h4 text-break">"{room.roomName}" room ?</p>
            </ModalHeader>
            <ModalBody>
              <div>
                <LeaveRoom toggle={toggle} room={room} />
              </div>
            </ModalBody>
          </Modal>
          
    </Fragment>
  );


};

const mapStateToProps = (state) => ({
  room: state.room
});

export default connect(mapStateToProps, { getRoomById, roomUnload,leaveRoom })(RoomMenu);
