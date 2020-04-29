import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getRoomByOwnerId,
  orgRoomListUnload,
} from "../../actions/orgRoomActions";
import OrganizerRoomList from "./OrganizerRoomList";
import { Container } from "reactstrap";
const OrganizerRoom = (props) => {
  //mockup user
  const user = {
    _id: "5e85403922192a21e87fbbaa",
    email: "ballpwd5@gmail.com",
    userName: "ballpwd5",
  };

  const {
    getRoomByOwnerId,
    orgRoomListUnload,
    orgRoom: { roomList, loading },
  } = props;

  useEffect(() => {
    getRoomByOwnerId(user._id);
    return () => {
      orgRoomListUnload();
    };
  }, [getRoomByOwnerId, user._id, orgRoomListUnload]);

  console.log(roomList);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <Fragment>
      <Container fluid>
        <h1 className="org-h1 text-center">Hi "{user.userName}"</h1>
        <p className="text-danger text-center">
          {" "}
          Mockup Organizer Room for User ballpwd5{" "}
        </p>
      </Container>
      <Container fluid>
        <div>{<OrganizerRoomList roomList={roomList} />}</div>
      </Container>

      <div className="text-center mt-5">
        <Link to="/" className="btn btn-dark org-btn">
          MANAGE ROOM
        </Link>
      </div>
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-light org-btn">
          Go to Home
        </Link>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  orgRoom: state.orgRoom,
});

export default connect(mapStateToProps, {
  getRoomByOwnerId,
  orgRoomListUnload,
})(OrganizerRoom);
