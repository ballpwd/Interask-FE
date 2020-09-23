import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { askIsAnswerUpdate } from "../../actions/orgAskActions";
import {
  Modal,
  ModalBody,
  Button,
  ModalHeader,
  Card,
  ModalFooter,
} from "reactstrap";

const OrganizerPresentItem = ({ ask, askIsAnswerUpdate }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  const itemStyle = ask.isAnswer ? {color: '#fff',backgroundColor: "#dc3545"}: {color: '#212529',backgroundColor: "#ffffff"}

  return (
    <div>
      <div className="container-fluid">
        <Card>
          <Button
            onClick={toggle}
            size="lg"
            className="pre-box"
            style={itemStyle}
          >
            <div>{ask.text}</div>
          </Button>
        </Card>
      </div>
      <br />
      <Modal
        isOpen={modal}
        toggle={toggle}
        size="lg"
        onClosed={() => askIsAnswerUpdate(ask._id)}
        centered
      >
        <ModalHeader close={closeBtn} className="border-0 pb-0"></ModalHeader>
        <ModalBody>
          <h2 className="text-center text-break">{ask.text}</h2>
        </ModalBody>
        <ModalFooter className="border-0 pb-0"></ModalFooter>
      </Modal>
    </div>
  );
};

export default connect(null, { askIsAnswerUpdate })(OrganizerPresentItem);
