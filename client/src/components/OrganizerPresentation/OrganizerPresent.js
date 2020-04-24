import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import OrganizerPresentList from "./OrganizerPresentList";
import { getOrgAskByRoomId, orgAskListUnload} from "../../actions/orgAskActions";
import { getOrgRoomById, orgRoomUnload } from "../../actions/orgRoomActions";

const OrganizerPresent = ({
  getOrgRoomById,
  orgRoomUnload,
  getOrgAskByRoomId,
  orgAskListUnload,
  orgRoom: { room },
  orgAsk: { askList, loading },
  match,
}) => {
  useEffect(() => {
    getOrgRoomById(match.params.id);
    return () => { orgRoomUnload() }
  }, [getOrgRoomById, match.params.id, orgRoomUnload]);

  useEffect(() => {
    getOrgAskByRoomId(match.params.id);
    return () => { orgAskListUnload() }
  }, [getOrgAskByRoomId, match.params.id, orgAskListUnload]);

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

export default connect(mapStateToProps, { getOrgRoomById, getOrgAskByRoomId, orgRoomUnload, orgAskListUnload })(
  OrganizerPresent
);
