import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getRoomList, roomListUnload } from "../../actions/roomActions";
import RoomList from "./RoomList";
import { Container } from "reactstrap";
import Loading from '../Loading/Loading';
const Room = (props) => {

  const {
    getRoomList,
    roomListUnload,
    room: { roomList, roomLoading },
    auth: { user }
  } = props;
  
  useEffect(() => {
    getRoomList();

    return () => {
      roomListUnload();
    };
  }, [getRoomList, roomListUnload]);

  console.log(roomList);

  return (roomLoading)? (
    <Loading></Loading>
  ) : (
    <Fragment>
      <div className="fullscreen room-bg">
        <Container fluid className="head-room">
          <div className="p-4">
            <h1 className="room-h1">Hi "{user.userName}"</h1>
            <br /> <h3 className="room-h3">SELECT ROOM</h3>
          </div>
        </Container>
        <Container fluid className="text-center">
          <div className="p-5">
            <br />
            <br />
            <br />
            <br />
          </div>
          {<RoomList roomList={roomList}/>}

          <div className="mt-5">
            <Link to="/" className="btn btn-primary">
              Go to Home
            </Link>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  room: state.room,
  auth: state.auth
});

export default connect(mapStateToProps, { getRoomList, roomListUnload })(
  Room
);
