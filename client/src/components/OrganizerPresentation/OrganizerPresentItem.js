import React, { useState } from "react";
import { Modal, ModalBody, Button, ModalHeader, Card } from "reactstrap";

const OrganizerPresentItem = ({ ask }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );
  return (
    <div>
      <div className="container-fuild">
        <Card>
          <Button
            color="#e5e5e5"
            onClick={toggle}
            size="lg"
            className="pre-box "
          >
            <div>{ask.text}</div>
          </Button>
        </Card>
      </div>
      <br />

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader close={closeBtn}></ModalHeader>
        <ModalBody>
          <br />
          <br />
          <br />
          <h2 className="text-center text-break">{ask.text}</h2>
          <br />
          <br />
          <br />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default OrganizerPresentItem;
