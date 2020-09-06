import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import OrganizerQuestionList from "./OrganizerQuestionList";
import {
  getOrgQuestionList,
  orgQuestionListUnload,
} from "../../actions/orgQuestionActions";
import { getOrgRoomById, orgRoomUnload } from "../../actions/orgRoomActions";
import { Container } from "reactstrap";
import Loading from "../Loading/Loading";
import io from "socket.io-client";

const OrganizerQuestion = ({
  getOrgRoomById,
  orgRoomUnload,
  getOrgQuestionList,
  orgQuestionListUnload,
  orgRoom: { room, roomLoading },
  orgQuestion: { questionList, questionLoading },
  match,
}) => {
  useEffect(() => {
    getOrgRoomById(match.params.id);
    return () => {
      orgRoomUnload();
    };
  }, [getOrgRoomById, match.params.id, orgRoomUnload]);

  useEffect(() => {
    let socket = io.connect("http://localhost:5000");

    socket.emit("room", match.params.id);

    socket.on("organizerQuestion", (data) => {
      if (data.status === 200) {
        getOrgQuestionList(match.params.id);
      }
    });

    getOrgQuestionList(match.params.id);

    return () => {
      orgQuestionListUnload();
      socket.disconnect();
    };
  }, [getOrgQuestionList, match.params.id, orgQuestionListUnload]);

  return roomLoading || questionLoading ? (
    <Loading></Loading>
  ) : (
    <Fragment>
      <Container fluid>
        <h1 className="org-h1 text-center">Q&A</h1>
      </Container>
      <Container fluid>
        <h5 className="org-h5 text-center">
          ROOM: {room.roomName}
          <br />
          ROOMID: {room._id}
        </h5>

        {<OrganizerQuestionList questionList={questionList} room={room} />}
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  orgRoom: state.orgRoom,
  orgQuestion: state.orgQuestion,
});

export default connect(mapStateToProps, {
  getOrgRoomById,
  getOrgQuestionList,
  orgRoomUnload,
  orgQuestionListUnload,
})(OrganizerQuestion);
