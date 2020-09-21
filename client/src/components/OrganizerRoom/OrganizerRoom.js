import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getOrgRoomList,
  orgRoomListUnload,
} from "../../actions/orgRoomActions";
import OrganizerRoomList from "./OrganizerRoomList";
import { Container, Row, Button } from "reactstrap";
import Loading from '../Loading/Loading';

const OrganizerRoom = (props) => {
  const [edit, setEdit] = useState(false);
  const manage = () => setEdit(!edit);

  const {
    getOrgRoomList,
    orgRoomListUnload,
    orgRoom: { roomList, roomLoading },
    auth: { user },
  } = props;

  useEffect(() => {
    getOrgRoomList();
    return () => {
      orgRoomListUnload();
    };
  }, [getOrgRoomList, orgRoomListUnload]);

  return roomLoading ? (
    <Loading></Loading>
  ) : (
    <Fragment>
      <Container fluid>
        <h1 className="org-h1 text-center orgroom-section">Hi "{user.userName}"</h1>
      </Container>
      <Container>
        <div className="pt-2 px-4">
          <h3 className="org-h3 text-center">Organizer ROOM</h3>
          <hr />
        </div>
        <Row>
          <div>{<OrganizerRoomList roomList={roomList} edit={edit} />}</div>
        </Row>
        <Row className="justify-content-center mt-2">
          {!edit ? (
            <Button onClick={manage} className="btn btn-dark org-btn">
              MANAGE ROOM
            </Button>
          ) : (
            <Button onClick={manage} className="btn btn-dark org-btn">
              COMPLETE
            </Button>
          )}
        </Row>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  orgRoom: state.orgRoom,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getOrgRoomList,
  orgRoomListUnload,
})(OrganizerRoom);
