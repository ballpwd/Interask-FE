import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import OrganizerPresentList from "./OrganizerPresentList";
import {getOrgAskList, orgAskListUnload} from "../../actions/orgAskActions";
import { getOrgRoomById, orgRoomUnload } from "../../actions/orgRoomActions";
import { Container } from "reactstrap";
import Loading from '../Loading/Loading';

const OrganizerPresent = ({
  getOrgRoomById,
  orgRoomUnload,
  getOrgAskList,
  orgAskListUnload,
  orgRoom: { room, roomLoading},
  orgAsk: { askList, askLoading },
  match,
}) => {
  useEffect(() => {
    getOrgRoomById(match.params.id);
    return () => {
      orgRoomUnload();
    };
  }, [getOrgRoomById, match.params.id, orgRoomUnload]);

  useEffect(() => {
    getOrgAskList(match.params.id);
    return () => {
      orgAskListUnload();
    };
  }, [getOrgAskList, match.params.id, orgAskListUnload]);

  return (roomLoading || askLoading) ? (
    <Loading></Loading> 
  ) : (
    <Fragment>
      <div className="fullscreen bg">
        <Container fluid>
          <h1 className="org-h1 text-center">Ask Presentation</h1>
        </Container>
        <Container fluid>
          <h5 className="org-h5 text-center">
            ROOM: {room.roomName}
            <br />
            ROOMID: {room._id}
          </h5>

          {<OrganizerPresentList askList={askList} />}
        </Container>
        <div>
          <Link to="/" className="btn btn-primary">
            Go to Home
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  orgRoom: state.orgRoom,
  orgAsk: state.orgAsk,
});

export default connect(mapStateToProps, {
  getOrgRoomById,
  getOrgAskList,
  orgRoomUnload,
  orgAskListUnload,
})(OrganizerPresent);
