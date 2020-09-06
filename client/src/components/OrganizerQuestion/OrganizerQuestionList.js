import React, { Fragment, useState } from "react";
import OrganizerQuestionItem from "./OrganizerQuestionItem";
import { Card, Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import plus from "../../assets/button.svg";
import CreateQuestion from "./CreateQuestion";

const OrganizerQuestionList = (props) => {
  const [modal, setModal] = useState(false);
  const { room, questionList } = props;
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <Fragment>
      <div className="pt-2 px-4">
        <h4 className="org-h4"> Question </h4>
        <hr />
        {Array.isArray(questionList)}
        {questionList.map((question) => (
          <OrganizerQuestionItem key={question._id} question={question} />
        ))}
      </div>
      <div>
        <Card>
          <Button
            onClick={toggle}
            size="lg"
            style={{
              backgroundColor: "#c4c4c4",
              borderColor: "white",
              color: "black",
            }}
            className="pre-box pt-4 px-4"
          >
            <p className="org-p">
              CREATE NEW QUESTION{" "}
              <img src={plus} width="40px" height="40px"></img>
            </p>
          </Button>
        </Card>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="lg" centered>
        <ModalHeader
          close={closeBtn}
          className="border-0 pb-0"
          cssModule={{ "modal-title": "w-100 text-center pt-5" }}
        >
          <p className="org-h3">CREATE NEW QUESTION</p>
        </ModalHeader>
        <ModalBody>
          <div>
            <CreateQuestion toggle={toggle} room={room} />
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default OrganizerQuestionList;
