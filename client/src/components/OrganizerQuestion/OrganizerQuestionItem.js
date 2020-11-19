import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Card,
  Row,
  Col,
} from "reactstrap";
import EditQuestion from "./EditQuestion";
import editq from "../../assets/editq.svg";
import { editQuestionStatus } from "../../actions/orgQuestionActions";

const OrganizerQuestionItem = (props) => {
  const { room, question, edit, editQuestionStatus } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <Fragment>
      {!edit ? (
        <div className="container-fluid pt-3">
          <Link to={`/organizer/${room._id}/answer/${question._id}`}>
            <Card>
              <Button
                color="#e5e5e5"
                size="lg"
                style={{
                  backgroundColor: "#B8C1EC",
                  borderColor: "#B8C1EC",
                  color: "black",
                }}
                className="pre-box"
              >
                <Row className="justify-content-center pt-1 text-break">
                  {question.questionDetail}
                </Row>
              </Button>
            </Card>
          </Link>
        </div>
      ) : (
        <div className="container-fluid pt-3">
          <Card>
            <Button
              onClick={toggle}
              color="#e5e5e5"
              size="lg"
              style={{
                backgroundColor: "#bbb",
                borderColor: "#e5e5e5",
                color: "black",
              }}
              className="pre-box"
            >
              <div className="pt-2">
                <Row>
                  <Col></Col>
                  <Col className="pt-2">{question.questionDetail}</Col>
                  <Col className="text-right">
                    <img src={editq} alt='alt' width="48px" height="48px"></img>
                  </Col>
                </Row>
              </div>
            </Button>
          </Card>
        </div>
      )}
      <div className="custom-control custom-switch text-center ">
        <input
          type="checkbox"
          className="custom-control-input"
          id={`controlQuestionSwitch${question._id}`}
          checked={question.questionStatus}
          onChange={() => editQuestionStatus(question._id)}
        />

        <label
          className="custom-control-label question-switch"
          htmlFor={`controlQuestionSwitch${question._id}`}
        >
          ACCEPTING ANSWER
        </label>
      </div>

      <Modal isOpen={modal} toggle={toggle} size="lg" centered>
        <ModalHeader
          close={closeBtn}
          className="border-0 pb-0"
          cssModule={{ "modal-title": "w-100 text-center pt-5" }}
        >
          <p className="org-h4">EDIT QUESTION</p>
        </ModalHeader>
        <ModalBody>
          <div>
            <EditQuestion toggle={toggle} question={question} />
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default connect(null, { editQuestionStatus })(OrganizerQuestionItem);
