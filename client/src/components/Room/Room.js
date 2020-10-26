import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getRoomList, roomListUnload } from "../../actions/roomActions";
import { joinRoom } from "../../actions/roomActions";
import leave_room from "../../assets/leave.svg";
import RoomList from "./RoomList";
import { Container, Button, Row, Col } from "reactstrap";
import Loading from "../Loading/Loading";
import queryString from "query-string";
import {useLocation} from "react-router-dom";
const Room = (props) => {
  const [edit, setEdit] = useState(false);
  const leave = () => setEdit(!edit);
  const {
    getRoomList,
    roomListUnload,
    joinRoom,
    room: { roomList, roomLoading },
    auth: { user },
  } = props;

  //join room from queryString
  const join = queryString.parse(useLocation().search).join
  useEffect(() => {
    if(join){   // check join from queryString
     console.log('join room - ',join)
     joinRoom(join);
    }
  }, []);

  // fetch roomlist 
  useEffect(() => {
    getRoomList();
    return () => {
      roomListUnload();
    };
  }, [getRoomList, roomListUnload]);

  console.log(roomList);

  return roomLoading ? (
    <Loading></Loading>
  ) : (
    <Fragment>
      <div className="fullscreen bg">
        <Container fluid>
          <div className="pt-4">
            <h1 className="room-h1 text-break">Hi, "{user.userName}"</h1>
            <br /> <h3 className="room-h3">SELECT ROOM</h3>
          </div>
        </Container>
        <Container fluid className="text-center">
          {<RoomList roomList={roomList} edit={edit} />}
          
          {roomList.length >= 1 ? (
            <Col>
              {!edit ? (
                <Button
                  className="btn-leave-room"
                  onClick={leave}
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
              ) : (
                <Button
                  className="btn-leave-room"
                  onClick={leave}
                  style={{
                    backgroundColor: "#4BB543",
                    borderColor: "#121629",
                    color: "white",
                    borderRadius: "10px 10px 10px 10px",
                    fontSize: "24px",
                  }}
                  size="md"
                >
                  COMPLETE
                </Button>
              )}
              </Col>
          ) : null}
         
        </Container>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  room: state.room,
  auth: state.auth,
});

export default connect(mapStateToProps, { getRoomList, roomListUnload, joinRoom })(Room);
