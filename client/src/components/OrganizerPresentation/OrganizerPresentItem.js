import React, { useState } from "react";
import { Modal, ModalBody, Button, ModalHeader } from "reactstrap";

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
        <div className="card-block">
          <Button color="#e5e5e5" onClick={toggle} className="card-block">
            <div>{ask.text}</div>
          </Button>
        </div>
        <br />

        <Modal isOpen={modal} toggle={toggle} className="card-block">
          <ModalHeader close={closeBtn}></ModalHeader>
          <ModalBody>
            <br />
            <br />
            <br />
            <h2 className="text-center">{ask.text}</h2>
            <br />
            <br />
            <br />
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default OrganizerPresentItem;
