import React, { Fragment, useState } from "react";
import OrganizerQuestionItem from "./OrganizerQuestionItem";
import {
  Card,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
  Container,
} from "reactstrap";
import plus from "../../assets/button.svg";
import CreateQuestion from "./CreateQuestion";

const OrganizerQuestionList = (props) => {
  const [modal, setModal] = useState(false);
  const { room, question, questionList, edit } = props;
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <Fragment>
      {questionList.length >= 1 ? (
        <div className=" px-4">
          {Array.isArray(questionList)}
          {questionList.map((question) => (
            <OrganizerQuestionItem
              key={question._id}
              question={question}
              room={room}
              edit={edit}
            />
          ))}
        </div>
      ) : (
        <Row className="justify-content-center mt-2">
          <p className="nulltextroomorg text-center">
            {" "}
            PLEASE CREATE YOUR QUESTION
          </p>
        </Row>
      )}
      <div className=" pt-3 px-4">
        <Container fluid>
          <Card>
            <Button
              onClick={toggle}
              size="lg"
              style={{
                backgroundColor: "#EEBBC3",
                borderColor: "#EEBBC3",
                color: "black",
              }}
              className="pre-box pt-4"
            >
              <p className="h5 text-center ">
                CREATE THE QUESTION{" "}
                <img src={plus} width="40px" height="40px"></img>
              </p>
            </Button>
          </Card>
        </Container>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="lg" centered>
        <ModalHeader
          close={closeBtn}
          className="border-0 pb-0"
          cssModule={{ "modal-title": "w-100 text-center pt-5" }}
        >
          <p className="org-h4">CREATE THE QUESTION</p>
        </ModalHeader>
        <ModalBody>
          <div>
            <CreateQuestion toggle={toggle} question={question} room={room} />
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default OrganizerQuestionList;
