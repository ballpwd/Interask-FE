import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import OrganizerPresentList from "./OrganizerPresentList";
import { getOrgAskByRoomId } from "../actions/orgAskActions";
import { getOrgRoomById } from "../actions/orgRoomActions";

const OrganizerPresent = ({
  getOrgRoomById,
  getOrgAskByRoomId,
  orgRoom: { room },
  orgAsk: { askList, loading },
  match,
}) => {
  useEffect(() => {
    getOrgRoomById(match.params.id);
  }, [getOrgRoomById, match.params.id]);

  useEffect(() => {
    getOrgAskByRoomId(match.params.id);
  }, [getOrgAskByRoomId, match.params.id]);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <Fragment>
      <div>
        <div className="container-fluid">
          <h1 className="text-center font-weight-bold">Ask Presentation</h1>
          <div className="container-fluid">
            <h5 className="text-center">
              ROOM: {room.roomName}
              <br />
              ROOMID: {room._id}
            </h5>
          </div>
          <div>{<OrganizerPresentList askList={askList} />}</div>
        </div>
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

export default connect(mapStateToProps, { getOrgRoomById, getOrgAskByRoomId })(
  OrganizerPresent
);
