import React, { useEffect, Fragment, useState } from "react";
import { connect } from "react-redux";
import OrganizerQuestionList from "./OrganizerQuestionList";
import {
  getOrgQuestionList,
  orgQuestionListUnload,
} from "../../actions/orgQuestionActions";
import { getOrgRoomById, orgRoomUnload } from "../../actions/orgRoomActions";
import { Container, Button, Row, Col } from "reactstrap";
import Loading from "../Loading/Loading";
import NotFound from "../layout/NotFound";

const OrganizerQuestion = (props) => {
  const {
    getOrgRoomById,
    orgRoomUnload,
    getOrgQuestionList,
    orgQuestionListUnload,
    orgRoom: { room, roomLoading },
    orgQuestion: { questionList, questionLoading },
    match,
  } = props;

  const [edit, setEdit] = useState(false);
  const manage = () => setEdit(!edit);

  useEffect(() => {
    getOrgRoomById(match.params.roomid);
    return () => {
      orgRoomUnload();
    };
  }, [getOrgRoomById, match.params.roomid, orgRoomUnload]);

  useEffect(() => {
    getOrgQuestionList(match.params.roomid);
    return () => {
      orgQuestionListUnload();
    };
  }, [getOrgQuestionList, match.params.roomid, orgQuestionListUnload]);

  return ((room == null || roomLoading) || questionLoading) ? (
    <Fragment>
      {(!roomLoading) && (room == null)? (<NotFound></NotFound>):(<Loading></Loading>) }
    </Fragment>
  ) : (
    <Fragment>
      <div className="fullscreen bg">
        <Container fluid>
          <h1 className="org-h1 text-center org-section">Q&A</h1>
        </Container>
        <Container fluid>
          <h5 className="org-h5 text-center">
            ROOM: {room.roomName}
            <br />
            PIN: {room.code}
          </h5>

          <Container fluid>
            <Row className="pt-4 px-4">
              <Col className="text-left mt-2">
                <h4 className="org-h3 "> Question </h4>
              </Col>
              {questionList.length >= 1 ? (
                <Col className="text-right mt-2">
                  {!edit ? (
                    <Button
                      onClick={manage}
                      className="org-btn"
                      style={{
                        backgroundColor: "#FF8BA7",
                        borderColor: "#121629",
                        borderWidth: "2px",
                        color: "#232946",
                      }}
                    >
                      MANAGE QUESTION
                    </Button>
                  ) : (
                    <Button onClick={manage} className="btn btn-light org-btn">
                      COMPLETE
                    </Button>
                  )}
                </Col>
              ) : null}
            </Row>
            <hr />
          </Container>

          {
            <OrganizerQuestionList
              questionList={questionList}
              room={room}
              edit={edit}
            />
          }
        </Container>
      </div>
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
