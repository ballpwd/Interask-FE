import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getRoomByUserId, roomListUnload } from "../../actions/roomActions";
import RoomList from "./RoomList";
import { Container } from "reactstrap";
const Room = (props) => {
  //mockup user
  const user = {
    _id: "5e85403922192a21e87fbbaa",
    email: "ballpwd5@gmail.com",
    userName: "ballpwd5",
  };

  const {
    getRoomByUserId,
    roomListUnload,
    room: { roomList, roomLoading },
  } = props;

  useEffect(() => {
    getRoomByUserId(user._id);
    return () => {
      roomListUnload();
    };
  }, [getRoomByUserId, roomListUnload, user._id]);

  console.log(roomList);

  return roomLoading ? (
    <h1>Loading</h1>
  ) : (
    <Fragment>
      <div className="fullscreen room-bg">
        <Container fluid className="head-room">
          <div className="p-4">
            <h1 className="room-h1">Hi "{user.userName}"</h1>
            {/* <p className="text-danger text-center">
            {" "}
            Mockup Room for User ballpwd5{" "}
          </p> */}
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
          {<RoomList roomList={roomList} />}

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
});

export default connect(mapStateToProps, { getRoomByUserId, roomListUnload })(
  Room
);
